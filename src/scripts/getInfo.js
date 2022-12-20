
//___________________________________
//  Сборка объекта
//___________________________________

// сборка значений инпутов в объект
export function getInputValues (inputList) {
    const inputsValues = {}
    inputList.forEach(input => {
        checkInvalidInput(input)
        inputsValues[input.name] = input.value
    });
    return inputsValues
  }
  
  // создание массива внутри объекта согласно количеству элементов
export function createArrayObject (section, info) {
    const elementsList = (section.listTable.querySelectorAll('.element'));
    elementsList.forEach((element) => {
      info.push(createSimpleObject(element))
    })
    return info
  }
  
  // создание объекта элемента
export function createSimpleObject (element) {
    const inputList = element.querySelectorAll('.item__input')
    return getInputValues(inputList)
  }

// невалидный инпут
export function checkInvalidInput (input) {
    if(input.value == '') {
      let redFocus;
      input.classList.add('item__input_type_empty')
      input.addEventListener('focus', redFocus = () =>{
        input.classList.remove('item__input_type_empty')
        input.removeEventListener('focus', redFocus)
      })
    }
  }