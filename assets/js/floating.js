addBtn.addEventListener('click', () => {
    addTaskContainer.classList.remove('hide');
})

closeBtn.addEventListener('click', () => {
    addTaskContainer.classList.add('hide');
})

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

closeBtnSeeTask.addEventListener('click', () => {
    seeTaskContainer.classList.add('hide');
    tasks.forEach(el => el.classList.remove('waddle'))
})
seeSettingBtn.addEventListener('click', () => {
    settingsContainer.classList.remove('hide');
})
closeSettingBtn.addEventListener('click', () => {
    settingsContainer.classList.add('hide');
})