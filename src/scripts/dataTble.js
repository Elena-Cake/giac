window.$ = window.jquery = require('../../node_modules/jquery');
window.dt = require('../../node_modules/datatables.net');
window.$('.finder__list').DataTable();
// var $  = require( 'jquery' );
// var dt = require( 'datatables.net' )();

export let table = new DataTable('.finder__list', {
    data: data,
    columns: [
        { num: 'name' },
        { date: 'position' },
        { approach: 'name' },
        { condition: 'position' },
        { approach: 'salary' },
        { destroy: 'name' },
        { deorbit: 'position' },
        { spacecraft: 'salary' },
        { massage: 'salary' }
    ]
});

// $(document).ready(function () {
//     $('.finder__list').DataTable();
// });