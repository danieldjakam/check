if (getSetting('mode') === null || getSetting('mode') === undefined) {
    setSetting('mode', 'light');
}

const mode = getSetting('mode');
selectModes.forEach(mo => {
    mo.checked = mode === mo.dataset.mode ? true : false;
    mo.addEventListener('change', (e) => {
        setSetting('mode', e.target.dataset.mode);
    });
})