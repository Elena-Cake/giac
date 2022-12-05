import './index.css';
import {
    inputAssingmentNum,
    inputAssingmentDate,

    inputApproachTypeOrbit,
    inputApproachInternationalNumKA, inputApproachNoradNumKA, inputApproachGiacNumKA,
    inputApproachInternationalNumKO, inputApproachNoradNumKO, inputApproachGiacNumKO,
    buttonAddApproach,               formApproach,            

    buttonAddCondition,
    buttonAddDestroy,
    buttonAddDeorbit,

    inputSpacecraftNameKA,      inputSpacecraftInternationalNumKA,
    inputSpacecraftNoradNumKA,  inputSpacecraftGiacNumKA,
    buttonAddSpacecraft,        
    formSpacecraft,

    inputMassage

} from '../utils/constans.js'

import PopupWithForm from '../scripts/PopupWithForm.js';
import Object from '../scripts/Object.js';
import ObjectKA from '../scripts/ObjectKA.js';
import ObjectCollision from '../scripts/ObjectCollision.js';
import Section from '../scripts/Section.js';



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


buttonAddCondition.addEventListener('click', ()=>addKO(objectListCondition));

buttonAddDestroy.addEventListener('click', ()=>addKO(objectListDestroy));

buttonAddDeorbit.addEventListener('click',()=> addKO(objectListDeorbit));

buttonAddApproach.addEventListener('click', ()=>
  addObjectCollision('.elements__list-approach', objectListApproach)
)

buttonAddSpacecraft.addEventListener('click', ()=>
  addKA( '.elements__list-ka', objectListSpacecraft)
)

// функция добавления КO
function addKO(listClass) {
  const obj = new Object( '.elements__list-ko').createCard()
  addCard (listClass, obj)
}

// функция добавления КА 
function addKA ( selectorTemplate, listClass) {
  const obj = new ObjectKA (selectorTemplate).createCard()
  addCard (listClass, obj)
}

// функция добавления сближения 
function addObjectCollision ( selectorTemplate, listClass) {
  const obj = new ObjectCollision ( selectorTemplate).createCard()
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