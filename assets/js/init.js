if (getSetting('mode') === null || getSetting('mode') === undefined) {
    setSetting('mode', 'light');
}

let mode = getSetting('mode');
changeMode(mode);

selectModes.forEach(mo => {
    mo.checked = mode === mo.dataset.mode ? true : false;
    mo.addEventListener('change', (e) => {
        setSetting('mode', e.target.dataset.mode);
        mode = getSetting('mode');
        changeMode(mode)
    });
})