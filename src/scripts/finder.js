import {
    formFindDocumentDate,
    formDocument,
  
    Edit,Finder
    ,objInfoNum
  
} from '../utils/constans.js'

import {getInputValues} from '../scripts/getInfo.js'

import {clearForm} from '../scripts/valdationTables.js'

//___________________________________
//  Создание объекта для отправки на сервер
//___________________________________


// по дате

export function createReqvestDate(data) {
    data = {}
    // объект для запроса
    data.TaskNum = getInputValues(Edit.inputListDate)
    Edit.inputDateTo.classList.remove('item__input_type_empty')
    console.log(data)
  
    // finnaly
    clearForm(formFindDocumentDate)
    clearForm(formDocument)
  };
  
export function addTableFinder(objInfoNum,setInfo){
    // for dataTable
    let arrayOfFinder = []
  
    function pushToArray() {
      for (let item of objInfoNum) {
        arrayOfFinder.push(createObjFinderArray(item))
      }
    }
    pushToArray()
    pushToArray()
    pushToArray()
    pushToArray()
  
    Finder.headerTable.classList.remove('header-table_hidden')
    
    // создание dataTable
    $(document).ready(function () {
        $('.finder__table').DataTable({
          data: arrayOfFinder,
          "lengthMenu" : [2, 5, 10]
        });
        let table = $('.finder__table').DataTable();
        $('.finder__table tbody').on('click', 'tr', function () {
          var num = table.row(this).data();
          findObject(num[0],setInfo);
        });
    });
  };
  
export function createObjFinderArray (item) {
    const data = []
    data.push(item.TaskNum.Num)
    data.push(item.TaskNum.TaskEpoch)
    data.push((item.Directive.CollisionApproach) ? 
      item.Directive.CollisionApproach.Pairs.length : 0)
    data.push((item.Directive.Condition) ?
      item.Directive.Condition.ObjectInfos.length : 0)
    data.push((item.Directive.BreakUp) ?
      item.Directive.BreakUp.ObjectInfos.length : 0)
    data.push((item.Directive.Deorbit) ?
      item.Directive.Deorbit.ObjectInfos.length : 0)
    data.push((item.Directive.ConditionKA) ? 
      item.Directive.ConditionKA.ObjectInfos.length : 0)
    data.push(item.Message)
      return data
    }
  
//___________________________________
//  функция выбора задания из ответа
//___________________________________

export const findObject = (num, setInfo) => {
    objInfoNum.map((item)=> {
      if (item.TaskNum.Num == num) {
        setInfo(item)
      }
    })
  }