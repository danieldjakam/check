changePrimaryColor();
selectColors.forEach(selectColor => {
    checkColor();
    selectColor.addEventListener('click', (e) => {
        setSetting('color', e.target.dataset.color);
        checkColor();
        changePrimaryColor();
    })
})
