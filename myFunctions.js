let eveTable = document.querySelectorAll(`.eve`);

eveTable.forEach((ele, i) => {
    ele.addEventListener(`click`, () => {
        window.open(`/pages/${i + 1}.html`, `_blank`, `width=800,height=800,left=0,top=0`);
    })
});