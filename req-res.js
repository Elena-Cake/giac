//___________________________________
//  Взаимодействие приложения с сервером-базой
//___________________________________

// на данный момент требуется 3 запроса:

//  1. Запрос выдачи задания по номеру докуманта
//  2. Запрос выдачи задания(ий) по дате (или диапозону дат)
//  3. Запрос на внесение нового или изменения сущетствующего задания

// Далее подробнее о форматах:

// Информация о задании собирается в формат (и читается из него же):
const objInfo = {
    Id: 1111,
    TaskNum: {
      Num: 1,                           //номер задания (1)
      TaskEpoch:  '2022-10-18T10:55' ,  // дата заполнения задания (2)
       ShiftBoss : "Ivanov A.A."
    },
    Directive : {
        CollisionApproach : {
            Pairs : [
            {
                IdPairs : 1,
                FirstObject : {
                ObjectNumber : 21675,
                NoradNumber : 38978,
                IntDes :  '2012-061B'
                },
                SecondObject : {
                ObjectNumber : 36025,
                NoradNumber : 33749,
                IntDes :  '2009-008A'
                },
                CollisionApproachEpoch :   '2022-10-20T18:15:05.00' ,
                OrbiteType :  'MOE' 
            }
            ]
        },
        Condition : {
            ObjectInfos : [
            {
                Name : 'KA obj1',
                ObjectNumber : 8594,
                NoradNumber : 37951,
                IntDes :  '2011-074B'
            }
        ]
        },
        BreakUp : {
            ObjectInfos : [
            {
                ObjectNumber : 9793,
                NoradNumber : 37951,
                IntDes :  '2011-074B' 
            }
            ]
        },
        Deorbit : {
            ObjectInfos : [
             {
                ObjectNumber : 47463,
                NoradNumber : 37951,
                IntDes :  '2011-074B'
             }
            ]
        },
        ConditionKA : {
            ObjectInfos : [
             {
                Name : 'KA obj',
                ObjectNumber : 6793,
                NoradNumber : 37951,
                IntDes :  '2011-074B'
             }
            ]
        }
    },
     Message :  'Something' 
}


//__________________________________________________________
//  1. Запрос выдачи задания по номеру докуманта
//__________________________________________________________


// 'https://...адрес.../'TaskNum'

// -> Ответ в формате, описанном выше


//__________________________________________________________
//  2. Запрос выдачи задания(ий) по дате (или диапозону дат)
//__________________________________________________________


// 'https://...адрес.../'TaskEpoch'

// -> Ответ ожидается в формате массива, содержащего массивы с данными заданий:

// [ TaskNum, TaskEpoch, count Of CollisionApproach.Pairs, count Of Condition,
//      count Of BreakUp,count Of Deorbit, count Of ConditionKA, Message ]
[
 [1253, '2022-10-18T10:55', 2, 0, 1, 0, 1, 'Something'],
 [1811, '2022-10-18T10:51', 1, 0, 1, 2, 1, 'Something']
]
// массив может создавать приложение из массива объектов, 
//          но это может замедлить работу приложения


//__________________________________________________________
//  3. Запрос на внесение нового задания
//__________________________________________________________


// 'https://...адрес.../task