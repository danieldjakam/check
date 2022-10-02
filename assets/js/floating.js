addBtn.addEventListener('click', () => {
    addTaskContainer.classList.remove('hide');
})

closeBtn.addEventListener('click', () => {
    addTaskContainer.classList.add('hide');
})

if (tasks !== null) {
    tasks.forEach(element => {
        if (element.children.length > 1) {
            element.children[0].addEventListener('click', () => {
                makeIsDoTask(element.dataset.id);
                makeTasks();
            })
            element.children[1].addEventListener('click', (e) => {
                tasks.forEach(el => el.classList.remove('waddle'))
                element.classList.add('waddle');
                let info = {
                    x: e.clientX + 1,
                    y: e.clientY + 10
                }
                const taskForThisElement = findTasks(element.dataset.id)
                // console.log(taskForThisElement);
                seeTaskContent.innerHTML = `
                    <h1>${taskForThisElement.title}</h1>
                    <button class="close-add-task" id="closeBtnSeeTask">
                        <i class="fa-solid fa-close"></i>
                    </button>
                    <p>
                        ${taskForThisElement.description}
                    </p>
                `;
                const closeBtnSeeTask    = document.querySelector('#closeBtnSeeTask');
                const seeTaskBox         = document.querySelector('#seeTask > #seeTaskContent');
                closeBtnSeeTask.addEventListener('click', () => {
                    seeTaskContainer.classList.add('hide');
                    tasks.forEach(el => el.classList.remove('waddle'))
                })
                seeTaskContainer.classList.remove('hide');
                // let infoBox = {
                //     width : seeTaskBox.clientWidth,
                //     heigth: seeTaskBox.clientHeight
                // };
                // if (info.x) {
                    
                // }
                
                seeTaskBox.style.rigth = (info.x) + 'px';
                seeTaskBox.style.top  = (info.y) + 'px';
            });
            element.children[2].addEventListener('click', (e) => {
                tasks.forEach(el => el.classList.remove('waddle'));
                deleteTask(element.dataset.id);
                // console.log(element.dataset.id);
                makeTasks(); 
            })
        }
    })
}

seeSettingBtn.addEventListener('click', () => {
    settingsContainer.classList.remove('hide');
})
closeSettingBtn.addEventListener('click', () => {
    settingsContainer.classList.add('hide');
})