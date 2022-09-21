// Elements for floating

const settingsContainer  = document.querySelector('#settings');
const addTaskContainer   = document.querySelector('#addTask');
const seeTaskContainer   = document.querySelector('#seeTask');
const closeBtnSeeTask    = document.querySelector('#closeBtnSeeTask');
const closeSettingBtn    = document.querySelector('#closeSettings');
const seeSettingBtn      = document.querySelector('#seeSetting');
const seeTaskBox         = document.querySelector('#seeTask > #seeTask');
const closeBtn           = document.querySelector('#closeBtn');
let addBtn             = document.querySelector('#addBtn');

// Elements for tasks

const descriptionInput   = document.querySelector('textarea#description');
const alreadyDoList      = document.querySelector('#already-do');
const errors_lister      = document.querySelector('ul.errors');
const addTaskForm        = document.querySelector('form#addTaskForm');
const titleInput         = document.querySelector('input#title');
const submitBtn          = document.querySelector('button#submitBtn');
const todoList           = document.querySelector('#to-do');

// Elements for drag and drop

const dragAndDropChecher = document.querySelector('#checkDragAndDrop');
const selectCountry      = document.querySelector('#selectCountry');
const selectModes        = document.querySelectorAll('.selectMode');