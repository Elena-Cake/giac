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

const checkVisibleTableHeader = (listTable, headerTable) => {
  if (listTable.querySelector('.element')) {
    headerTable.classList.remove('header-table_hidden')
  } else {
    headerTable.classList.add('header-table_hidden')
  }

}

// списки для добавления

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


  // добавление карточки
function generateCard () { 
  const card = new  Object(dataCard, selectorTemplate,'.elements__list')
                    .createCard()
  return card                 
}


// проверка пустоты таблиц
checkVisibleTableHeader (Condition.listTable, Condition.headerTable)
checkVisibleTableHeader (Destroy.listTable, Destroy.headerTable)
checkVisibleTableHeader (Deorbit.listTable, Deorbit.headerTable)
checkVisibleTableHeader (Approach.listTable, Approach.headerTable)
checkVisibleTableHeader (Spacecraft.listTable, Spacecraft.headerTable)


// кнопки добавления объектов
Condition.buttonAdd.addEventListener('click', ()=>{
  addElement(Condition, objectListCondition, checkVisibleTableHeader)
  checkVisibleTableHeader (Condition.listTable, Condition.headerTable)
});

Destroy.buttonAdd.addEventListener('click', ()=>{
  addElement(Destroy, objectListDestroy, checkVisibleTableHeader)
  checkVisibleTableHeader (Destroy.listTable, Destroy.headerTable)
});

Deorbit.buttonAdd.addEventListener('click',()=> {
  addElement(Deorbit, objectListDeorbit, checkVisibleTableHeader)
  checkVisibleTableHeader (Deorbit.listTable, Deorbit.headerTable)
});

Approach.buttonAdd.addEventListener('click', ()=>{
  addElement( Approach , objectListApproach, checkVisibleTableHeader)
  checkVisibleTableHeader (Approach.listTable, Approach.headerTable)
});

Spacecraft.buttonAdd.addEventListener('click', ()=> {
  addElement( Spacecraft, objectListSpacecraft, checkVisibleTableHeader)
  checkVisibleTableHeader (Spacecraft.listTable, Spacecraft.headerTable)
});

// функция добавления КO, KA, Collision
function addElement({selectorTemplate, listTable, headerTable}, elementsList, checkVisibleTableHeader) {
  const obj = new Object( selectorTemplate, checkVisibleTableHeader
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
    data.TaskNum = {
      Num:        inputAssingmentNum.value,
      TaskEpoch:  inputAssingmentDate.value,
      ShiftBoss:  inputAssingmentName.value
    }
    // data.Directive = {
    //   CollisionApproach: {},
    //   Condition:      {},
    //   BreakUp:    {},
    //   Deorbit:    {},
    //   ConditionKA:  {}
    // }
    data.Message = inputMassage.value



    console.log (data)
})