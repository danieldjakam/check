dragAndDropChecher.checked = getSetting('checkDragAndDrop') === 'true' ? true : false;
dragAndDropChecher.addEventListener('change', (e) => {
    setSetting('checkDragAndDrop', e.target.checked);
});

selectCountry.value = getSetting('country') ? getSetting('country') : 'fr';
selectCountry.addEventListener('change', (e) => {
    setSetting('country', e.target.value);
});
