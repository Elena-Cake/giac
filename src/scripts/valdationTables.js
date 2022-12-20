import {listTableLists} from '../utils/constans.js'

//___________________________________
//  Проверка таблиц
//___________________________________

// видимость хедеров таблиц
export const checkVisibleTableHeader = () => {
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
 export const isTableNotEmpty = (listTable) => {
    return listTable.querySelector('.element') ? true : false
  }

  // зачистка
export const clearForm = (form) => {
    form.reset();
    const elementsList = form.querySelectorAll('.element')
    elementsList.forEach(element=> element.remove())
    checkVisibleTableHeader ()
  }