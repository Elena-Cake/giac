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
  listTableLists,

  buttonAddDocument, buttonResetForm,
  titleForm

  ,objInfo
  ,objInfoNum

} from '../utils/constans.js'

import Object from '../scripts/Object.js';
import Section from '../scripts/Section.js';
import TableTr from '../scripts/TableTr.js';

// import table from '../scripts/dataTble.js';

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
  document.querySelector('.finder__structure').classList.remove('header-table_hidden')
}

// проверка пустоты таблицы
const isTableNotEmpty = (listTable) => {
  return listTable.querySelector('.element') ? true : false
}

// проверка пустоты таблиц при загрузке
checkVisibleTableHeader ()

// обработка формы при сбросе формы
buttonResetForm.addEventListener('click', ()=>{
  titleForm.textContent = 'Создание задания:';
  clearForm(formDocument)
})

// зачистка
const clearForm = (form) => {
  form.reset();
  const elementsList = form.querySelectorAll('.element')
  elementsList.forEach(element=> element.remove())
  checkVisibleTableHeader ()
}

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

// сборка значений инпутов в объект
function getInputValues (inputList) {
  const inputsValues = {}
  inputList.forEach(input => {
      checkInvalidInput(input)
      inputsValues[input.name] = input.value
  });
  return inputsValues
}

// создание массива внутри объекта согласно количеству элементов
function createArrayObject (section, info) {
  const elementsList = (section.listTable.querySelectorAll('.element'));
  elementsList.forEach((element) => {
    info.push(createSimpleObject(element))
  })
  return info
}

// создание объекта элемента
function createSimpleObject (element) {
  const inputList = element.querySelectorAll('.item__input')
  return getInputValues(inputList)
}

// невалидный инпут
function checkInvalidInput (input) {
  if(input.value == '') {
    let redFocus;
    input.classList.add('item__input_type_empty')
    input.addEventListener('focus', redFocus = () =>{
      input.classList.remove('item__input_type_empty')
      input.removeEventListener('focus', redFocus)
    })
  }
}


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
    data = {}
    // объект для запроса
    data.TaskNum = getInputValues(Edit.inputListDate)
    Edit.inputDateTo.classList.remove('item__input_type_empty')
    console.log(data)

    // finnaly
    clearForm(formFindDocumentDate)
    clearForm(formDocument)

    // готовый массив - будет приходить с сервера

    objInfoNum.forEach(item => {
      addElementWithData(Finder, item)
    })
});

//___________________________________
//  Добавление поисковика
//___________________________________

// функция добавления строки поиска
function addElementWithData({selectorTemplate, listTable, headerTable}, item) {
  const data = createObjFinder(item)
  const data1 = createObjFinderArray(item)
  
  $(document).ready(function () {
    $('.finder__list').DataTable({
      data: data1
    });
  });

  const obj = new TableTr( {selectorTemplate, listTable, headerTable}
                        , findObject, clearForm, formDocument, data).createCard()
  addCardWithData(listTable, obj)
  Finder.listTable.classList.remove('header-table_hidden')
  return obj
}

function addCardWithData(listTable, obj) {
  section.addItem(obj, listTable)
}

function createObjFinder (item) {
const data = {}
data.Num = item.TaskNum.Num
data.TaskEpoch = item.TaskNum.TaskEpoch
data.countApproach = (item.Directive.CollisionApproach) ? 
  item.Directive.CollisionApproach.Pairs.length : 0
data.countCondition = (item.Directive.Condition) ?
  item.Directive.Condition.ObjectInfos.length : 0
data.countBreakUp = (item.Directive.BreakUp) ?
  item.Directive.BreakUp.ObjectInfos.length : 0
data.countDeorbit = (item.Directive.Deorbit) ?
  item.Directive.Deorbit.ObjectInfos.length : 0
data.countConditionKA = (item.Directive.ConditionKA) ? 
  item.Directive.ConditionKA.ObjectInfos.length : 0
data.Message = item.Message
  return data
}

function createObjFinderArray (item) {
  const data = []
  data.push(item.TaskNum.Num)
  data.push(item.TaskNum.TaskEpoch)
  data.push((item.Directive.CollisionApproach) ? 
    item.Directive.CollisionApproach.Pairs.length : 0)
  data.push((item.Directive.Condition) ?
    item.Directive.Condition.ObjectInfos.length : 0)
  data.push((item.Directive.BreakUp) ?
    item.Directive.BreakUp.ObjectInfos.length : 0)
  data.push((item.Directive.Deorbit) ?
    item.Directive.Deorbit.ObjectInfos.length : 0)
  data.push((item.Directive.ConditionKA) ? 
    item.Directive.ConditionKA.ObjectInfos.length : 0)
  data.push(item.Message)
  console.log(data);
    return data
  }


//___________________________________
//  функция выбора задания из ответа
//___________________________________

const findObject = (num) => {
  objInfoNum.map((item)=> {
    if (item.TaskNum.Num == num) {
      setInfo(item)
    }
  })
}

//___________________________________
//  Обработка ответа
//___________________________________

// Обработка ответа (objInfo)
function setInfo (objInfo) {
    // заполнение полей
    setAssingmentInfo(Assingment,objInfo)
    // проверка существует ли блок в ответе
    if (objInfo.Directive.CollisionApproach) {
      const elementsListCollision = objInfo.Directive.CollisionApproach.Pairs;
      setInfoCollision(Approach, elementsListCollision);
      Approach.listTable.classList.remove('header-table_hidden')
    }
    if (objInfo.Directive.Condition) {
      const elementsListCondition = objInfo.Directive.Condition.ObjectInfos;
      setInfoSimple(Condition, elementsListCondition);
      Condition.listTable.classList.remove('header-table_hidden')
    }
    if (objInfo.Directive.BreakUp) {
      const elementsListBrakeUp = objInfo.Directive.BreakUp.ObjectInfos;
      setInfoSimple(Destroy, elementsListBrakeUp);
      Destroy.listTable.classList.remove('header-table_hidden')
    }
    if (objInfo.Directive.Deorbit) {
      const elementsListDeorbit = objInfo.Directive.Deorbit.ObjectInfos;
      setInfoSimple(Deorbit, elementsListDeorbit);
      Deorbit.listTable.classList.remove('header-table_hidden')
    }
    if (objInfo.Directive.ConditionKA) {
      const elementsListSpacecraft = objInfo.Directive.ConditionKA.ObjectInfos;
      setInfoSimple(Spacecraft, elementsListSpacecraft);
      Spacecraft.listTable.classList.remove('header-table_hidden')
    }

    inputMassage.value = objInfo.Message
    buttonAddDocument.textContent = 'Изменить задание'
    titleForm.textContent = 'Редактирование задания:'
}

//___________________________________
//  функции отрисовки полученного задания 
//___________________________________

// заполнение шапки задания
function setAssingmentInfo (section, objInfo) {
  section.inputList.forEach(input=>{
      input.value = objInfo.TaskNum[input.name]
    })
}

// создание одноуровневого элемента
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

// создание элемента сближения
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

// перевод элементов в режим чтения
function doNotEditInputs (card) {
  const listInputs = card.querySelectorAll('.item__input')
  const buttonSave = card.querySelector('.element__btn-done')
  listInputs.forEach(input =>{
      input.readOnly = true
      buttonSave.classList.add('element__btn-done_type_edit')
      input.classList.add('item__input_type_readonly')
   })
  }



