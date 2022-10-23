// Elements for floating

const settingsContainer  = document.querySelector('#settings');
const addTaskContainer   = document.querySelector('#addTask');
const seeTaskContainer   = document.querySelector('#seeTask');
const seeTaskContent     = document.querySelector('#seeTaskContent');
const closeSettingBtn    = document.querySelector('#closeSettings');
const seeSettingBtn      = document.querySelector('#seeSetting');
const closeBtn           = document.querySelector('#closeBtn');
let addBtn               = document.querySelector('#addBtn');

// Elements for tasks

const descriptionInput   = document.querySelector('textarea#description');
const alreadyDoList      = document.querySelector('#already-do');
const errors_lister      = document.querySelector('ul.errors');
const addTaskForm        = document.querySelector('form#addTaskForm');
const titleInput         = document.querySelector('input#title');
const submitBtn          = document.querySelector('button#submitBtn');
const todoList           = document.querySelector('#to-do');
let isEdit               = false; 

// Elements for drag and drop

const dragAndDropChecher = document.querySelector('#checkDragAndDrop');
const selectColors        = document.querySelectorAll('.color-choice');
const selectModes        = document.querySelectorAll('.selectMode');
const selectLang         = document.querySelector('#selectLang');

// Const for mode

const isDark = window.matchMedia && window.matchMedia(`(prefers-color-scheme:dark)`).matches