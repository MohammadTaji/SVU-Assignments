// start modal code

let eveTable = document.querySelectorAll(`.eve`);
let modal = document.querySelector(`.products .modal`);
let header = document.querySelector(`.products .modal h2`);
let modalPara = document.querySelectorAll(`.products .modalPara `);

eveTable.forEach((ele, i) => {
    ele.addEventListener(`click`, () => {
        modal.classList.add(`hide`);
        modalPara[i].style.display = "block";
        header.textContent = document.querySelectorAll(`.eve td:first-child`)[i].textContent;
    })
});


function modalClose() {
    modal.classList.remove(`hide`);
    modalPara.forEach((el) => {
        el.style.display = "none"
    })
}
// end modal code