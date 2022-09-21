let item;
document.addEventListener('dragstart', (e) => {
    if (getSetting('checkDragAndDrop') === 'true') {
        item = e.target;
    } else {
        alert("Veuillez entrer dans parametres et activer l'option Glisser/Deposer");
    }
})

document.addEventListener('dragover', (e) => {
    e.preventDefault();
})

document.addEventListener('drop', (e) => {
    e.preventDefault();
    if(e.target.dataset.draggable === 'target'){
        let it;
        if(item.parentNode.id === 'already-do'){
            it = document.createElement('input');
            it.setAttribute('type', 'checkbox');
            it.setAttribute('id', 'makeIsDo');
        }else{
            it = document.createElement('i');
            it.setAttribute('class', 'fa-solid fa-circle-check');
        };
        item.children[0].innerHtml = it;
        console.log(item.children[0]);
        e.target.appendChild(item);
    }
})