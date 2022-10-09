selectColors.forEach(selectColor => {
    console.log(selectColor);
    selectColor.addEventListener('click', (e) => {
        setSetting('color', e.target.dataset.color);
    })
})