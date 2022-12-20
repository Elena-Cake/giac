
export const formFindDocumentNum = document.querySelector('.edit__num');
export const formFindDocumentDate = document.querySelector('.edit__date');
export const formDocument = document.querySelector('.form');

// buttons

export const buttonAddDocument = document.querySelector('.form__btn-save');
export const buttonResetForm = document.querySelector('.form__btn-reset');

export const titleForm = document.querySelector('.assingment__title');

// massage
export const inputMassage = document.querySelector('.massage__text');

//main button
export const buttonSaveAll = document.querySelector('.form__btn-save') 

export const listTableLists = document.querySelectorAll('.table__list') 

export const Edit = {
    inputList :     document.querySelector('.edit').querySelectorAll('.edit__input'),
    inputNum :      document.querySelector('.edit').querySelectorAll('.edit__input-num'),
    inputListDate : document.querySelector('.edit').querySelectorAll('.edit__input-date'),
    inputDateTo :   document.querySelector('.edit').querySelector('.edit__input-date_type_to')
}

export const Finder = {
  headerTable :       document.querySelector('.finder__hedder-table')
}

export const Assingment = {
    inputList : document.querySelector('.assingment').querySelectorAll('.assingment__input')
}

export const Approach = {
    buttonAdd :         document.querySelector('.approach__btn-add'),
    inputTypeOrbit :    document.querySelector('.approach__type-orbit'),
    listTable :         document.querySelector('.approach__list'),
    headerTable :       document.querySelector('.approach__header-table'),
    selectorTemplate : '.elements__list-approach',
    elementsList :      document.querySelector('.approach__list').querySelectorAll('.element')
}

export const Condition = {
    buttonAdd :         document.querySelector('.condition__btn-add'),
    listTable :         document.querySelector('.condition__list'),
    headerTable :       document.querySelector('.condition__header-table'),
    selectorTemplate :  '.elements__list-ko',
    elementsList :      document.querySelector('.condition__list').querySelectorAll('.element')
}

export const Destroy = {
    buttonAdd :         document.querySelector('.destroy__btn-add'),
    listTable :         document.querySelector('.destroy__list'),
    headerTable :       document.querySelector('.destroy__header-table'),
    selectorTemplate :  '.elements__list-ko',
    elementsList :      document.querySelector('.destroy__list').querySelectorAll('.element')
}

export const Deorbit = {
    buttonAdd :         document.querySelector('.deorbit__btn-add'),
    listTable :         document.querySelector('.deorbit__list'),
    headerTable :       document.querySelector('.deorbit__header-table'),
    selectorTemplate :  '.elements__list-ko',
    elementsList :      document.querySelector('.deorbit__list').querySelectorAll('.element')
}

export const Spacecraft = {
    buttonAdd :         document.querySelector('.spacecraft__btn-add'),
    listTable :         document.querySelector('.spacecraft__list'),
    headerTable :       document.querySelector('.spacecraft__header-table'),
    selectorTemplate :  '.elements__list-ka',
    elementsList :      document.querySelector('.spacecraft__list').querySelectorAll('.element')
}


