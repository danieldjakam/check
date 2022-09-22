dragAndDropChecher.checked = getSetting('checkDragAndDrop') === 'true' ? true : false;
dragAndDropChecher.addEventListener('change', (e) => {
    setSetting('checkDragAndDrop', e.target.checked);
});

selectLang.value = getSetting('lang') ? getSetting('lang') : 'fr';
selectLang.addEventListener('change', (e) => {
    setSetting('lang', e.target.value);
});
