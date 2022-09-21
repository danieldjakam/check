dragAndDropChecher.checked = getSetting('checkDragAndDrop') === 'true' ? true : false;
dragAndDropChecher.addEventListener('change', (e) => {
    setSetting('checkDragAndDrop', e.target.checked);
});

selectCountry.value = getSetting('country') ? getSetting('country') : 'fr';
selectCountry.addEventListener('change', (e) => {
    setSetting('country', e.target.value);
});

let mode = getSetting('mode') ? getSetting('mode') : 'light';
selectModes.forEach(element => {
    element.checked = mode === element.dataset.mode ? true : false;
    element.addEventListener('change', (e) => {
        setSetting('mode', e.target.dataset.mode);
    });
})