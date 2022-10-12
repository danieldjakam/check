selectColors.forEach(selectColor => {
    checkColor();
    selectColor.addEventListener('click', (e) => {
        checkColor();
        setSetting('color', e.target.dataset.color);
    })
})
