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


// function for open result page

let loanTypeArr = [{ name: `eduLoan`, val: 10, txt: `القرض التعليمي` },
{ name: `homeLoan`, val: 11, txt: `القرض السكني` },
{ name: `comLoan`, val: 18, txt: `القرض التجاري` },
{ name: `agrLoan`, val: 14, txt: `القرض الزراعي` },
{ name: `transLoan`, val: 12, txt: `قرض النقل` },
{ name: `workLoan`, val: 14, txt: `قرض الورشات` }]
profit = function () {
    return (this.loanValue / this.numYears) / this.payment;
}

function result() {
    open(`result.html`, `_self`);
    localStorage.setItem(`fName`, document.getElementById(`fName`).value);
    localStorage.setItem(`idNum`, document.getElementById(`idNum`).value);
    localStorage.setItem(`birth`, document.getElementById(`birth`).value);
    localStorage.setItem(`tele`, document.getElementById(`tele`).value);
    localStorage.setItem(`fMail`, document.getElementById(`fMail`).value);
    localStorage.setItem(`loanValue`, document.getElementById(`loanValue`).value);
    localStorage.setItem(`loanType`, document.getElementById(`loanType`).value);
    localStorage.setItem(`numYears`, document.getElementById(`numYears`).value);
    localStorage.setItem(`payment`, document.getElementById(`payment`).value);
}
function loanTypeName() {
    let val;
    loanTypeArr.map((el) => {
        if (el.name == localStorage.loanType) {
            val = el.txt;
        }
    })
    return val;
}

function loanTypeProfit() {
    let val;
    loanTypeArr.map((el) => {
        if (el.name == localStorage.loanType) {
            val = el.val;
        }
    })
    return val;
}

function payment() {
    if (localStorage.payment == 1) {
        return 12;
    } else if (localStorage.payment == 4) {
        return 3;
    } else if (localStorage.payment == 12) {
        return 1;
    }
}

function amount() {
    let prof = (localStorage.loanValue * loanTypeProfit()) / 100;
    return (((parseFloat(prof) + parseFloat(localStorage.loanValue)) / localStorage.numYears) / localStorage.payment)
}

function load() {
    document.getElementById(`resName`).value = localStorage.fName;
    document.getElementById(`resIdNum`).value = localStorage.idNum;
    document.getElementById(`resBirth`).value = localStorage.birth;
    document.getElementById(`resTele`).value = localStorage.tele;
    document.getElementById(`resMail`).value = localStorage.fMail;
    document.getElementById(`resLoanValue`).value = localStorage.loanValue;
    document.getElementById(`resLoanType`).value = loanTypeName();
    document.getElementById(`profit`).value = `%${loanTypeProfit()}`;
    document.getElementById(`resNumYears`).value = localStorage.numYears;
    document.getElementById(`resPayment`).value =
        `${amount().toFixed(2)} كل ${payment()} شهر `;
}
