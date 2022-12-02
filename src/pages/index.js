import './index.css';
import {
    inputAssingmentNum,
    inputAssingmentDate,

    inputApproachTypeOrbit,
    inputApproachInternationalNumKA, inputApproachNoradNumKA, inputApproachGiacNumKA,
    inputApproachInternationalNumKO, inputApproachNoradNumKO, inputApproachGiacNumKO,
    buttonAddApproach,

    buttonAddCondition,
    buttonAddDestroy,
    buttonAddDeorbit,

    inputSpacecraftNameKA,      inputSpacecraftInternationalNumKA,
    inputSpacecraftNoradNumKA,  inputSpacecraftGiacNumKA,
    buttonAddSpacecraft,        inputListSpacecraf,

    inputMassage

} from '../utils/constans.js'

import PopupWithForm from '../scripts/PopupWithForm.js';
import Object from '../scripts/Object.js';
import Section from '../scripts/Section.js';


// buttonAddApproach.addEventListener('click',  )
// buttonAddSpacecraft.addEventListener('click',  )

// списки для добавления

//  approach
const objectListApproach = new Section({
    renderer: (item) => {
      const obj = generateCard(item);
      objectListApproach.addItem(card);
    }
  }, '.approach__list');

//   condition
const objectListCondition = new Section({
    renderer: (item) => {
      const card = generateCard(item);
      objectListCondition.addItem(card);
    }
  }, '.condition__list');

//   destroy
  const objectListDestroy = new Section({
    renderer: (item) => {
      const card = generateCard(item);
      objectListDestroy.addItem(card);
    }
  }, '.destroy__list');

//   deorbit
  const objectListDeorbit = new Section({
    renderer: (item) => {
      const card = generateCard(item);
      objectListDeorbit.addItem(card);
    }
  }, '.deorbit__list');

//   spacecraft
  const objectListSpacecraft = new Section({
    renderer: (item) => {
      const card = generateCard(item);
      objectListSpacecraft.addItem(card);
    }
  }, '.spacecraft__list');


  // экземпляры классов

const modalAddCondition = new PopupWithForm ('.modal', 'Добавить КО для контроля состояния'
, submitForm, objectListCondition);
const modalAddDestroy = new PopupWithForm ('.modal', 'Добавить разрушение КО'
, submitForm, objectListDestroy );
const modalAddDeorbit = new PopupWithForm ('.modal', 'Добавить сошедший с орбиты КО'
, submitForm, objectListDeorbit);


buttonAddCondition.addEventListener('click', () => modalAddCondition.open());
buttonAddDestroy.addEventListener('click', () => modalAddDestroy.open());
buttonAddDeorbit.addEventListener('click', () => modalAddDeorbit.open());

// buttonAddApproach.addEventListener('click',  )
buttonAddSpacecraft.addEventListener('click', () => {
  submitForm(getInputValues(inputListSpacecraf), '.elements__list-ka', objectListSpacecraft)
  
})

// добавление карточки
function generateCard (dataCard ) {
  const card = new  Object(dataCard, selectorTemplate,'.elements__list')
                    .createCard()
  return card                 
}

// функция добавления
function submitForm (dataObject, selectorTemplate, listClass) {
  const obj = new Object(dataObject, selectorTemplate).createCard()
  addCard (listClass, obj)

}

function addCard( listClass, obj) {
  listClass.addItem(obj)
}

function getInputValues (inputList) {
  const inputsValues = {}
  inputList.forEach(input => {
      inputsValues[input.name] = input.value
  });
  return inputsValues
}