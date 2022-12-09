import './index.css';
import {
  Assingment,

  Approach,
  Condition,Destroy,Deorbit,
  Spacecraft,
     
  inputMassage,
  buttonSaveAll,

  listTableLists

} from '../utils/constans.js'

import Object from '../scripts/Object.js';
import Section from '../scripts/Section.js';



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

// rendererCard
function rendererCard  (data, section, wrap)  {
  const card = generateCard(section);
  wrap.addItem(card, section.listTable);
}

// добавление карточки
function generateCard (section) { 
  const card = new Object(section, checkVisibleTableHeader)
                    .createCard()
  return card                 
}

// списки для добавления
 
// const renderItem = (thisContainer, selectorList) => {
//   return new Section({
//         renderer: rendererCard(thisContainer)
//       }, list);
//     }
//     const objectListApproach = renderItem(objectListApproach, selectorList);


const section = (selectorContauner) => { new Section({
  data: cards,
  renderer: rendererCard
}, selectorContauner);
}
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
checkVisibleTableHeader ()


// прожатие кнопки добавления объектов
function addListenerButtonAdd (section, objectList) {
  section.buttonAdd.addEventListener('click', ()=>{
    addElement(section, objectList)
    checkVisibleTableHeader ()
  });
}


// функция добавления КO, KA, Collision
function addElement({selectorTemplate, listTable, headerTable}, elementsList) {
  const obj = new Object( {selectorTemplate, listTable, headerTable}
                        , checkVisibleTableHeader).createCard()
  addCard (elementsList, obj)
}

function addCard(listClass, obj) {
  listClass.addItem(obj)
}


// кнопки добавления объектов
addListenerButtonAdd(Condition, objectListCondition)
addListenerButtonAdd(Destroy, objectListDestroy)
addListenerButtonAdd(Deorbit, objectListDeorbit)
addListenerButtonAdd(Approach , objectListApproach)
addListenerButtonAdd(Spacecraft, objectListSpacecraft)


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
if (isTableNotEmpty(Condition.listTable)) {
  data.Directive.Condition  = {}
  const info = data.Directive.Condition.ObjectInfos = []
  const elementsList = (document.querySelector('.condition__list').querySelectorAll('.element'));
  
  elementsList.forEach((element) => {
    const inputList = element.querySelectorAll('.item__input')
    info.push(getInputValues(inputList))
  })
}
// Destroy
if (isTableNotEmpty(Destroy.listTable)) {
  data.Directive.BreakUp  = {}
  const info = data.Directive.BreakUp.ObjectInfos = []
  const elementsList = (document.querySelector('.destroy__list').querySelectorAll('.element'));
  
  elementsList.forEach((element) => {
    const inputList = element.querySelectorAll('.item__input')
    info.push(getInputValues(inputList))
  })
}
// Deorbit
if (isTableNotEmpty(Deorbit.listTable)) {
  data.Directive.Deorbit  = {}
  const info = data.Directive.Deorbit.ObjectInfos = []
  const elementsList = (document.querySelector('.deorbit__list').querySelectorAll('.element'));
  
  elementsList.forEach((element) => {
    const inputList = element.querySelectorAll('.item__input')
    info.push(getInputValues(inputList))
  })
}
// Spacecraft
if (isTableNotEmpty(Spacecraft.listTable)) {
  data.Directive.ConditionKA  = {}
  const info = data.Directive.ConditionKA.ObjectInfos = []
  const elementsList = (document.querySelector('.spacecraft__list').querySelectorAll('.element'));
  
  elementsList.forEach((element) => {
    const inputList = element.querySelectorAll('.item__input')
    info.push(getInputValues(inputList))
  })
}
// Approach
if (isTableNotEmpty(Approach.listTable)) {
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