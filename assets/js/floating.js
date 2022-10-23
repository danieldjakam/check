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
                seeTaskContent.innerHTML = displaySeeTask(taskForThisElement, isEdit)
                const closeBtnSeeTask    = document.querySelector('#closeBtnSeeTask');
                const editBtnSeeTask    = document.querySelector('#editTask');
                const seeTaskBox         = document.querySelector('#seeTask > #seeTaskContent');
                closeBtnSeeTask.addEventListener('click', () => {
                    seeTaskContainer.classList.add('hide');
                    tasks.forEach(el => el.classList.remove('waddle'))
                })
                editBtnSeeTask.addEventListener('click', (e) => {
                    isEdit = !isEdit;
                    seeTaskContent.innerHTML = displaySeeTask(taskForThisElement, isEdit)
                })
                seeTaskContainer.classList.remove('hide');
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