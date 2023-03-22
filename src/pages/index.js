import './index.css';

import {
  formFindDocumentNum,
  formFindDocumentDate,
  formDocument,

  Edit,Assingment,Finder,

  Approach,
  Condition,Destroy,Deorbit,
  Spacecraft,
     
  inputMassage,

  buttonAddDocument, buttonResetForm,
  titleForm

  ,objInfo
  ,objInfoNum

} from '../utils/constans.js'

import Object from '../scripts/Object.js';
import Section from '../scripts/Section.js';

import {
  checkVisibleTableHeader,
  isTableNotEmpty,
  clearForm
} from '../scripts/valdationTables.js'

import {
  getInputValues,
  createArrayObject
} from '../scripts/getInfo.js'

import {
  createReqvestDate,
  addTableFinder
} from '../scripts/finder.js'

import {
  setAssingmentInfo,
  setInfoSimple,
  setInfoCollision
} from '../scripts/addElement.js'

// проверка пустоты таблиц при загрузке
checkVisibleTableHeader ()
Finder.headerTable.classList.add('header-table_hidden')

// обработка формы при ее сбросе
buttonResetForm.addEventListener('click', ()=>{
  titleForm.textContent = 'Создание задания:';
  clearForm(formDocument)
})

//___________________________________
//  Отрисовка карточек
//___________________________________

// rendererCard
function rendererCard  (section, wrap)  {
  const card = generateCard(section);
  wrap.addItem(card, section.listTable);
}

// добавление карточки
function generateCard (section) { 
  const card = new Object(section, checkVisibleTableHeader).createCard()
  return card                 
}

// класс отрисовки
const section =  new Section({ renderer: rendererCard});

//___________________________________
//  Кнопки добавления
//___________________________________

// прожатие кнопки добавления объектов
function addListenerButtonAdd (section) {
  section.buttonAdd.addEventListener('click', ()=>{
    addElement(section)
    checkVisibleTableHeader ()
  });
}

// функция добавления КO, KA, Collision
const addElement = ({selectorTemplate, listTable, headerTable}) => {
  const obj = new Object( {selectorTemplate, listTable, headerTable}
                        , checkVisibleTableHeader).createCard()
  addCard(listTable, obj)
  return obj
}

function addCard(listTable, obj) {
  section.addItem(obj, listTable)
}

// кнопки добавления объектов
addListenerButtonAdd(Condition)
addListenerButtonAdd(Destroy)
addListenerButtonAdd(Deorbit)
addListenerButtonAdd(Approach)
addListenerButtonAdd(Spacecraft)

//___________________________________
//  Сборка объекта
//___________________________________
let data = {}

// сбор данных в объект

