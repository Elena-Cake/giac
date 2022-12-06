import './index.css';
import {
    buttonAddApproach,                       

    buttonAddCondition,
    buttonAddDestroy,
    buttonAddDeorbit,

    buttonAddSpacecraft,        

    inputMassage,

    listTableCondition,
    listTableDestroy,
    listTableDeorbit,
    listTableApproach,
    listTableSpacecraft,

    headerTableApproach,
    headerTableCondition,
    headerTableDestroy,
    headerTableDeorbit,
    headerTableSpacecraft

} from '../utils/constans.js'

import Object from '../scripts/Object.js';
import Section from '../scripts/Section.js';

// selector templates 
const selectorTemplateKO = '.elements__list-ko';
const selectorTemplateKA = '.elements__list-ka';
const selectorTemplateCollision = '.elements__list-approach'


// видимость хедеров таблиц

const checkVisibleTableHeader = (elementsList, headerTable) => {
  if (elementsList.querySelectorAll('.element').length < 2) {
    headerTable.classList.add('header-table_hidden')
  } else {
    headerTable.classList.remove('header-table_hidden')
  }

}

// списки для добавления

//  approach
const objectListApproach = new Section({
    renderer: () => {
      const obj = generateCard();
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
checkVisibleTableHeader (listTableCondition, headerTableCondition)
checkVisibleTableHeader (listTableDestroy, headerTableDestroy)
checkVisibleTableHeader (listTableDeorbit, headerTableDeorbit)
checkVisibleTableHeader (listTableApproach, headerTableApproach)
checkVisibleTableHeader (listTableSpacecraft, headerTableSpacecraft)


// кнопки добавления объектов
buttonAddCondition.addEventListener('click', ()=>{
  addElement(selectorTemplateKO, objectListCondition, checkVisibleTableHeader
            , listTableCondition, headerTableCondition)
  checkVisibleTableHeader (listTableCondition, headerTableCondition)
});

buttonAddDestroy.addEventListener('click', ()=>{
  addElement(selectorTemplateKO, objectListDestroy, checkVisibleTableHeader
            , listTableDestroy, headerTableDestroy)
  checkVisibleTableHeader (listTableDestroy, headerTableDestroy)
});

buttonAddDeorbit.addEventListener('click',()=> {
  addElement(selectorTemplateKO, objectListDeorbit, checkVisibleTableHeader
          , listTableDeorbit, headerTableDeorbit)
  checkVisibleTableHeader (listTableDeorbit, headerTableDeorbit)
});

buttonAddApproach.addEventListener('click', ()=>{
  addElement( selectorTemplateCollision , objectListApproach, checkVisibleTableHeader
            , listTableApproach, headerTableApproach)
  checkVisibleTableHeader (listTableApproach, headerTableApproach)
});

buttonAddSpacecraft.addEventListener('click', ()=> {
  addElement( selectorTemplateKA, objectListSpacecraft, checkVisibleTableHeader
            , listTableSpacecraft, headerTableSpacecraft)
  checkVisibleTableHeader (listTableSpacecraft, headerTableSpacecraft)
});

// функция добавления КO, KA, Collision
function addElement(selectorTemplate, listClass, checkVisibleTableHeader, elementsList, headerTable) {
  const obj = new Object( selectorTemplate, checkVisibleTableHeader
                        , elementsList, headerTable).createCard()
  addCard (listClass, obj)
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