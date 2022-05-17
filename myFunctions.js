let eveTable = document.querySelectorAll(`.eve`);

eveTable.forEach((ele) => {
    ele.addEventListener(`click`, () => {
        window.alert(ele.textContent)
    })
})