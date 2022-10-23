addBtn.addEventListener('click', () => {
    addTaskContainer.classList.remove('hide');
})

closeBtn.addEventListener('click', () => {
    addTaskContainer.classList.add('hide');
})

const t = () => {
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
                        seeTaskContent.innerHTML = displaySeeTask(taskForThisElement, isEdit);
                        const closeBtnSeeTask    = document.querySelector('#closeBtnSeeTask');
                        closeBtnSeeTask.addEventListener('click', () => {
                            seeTaskContainer.classList.add('hide');
                            tasks.forEach(el => el.classList.remove('waddle'))
                        })
                        const f = document.getElementById('editTask') 
                        f.addEventListener('submit', (event) => {
                            event.preventDefault();
                            let ti = document.getElementById('e_title');
                            let di = document.getElementById('e_description');
                            let title       = ti.value;
                            let description = di.value;
                            let errors        = [];
                        
                            if (!title) {
                                errors.push('Nom obligatoire');
                            }else{
                                if (title.length < 3) {
                                    errors.push('titre trop court minimum 3 caracteres.');
                                }
                                if (title.length > 50) {
                                    errors.push('titre trop long maximum 50 caracteres.');
                                }   
                                if (description && description.length < 10) {
                                    errors.push('Description trop courte minimum 10 caracteres.');
                                }
                                if (description && description.length > 150) {
                                    errors.push('Description trop longue maximum 150 caracteres.');
                                }
                            }
                            if (errors.length > 0) {
                                errors_lister.innerHTML = '';
                                errors.forEach(error => {
                                    const li     = document.createElement('li');
                                    li.innerText = error;
                                    li.setAttribute('class', 'error');
                                    errors_lister.appendChild(li); 
                                });
                            } else {
                                const task = {
                                    title      : title,
                                    description: description
                                }
                                editTask(task, event.target.dataset.id);
                                ti.value       = '';
                                di.value       = '';
                                t();
                                seeTaskContainer.classList.add('hide');
                                makeTasks(); 
                            }
                            
                        });
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
}
t();
seeSettingBtn.addEventListener('click', () => {
    settingsContainer.classList.remove('hide');
})
closeSettingBtn.addEventListener('click', () => {
    settingsContainer.classList.add('hide');
})