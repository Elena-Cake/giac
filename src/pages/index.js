import './index.css';
import {
  Assingment,

  Approach,
  Condition,Destroy,Deorbit,
  Spacecraft,
     
  inputMassage,
  buttonSaveAll,

} from '../utils/constans.js'

import Object from '../scripts/Object.js';
import Section from '../scripts/Section.js';



// видимость хедеров таблиц
const checkVisibleTableHeader = (resultCheckTableEmpty, headerTable) => {
  if (resultCheckTableEmpty) {
    headerTable.classList.remove('header-table_hidden')
  } else {
    headerTable.classList.add('header-table_hidden')
  }

}

// проверка пустоты таблицы
const checkTableNotEmpty = (listTable) => {
  return listTable.querySelector('.element') ? true : false
}

// rendererCard
function rendererCard  (wrap)  {
  const card = generateCard();
  wrap.addItem(card);
}

// добавление карточки
function generateCard () { 
  const card = new  Object(dataCard, selectorTemplate,'.elements__list')
                    .createCard()
  return card                 
}

// списки для добавления
 
// const renderItem = (thisContainer, list) => {
//   return new Section({
//         renderer: rendererCard(thisContainer)
//       }, list);
//     }
//     const objectListApproach = renderItem(objectListApproach, '.approach__list');


//  approach
const objectListApproach = new Section({
  renderer: () => {
    const card = generateCard();
    objectListApproach.addItem(card);
  }
}, '.approach__list');

//   condition
const objectListCondition = new Section({
    renderer: () => {
      const card = generateCard();
      objectListCondition.addItem(card);
    }
  }, '.condition__list');

//   destroy
  const objectListDestroy = new Section({
    renderer: () => {
      const card = generateCard();
      objectListDestroy.addItem(card);
    }
  }, '.destroy__list');

//   deorbit
  const objectListDeorbit = new Section({
    renderer: () => {
      const card = generateCard();
      objectListDeorbit.addItem(card);
    }
  }, '.deorbit__list');

//   spacecraft
  const objectListSpacecraft = new Section({
    renderer: () => {
      const card = generateCard();
      objectListSpacecraft.addItem(card);
    }
  }, '.spacecraft__list');

// проверка пустоты таблиц
checkVisibleTableHeader (checkTableNotEmpty(Condition.listTable), Condition.headerTable)
checkVisibleTableHeader (checkTableNotEmpty(Destroy.listTable), Destroy.headerTable)
checkVisibleTableHeader (checkTableNotEmpty(Deorbit.listTable), Deorbit.headerTable)
checkVisibleTableHeader (checkTableNotEmpty(Approach.listTable), Approach.headerTable)
checkVisibleTableHeader (checkTableNotEmpty(Spacecraft.listTable), Spacecraft.headerTable)


// прожатие кнопки добавления объектов
function addListenerButtonAdd (section, objectList, checkVisibleTableHeader, checkTableNotEmpty) {
  section.buttonAdd.addEventListener('click', ()=>{
    addElement(section, objectList, checkVisibleTableHeader, checkTableNotEmpty)
    checkVisibleTableHeader (checkTableNotEmpty(section.listTable), section.headerTable)
  });
}

// кнопки добавления объектов
addListenerButtonAdd(Condition, objectListCondition, checkVisibleTableHeader, checkTableNotEmpty)
addListenerButtonAdd(Destroy, objectListDestroy, checkVisibleTableHeader, checkTableNotEmpty)
addListenerButtonAdd(Deorbit, objectListDeorbit, checkVisibleTableHeader, checkTableNotEmpty)
addListenerButtonAdd(Approach , objectListApproach, checkVisibleTableHeader, checkTableNotEmpty)
addListenerButtonAdd(Spacecraft, objectListSpacecraft, checkVisibleTableHeader, checkTableNotEmpty)


// функция добавления КO, KA, Collision
function addElement({selectorTemplate, listTable, headerTable}, elementsList, checkVisibleTableHeader, checkTableNotEmpty) {
  const obj = new Object( selectorTemplate, checkVisibleTableHeader, checkTableNotEmpty
                        , listTable, headerTable).createCard()
  addCard (elementsList, obj)
}

function addCard(listClass, obj) {
  listClass.addItem(obj)
}


function getInputValues (inputList) {
  const inputsValues = {}
  inputList.forEach(input => {
      inputsValues[input.name] = input.value
  });
  return inputsValues
}


const data = {}
// сбор данных в объект
buttonSaveAll.addEventListener('click', () =>{
    data.TaskNum = getInputValues (Assingment.inputList)
    data.Directive = {}
    data.Message = inputMassage.value


// Condition
if (checkTableNotEmpty(Condition.listTable)) {
  data.Directive.Condition  = {}
  const info = data.Directive.Condition.ObjectInfos = []
  const elementsList = (document.querySelector('.condition__list').querySelectorAll('.element'));
  
  elementsList.forEach((element) => {
    const inputList = element.querySelectorAll('.item__input')
    info.push(getInputValues(inputList))
  })
}
// Destroy
if (checkTableNotEmpty(Destroy.listTable)) {
  data.Directive.BreakUp  = {}
  const info = data.Directive.BreakUp.ObjectInfos = []
  const elementsList = (document.querySelector('.destroy__list').querySelectorAll('.element'));
  
  elementsList.forEach((element) => {
    const inputList = element.querySelectorAll('.item__input')
    info.push(getInputValues(inputList))
  })
}
// Deorbit
if (checkTableNotEmpty(Deorbit.listTable)) {
  data.Directive.Deorbit  = {}
  const info = data.Directive.Deorbit.ObjectInfos = []
  const elementsList = (document.querySelector('.deorbit__list').querySelectorAll('.element'));
  
  elementsList.forEach((element) => {
    const inputList = element.querySelectorAll('.item__input')
    info.push(getInputValues(inputList))
  })
}
// Spacecraft
if (checkTableNotEmpty(Spacecraft.listTable)) {
  data.Directive.ConditionKA  = {}
  const info = data.Directive.ConditionKA.ObjectInfos = []
  const elementsList = (document.querySelector('.spacecraft__list').querySelectorAll('.element'));
  
  elementsList.forEach((element) => {
    const inputList = element.querySelectorAll('.item__input')
    info.push(getInputValues(inputList))
  })
}
// Approach
if (checkTableNotEmpty(Approach.listTable)) {
  data.Directive.CollisionApproach  = {}
  const info = data.Directive.CollisionApproach.Pairs = []
  const elementsList = (document.querySelector('.approach__list').querySelectorAll('.element'));
  const id = 1
  
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

    console.log (data)
})