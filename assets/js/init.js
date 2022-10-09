const laodingView = document.querySelector('#load') ;
document.addEventListener('load', () => {
    
});
document.onreadystatechange = function() 
    {
        if (document.readyState != "complete") 
        {
            document.querySelector("body").style.visibility = "hidden";
            
            laodingView.classList.add('hide')
        } 
        else 
        {
            laodingView.classList.add('hide')
            document.querySelector("body").style.visibility = "visible";
        }
    };
// setTimeout(() => {
//     laodingView.classList.add('hide');
// }, 1000)

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

if (getSetting('mode') === null || getSetting('mode') === undefined) {
    if (isDark) {
        setSetting('mode', 'dark');
    } else {
        setSetting('mode', 'light');
    }
}