makeTasks();

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title       = titleInput.value;
    let description = descriptionInput.value;
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
            description: description,
            isDo: false,
            created_at : Date.now()
        }
        addTask(task);
        title       = '';
        description = '';
        addTaskContainer.classList.add('hide');
        makeTasks(); 
    }
    
});
const tasks = document.querySelectorAll('.list > article');


{/* <article draggable="true">
<input type="checkbox" name="" id="">
<span class="title">
    Apprendre le Js
</span>
<div class="trash">
    <i class="fa-solid fa-trash"></i>
</div>
</article> */}