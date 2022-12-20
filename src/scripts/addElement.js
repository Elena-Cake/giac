

//___________________________________
//  функции отрисовки полученного задания 
//___________________________________

// заполнение шапки задания
export function setAssingmentInfo (section, objInfo) {
    section.inputList.forEach(input=>{
        input.value = objInfo.TaskNum[input.name]
      })
  }
  
  // создание одноуровневого элемента
export function setInfoSimple (section, elementsList, addElement) { 
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
export function setInfoCollision (section, elementsList, addElement) { 
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