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
    buttonAddSpacecraft,

    inputMassage

} from '../utils/constans.js'

import PopupWithForm from '../scripts/PopupWithForm.js';
import Object from '../scripts/Object.js';
import Section from '../scripts/Section.js';

// экземпляры классов

const modalAddCondition = new PopupWithForm ('.modal', 'Добавить КО для контроля состояния', submitForm);
const modalAddDestroy = new PopupWithForm ('.modal', 'Добавить разрушение КО', submitForm);
const modalAddDeorbit = new PopupWithForm ('.modal', 'Добавить сошедший с орбиты КО', submitForm);


buttonAddCondition.addEventListener('click', () => modalAddCondition.open());
buttonAddDestroy.addEventListener('click', () => modalAddDestroy.open());
buttonAddDeorbit.addEventListener('click', () => modalAddDeorbit.open());

buttonAddApproach.addEventListener('click',  )
buttonAddSpacecraft.addEventListener('click',  )

// списки для добавления

//  approach
const objectListApproach = new Section({
    renderer: (item) => {
      const card = generateCard(item);
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


function submitForm (dataForm)  {
    console.log(1)
}