export const objInfo = {
    Id: 3338,
    TaskNum: {
      Num: 1811,
      TaskEpoch:  '2022-10-18T10:51' ,
       ShiftBoss : "Ампилова О.�.",
       TaskDescription :  'Задание' 
    },
     Directive : {
       CollisionApproach : {
         Pairs : [
          {
             IdPairs : 1,
             FirstObject : {
               ObjectNumber : 21675,
               NoradNumber : 38978,
               IntDes :  '2012-061B' ,
               LocalNumber : null
            },
             SecondObject : {
               ObjectNumber : 36025,
               NoradNumber : 33749,
               IntDes :  '2009-008A' ,
               LocalNumber : null
            },
             CollisionApproachEpoch :   '2022-10-20T18:15:05.00' ,
             OrbiteType :  'MOE' 
          }
        ]
      },
       BreakUp : {
         ObjectInfos : [
          {
             ObjectNumber : 9793,
             NoradNumber : 37951,
             IntDes :  '2011-074B' ,
             LocalNumber : null
          }
        ]
      },
       Deorbit : {
         ObjectInfos : [
          {
             ObjectNumber : 47463,
             NoradNumber : 37951,
             IntDes :  '2011-074B' ,
             LocalNumber : null
          },
          {
            ObjectNumber : 43,
            NoradNumber : 37951,
            IntDes :  '2011-074B' ,
            LocalNumber : null
         }
        ]
      },
      ConditionKA : {
        ObjectInfos : [
         {
            Name : 'KA obj',
            ObjectNumber : 6793,
            NoradNumber : 37951,
            IntDes :  '2011-074B '
         }
       ]
     }
    },
     Message :  'Something' 
  }
  

  export const objInfoNum = [{
    Id: 3336,
    TaskNum: {
      Num: 1253,
      TaskEpoch:  '2022-10-18T10:55' ,
       ShiftBoss : "Ivanov A.A.",
       TaskDescription :  'Задание' 
    },
     Directive : {
       CollisionApproach : {
         Pairs : [
          {
             IdPairs : 1,
             FirstObject : {
               ObjectNumber : 21675,
               NoradNumber : 38978,
               IntDes :  '2012-061B' ,
               LocalNumber : null
            },
             SecondObject : {
               ObjectNumber : 36025,
               NoradNumber : 33749,
               IntDes :  '2009-008A' ,
               LocalNumber : null
            },
             CollisionApproachEpoch :   '2022-10-20T18:15:05.00' ,
             OrbiteType :  'MOE' 
          },
          {
            IdPairs : 2,
            FirstObject : {
              ObjectNumber : 21675,
              NoradNumber : 38567,
              IntDes :  '2012-061B' ,
              LocalNumber : null
           },
            SecondObject : {
              ObjectNumber : 36967,
              NoradNumber : 33735,
              IntDes :  '2009-008A' ,
              LocalNumber : null
           },
            CollisionApproachEpoch :   '2022-10-20T19:15:07.00' ,
            OrbiteType :  'LEO' 
         }
        ]
      },
       BreakUp : {
         ObjectInfos : [
          {
             ObjectNumber : 9793,
             NoradNumber : 37951,
             IntDes :  '2011-074B' ,
             LocalNumber : null
          }
        ]
      },
      ConditionKA : {
        ObjectInfos : [
         {
            Name : 'KA obj1',
            ObjectNumber : 8594,
            NoradNumber : 37951,
            IntDes :  '2011-074B '
         }
       ]
     }
    },
     Message :  'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum' 
  },
  {
    Id: 3338,
    TaskNum: {
      Num: 1811,
      TaskEpoch:  '2022-10-18T10:51' ,
       ShiftBoss : "Ампилова О.�.",
       TaskDescription :  'Задание' 
    },
     Directive : {
       CollisionApproach : {
         Pairs : [
          {
             IdPairs : 1,
             FirstObject : {
               ObjectNumber : 21675,
               NoradNumber : 38978,
               IntDes :  '2012-061B' ,
               LocalNumber : null
            },
             SecondObject : {
               ObjectNumber : 36025,
               NoradNumber : 33749,
               IntDes :  '2009-008A' ,
               LocalNumber : null
            },
             CollisionApproachEpoch :   '2022-10-20T18:15:05.00' ,
             OrbiteType :  'MOE' 
          }
        ]
      },
       BreakUp : {
         ObjectInfos : [
          {
             ObjectNumber : 9793,
             NoradNumber : 37951,
             IntDes :  '2011-074B' ,
             LocalNumber : null
          }
        ]
      },
       Deorbit : {
         ObjectInfos : [
          {
             ObjectNumber : 47463,
             NoradNumber : 37951,
             IntDes :  '2011-074B' ,
             LocalNumber : null
          },
          {
            ObjectNumber : 43,
            NoradNumber : 37951,
            IntDes :  '2011-074B' ,
            LocalNumber : null
         }
        ]
      },
      ConditionKA : {
        ObjectInfos : [
         {
            Name : 'KA obj',
            ObjectNumber : 6793,
            NoradNumber : 37951,
            IntDes :  '2011-074B '
         }
       ]
     }
    },
     Message :  'Something' 
  }
]