formDocument.addEventListener('submit', (evt) =>{
    data = {}
      evt.preventDefault();
      data.TaskNum = getInputValues (Assingment.inputList)
      data.Directive = {}
      data.Message = inputMassage.value

// проверка есть ли элементы в блоке
  // Condition
  if (isTableNotEmpty(Condition.listTable)) {
    data.Directive.Condition  = {}
    let info = data.Directive.Condition.ObjectInfos = []
    info = createArrayObject(Condition, info)
  }
  // Destroy
  if (isTableNotEmpty(Destroy.listTable)) {
    data.Directive.BreakUp  = {}
    let info = data.Directive.BreakUp.ObjectInfos = []
    info = createArrayObject(Destroy, info)
  }
  // Deorbit
  if (isTableNotEmpty(Deorbit.listTable)) {
    data.Directive.Deorbit  = {}
    let info = data.Directive.Deorbit.ObjectInfos = []
    info = createArrayObject(Deorbit, info)
  }
  // Spacecraft
  if (isTableNotEmpty(Spacecraft.listTable)) {
    data.Directive.ConditionKA  = {}
    let info = data.Directive.ConditionKA.ObjectInfos = []
    info = createArrayObject(Spacecraft, info)
  }
  // Approach
  if (isTableNotEmpty(Approach.listTable)) {
    data.Directive.CollisionApproach  = {}
    const info = data.Directive.CollisionApproach.Pairs = []
    const elementsList = (document.querySelector('.approach__list').querySelectorAll('.element'));
    
    elementsList.forEach((element, index) => {
      const obj = {}
      obj.IdPairs = index+1
      obj.CollisionApproachEpoch = element.querySelector('.item__input_type_time').value
      obj.OrbiteType = element.querySelector('.item__input_type_orbite').value

      const itemList = element.querySelectorAll('.objects__item')
      const inputList1 = itemList[0].querySelectorAll('.item__input')
      const inputList2 = itemList[1].querySelectorAll('.item__input')

      obj.FirstObject = (getInputValues(inputList1))
      obj.SecondObject = (getInputValues(inputList2))

      info.push(obj)
    })
  }

  // finnaly
  if ( !document.querySelector('.item__input_type_empty')) {
    buttonAddDocument.textContent = 'Добавить задание'
    titleForm.textContent = 'Создание задания:'

  // итоговый объект
    console.log (data)
    clearForm(formDocument)
    console.log('okey')
  } else {
    console.log('not okey')
  }
})


//___________________________________
//  Создание объекта для отправки на сервер
//___________________________________

// по номеру
formFindDocumentNum.addEventListener('submit', (evt)=> {
  evt.preventDefault();
    data = {}
    // объект для запроса
    data.TaskNum = getInputValues(Edit.inputNum)
    console.log(data)

    // finnaly
    clearForm(formFindDocumentNum)
    clearForm(formDocument)

    // готовый объект - будет приходить с сервера
    setInfo(objInfo)
});


// по дате
formFindDocumentDate.addEventListener('submit', (evt)=> {
  evt.preventDefault();
  createReqvestDate(data);
    
    // готовый массив - будет приходить с сервера
  addTableFinder(objInfoNum, setInfo);
});


//___________________________________
//  Обработка ответа
//___________________________________

// Обработка ответа (objInfo)
const setInfo = (objInfo) => {
  // очистка полей
  clearForm(formDocument)
    // заполнение полей
    setAssingmentInfo(Assingment,objInfo)
    // проверка существует ли блок в ответе
    if (objInfo.Directive.CollisionApproach) {
      const elementsListCollision = objInfo.Directive.CollisionApproach.Pairs;
      setInfoCollision(Approach, elementsListCollision, addElement);
      Approach.listTable.classList.remove('header-table_hidden')
    }
    if (objInfo.Directive.Condition) {
      const elementsListCondition = objInfo.Directive.Condition.ObjectInfos;
      setInfoSimple(Condition, elementsListCondition, addElement);
      Condition.listTable.classList.remove('header-table_hidden')
    }
    if (objInfo.Directive.BreakUp) {
      const elementsListBrakeUp = objInfo.Directive.BreakUp.ObjectInfos;
      setInfoSimple(Destroy, elementsListBrakeUp, addElement);
      Destroy.listTable.classList.remove('header-table_hidden')
    }
    if (objInfo.Directive.Deorbit) {
      const elementsListDeorbit = objInfo.Directive.Deorbit.ObjectInfos;
      setInfoSimple(Deorbit, elementsListDeorbit, addElement);
      Deorbit.listTable.classList.remove('header-table_hidden')
    }
    if (objInfo.Directive.ConditionKA) {
      const elementsListSpacecraft = objInfo.Directive.ConditionKA.ObjectInfos;
      setInfoSimple(Spacecraft, elementsListSpacecraft, addElement);
      Spacecraft.listTable.classList.remove('header-table_hidden')
    }

    inputMassage.value = objInfo.Message
    buttonAddDocument.textContent = 'Изменить задание'
    titleForm.textContent = 'Редактирование задания:'
}





