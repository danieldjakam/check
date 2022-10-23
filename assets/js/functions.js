const setSetting = (key, value) => {
    localStorage.setItem(key, value);
};
const getSetting = (key) => {
    return localStorage.getItem(key);
};

const getTasks = () => {
    if (getSetting('tasks') === null) {
        setSetting('tasks', JSON.stringify([]));
    }
    const tasks = JSON.parse(getSetting('tasks')).length > 0 && getSetting('tasks') ? 
                        JSON.parse(getSetting('tasks')).sort((a, b) => b.created_at - a.created_at) 
                    : [];
    if (tasks.length > 0) {
        tasks.forEach((tas, id) => {
            tas.id   = id;
        });
    }
    return tasks.length > 0 ? tasks : [];
}

const findTasks = (id) => {
    return getTasks()[id];
}

const addTask = (task) => {
    const tasks = [...getTasks(), task];
    console.log(tasks);
    setSetting('tasks', JSON.stringify(tasks));
}

const deleteTask = (id) => {
    const tasks  = getTasks();
    const fTasks = tasks.filter(t => parseInt(t.id) !== parseInt(id));
    setSetting('tasks', JSON.stringify(fTasks));
}

const makeIsDoTask = (id) => {
    const tasks  = getTasks();
    console.log(id);
    tasks[parseInt(id)].isDo = !tasks[parseInt(id)].isDo;
    setSetting('tasks', JSON.stringify(tasks));
}

const makeToDoTaskElement = (task) => {
    const taskElement = document.createElement('article');
    const checkbox    = document.createElement('input');
    const span        = document.createElement('span');
    const div         = document.createElement('div');
    const i           = document.createElement('i');

    taskElement.setAttribute('data-id', task.id);
    taskElement.setAttribute('draggable', true);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'makeIsDo');
    span.setAttribute('class', 'title');
    div.setAttribute('class', 'trash');
    i.setAttribute('class', 'fa-solid fa-trash')

    span.innerText = task.title;
    div.appendChild(i);

    taskElement.appendChild(checkbox);
    taskElement.appendChild(span);
    taskElement.appendChild(div);
    
    return taskElement;
}

const makeAlreadyTaskElement = (task) => {
    const taskElement = document.createElement('article');
    const check       = document.createElement('i');
    const span        = document.createElement('span');
    const div         = document.createElement('div');
    const i           = document.createElement('i');

    taskElement.setAttribute('data-id', task.id);
    taskElement.setAttribute('draggable', true);
    check.setAttribute('class', 'fa-solid fa-circle-check');
    i.setAttribute('id', 'makeIsNotDo');
    span.setAttribute('class', 'title');
    div.setAttribute('class', 'trash');
    i.setAttribute('class', 'fa-solid fa-trash')

    span.innerText = task.title;
    div.appendChild(i);

    taskElement.appendChild(check);
    taskElement.appendChild(span);
    taskElement.appendChild(div);
    
    return taskElement;
}

const makeEmptyTaskElement  = (suit) => {
    const taskElement = document.createElement('article');
    const span        = document.createElement('span');

    span.innerText = 'Aucune tâche' + suit;
    taskElement.appendChild(span);
    return taskElement;
}

const makeSeparator = () => {
    const separator = document.createElement('div');
    separator.setAttribute('class', 'separator');
    return separator;
}

const makeTasks = () => {
    const alreadyDoTasks     = getTasks().length > 0 ? getTasks().filter(t => t.isDo === true) : [];
    const todoTasks          = getTasks().length > 0 ? getTasks().filter(t => t.isDo === false) : [];
    // console.log(todoTasks );
    todoList.innerHTML      = `
        <h1>
            <i class="fa-solid fa-calendar"></i>
            ${_('todo-task')}
        </h1>
    `;
    alreadyDoList.innerHTML = `
        <h1>
            <i class="fa-solid fa-tasks"></i>
            ${_('already-do-task')}
        </h1>
    `;
    if (todoTasks.length > 0) {
        todoList.appendChild(makeSeparator());

        todoTasks.forEach((ta) => {
            const taskElement = makeToDoTaskElement(ta);

            todoList.appendChild(taskElement);
            todoList.appendChild(makeSeparator());
        })
        todoList.appendChild(makeSeparator());
    } else {
        const taskElement = makeEmptyTaskElement(' à faire !');

        todoList.appendChild(makeSeparator());
        todoList.appendChild(taskElement);
    }
    
    if (alreadyDoTasks.length > 0) {
        alreadyDoList.appendChild(makeSeparator());
        alreadyDoTasks.forEach((ta) => {
            const taskElement = makeAlreadyTaskElement(ta);
            
            alreadyDoList.appendChild(taskElement);
            alreadyDoList.appendChild(makeSeparator());
        })
        todoList.appendChild(makeSeparator());
    } else {    
        const taskElement = makeEmptyTaskElement(' déjà faite !');

        alreadyDoList.appendChild(taskElement);
        alreadyDoList.appendChild(makeSeparator());
    }
}

// For mode

// Change mode

const changeMode = (mode) => {
    if (mode === 'dark') {
        document.body.id = 'darkmode';
    }else{
        document.body.id = '';
    }
}

// For lang

// Get world
const _ = (key) => {
    const lang = getSetting('lang') ? getSetting('lang') : 'en';
    return worlds[lang][key]
}
const checkColor = () => {
    const color = getSetting('color') !== undefined ? getSetting('color') : 'blue';
    selectColors.forEach(selectColor => {
        selectColor.classList.remove('check');
        if (selectColor.dataset.color === color) {
            selectColor.classList.add('check');        
        }
    })
    
}
const changePrimaryColor = () => {
    document.body.className = '';
    const primary_color = getSetting('color');
    if (primary_color !== undefined && primary_color !== null) {
        document.body.classList.add(primary_color);
    }
}