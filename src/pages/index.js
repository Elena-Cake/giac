import './index.css';
import {
  formFindDocument,
  formAddDocument,

  Edit,
  Assingment,

  Approach,
  Condition,Destroy,Deorbit,
  Spacecraft,
     
  inputMassage,

  listTableLists,

  buttonAddDocument,
  buttonResetForm,

  titleForm

  ,objInfo

} from '../utils/constans.js'

import Object from '../scripts/Object.js';
import Section from '../scripts/Section.js';

//___________________________________
//  Проверка таблиц
//___________________________________

// видимость хедеров таблиц
const checkVisibleTableHeader = () => {
  listTableLists.forEach(tableList => {
    const resultCheckTableEmpty = isTableNotEmpty(tableList)
    if (resultCheckTableEmpty) {
      tableList.classList.remove('header-table_hidden')
    } else {
      tableList.classList.add('header-table_hidden')
    }
  })
}

// проверка пустоты таблицы
const isTableNotEmpty = (listTable) => {
  return listTable.querySelector('.element') ? true : false
}

// проверка пустоты таблиц при загрузке
checkVisibleTableHeader ()


//___________________________________
//  Отрисовка карточек
//___________________________________

// rendererCard
function rendererCard  (data, section, wrap)  {
  const card = generateCard(section);
  wrap.addItem(card, section.listTable);
}

// добавление карточки
function generateCard (section) { 
  const card = new Object(section, checkVisibleTableHeader).createCard()
  return card                 
}

const section =  new Section({
  renderer: rendererCard
});

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
function addElement({selectorTemplate, listTable, headerTable}) {
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

function getInputValues (inputList) {
  const inputsValues = {}
  inputList.forEach(input => {
      inputsValues[input.name] = input.value
  });
  return inputsValues
}

function createArrayObject (section, info) {
  const elementsList = (section.listTable.querySelectorAll('.element'));
  elementsList.forEach((element) => {
  createSimpleObject(element, info)
  })
  return info
}

function createSimpleObject (element, info) {
  const inputList = element.querySelectorAll('.item__input')
  info.push(getInputValues(inputList))
}

let data = {}
// сбор данных в объект

formAddDocument.addEventListener('submit', (evt) =>{
    data = {}
      evt.preventDefault();
      data.TaskNum = getInputValues (Assingment.inputList)
      data.Directive = {}
      data.Message = inputMassage.value


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
  // итоговый объект
      console.log (data)
      buttonAddDocument.textContent = 'Добавить задание'
      titleForm.textContent = 'Создание задания:'
      formAddDocument.reset()
})


// обработка названия формы при сбросе формы
buttonResetForm.addEventListener('click', ()=>{
  titleForm.textContent = 'Создание задания:'
})


//___________________________________
//  запрос объекта (сбор из полей)
//___________________________________

formFindDocument.addEventListener('submit', (evt)=> {
  data = {}
    evt.preventDefault();
    data.TaskNum = getInputValues (Edit.inputList)

  clearForm(formAddDocument)
  setAssingmentInfo(Assingment,objInfo)

  
  if (objInfo.Directive.CollisionApproach) {
    const elementsListCollision = objInfo.Directive.CollisionApproach.Pairs;
    setInfoCollision(Approach, elementsListCollision);
  }
  if (objInfo.Directive.Condition) {
    const elementsListCondition = objInfo.Directive.Condition.ObjectInfos;
    setInfoSimple(Condition, elementsListCondition);
  }
  if (objInfo.Directive.BreakUp) {
    const elementsListBrakeUp = objInfo.Directive.BreakUp.ObjectInfos;
    setInfoSimple(Destroy, elementsListBrakeUp);
  }
  if (objInfo.Directive.Deorbit) {
    const elementsListDeorbit = objInfo.Directive.Deorbit.ObjectInfos;
    setInfoSimple(Deorbit, elementsListDeorbit);
  }
  if (objInfo.Directive.ConditionKA) {
    const elementsListSpacecraft = objInfo.Directive.ConditionKA.ObjectInfos;
    setInfoSimple(Spacecraft, elementsListSpacecraft)
  }

  inputMassage.value = objInfo.Message
  buttonAddDocument.textContent = 'Изменить задание'
  titleForm.textContent = 'Редактирование задания:'
})

function clearForm (form) {
  form.reset();
  const elementsList = document.querySelectorAll('.element')
  elementsList.forEach(element=> element.remove())
  checkVisibleTableHeader ()
}

function doNotEditInputs (card) {
  const listInputs = card.querySelectorAll('.item__input')
  const buttonSave = card.querySelector('.element__btn-done')
  listInputs.forEach(input =>{
      input.readOnly = true
      buttonSave.classList.add('element__btn-done_type_edit')
      input.classList.add('item__input_type_readonly')
   })
  }

//___________________________________
//  отрисовка полученного задания 
//___________________________________
function setAssingmentInfo (section, objInfo) {
    
  section.inputList.forEach(input=>{
      input.value = objInfo.TaskNum[input.name]
    })
}

function setInfoSimple (section, elementsList) { 
  elementsList.forEach((element) => {
    const card = addElement(section);
    const inputList = card.querySelectorAll('.item__input')
    
    inputList.forEach(input=>{
      input.value = element[input.name]
    })

    doNotEditInputs(card)
  })
}

function setInfoCollision (section, elementsList) { 
  elementsList.forEach((element) => {
    const card = addElement(section);
    const itemList = card.querySelectorAll('.objects__item')
    
    const inputListKA = itemList[0].querySelectorAll('.item__input')
    inputListKA.forEach(input=>{
        input.value = element.FirstObject[input.name]
      })

    const inputListKO = itemList[1].querySelectorAll('.item__input')
    inputListKO.forEach(input=>{
        input.value = element.SecondObject[input.name]
      })

    const inputTime = card.querySelector('.item__input_type_time')
    inputTime.value = element.CollisionApproachEpoch

    const inputOrbite = card.querySelector('.item__input_type_orbite').getElementsByTagName('option');
    for (let i = 0; i < inputOrbite.length; i++) {
        if (inputOrbite[i].value == element.OrbiteType)
        inputOrbite[i].selected = true;
    }
    doNotEditInputs(card)
  })
}