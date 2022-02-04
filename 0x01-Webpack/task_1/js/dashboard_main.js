const $ = require('jquery');
import _ from 'lodash';

const elements = [
    $('<p>').text('Holberton Dashboard'),
    $('<p>').text('Dashboard data for the students'),
    $('<button>').text('Click here to get started'),
    $("<p id='count'></p>"),
    $('<p>').text('Copyright - Holberton School')
];
// _.debounce 500
let count = 0;

function updateCounter() { count++; }

$('button').click(_.debounce(() => {
  updateCounter();
  $('#count').text(`${count} clicks on the button`);
}));
