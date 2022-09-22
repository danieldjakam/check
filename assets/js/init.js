if (getSetting('mode') === null || getSetting('mode') === undefined) {
    if (isDark) {
        setSetting('mode', 'dark');
    } else {
        setSetting('mode', 'light');
    }
}

if (getTasks().length < 1) { 
    setSetting('tasks', '[]')
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