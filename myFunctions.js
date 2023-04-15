let links = document.getElementById(`links`);
let bars = document.getElementById(`bars`);

bars.addEventListener('click', (e) => {
    links.classList.toggle(`show`);
});




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


// Start Captcha

const captcha = document.querySelector(".captcha"),
    inputField = document.querySelector(".wrapper input"),
    checkBtn = document.querySelector(".check-btn"),
    statusTxt = document.querySelector(".status-text");
//storing all captcha characters in array
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha() {
    for (let i = 0; i < 6; i++) {
        let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += ` ${randomCharacter}`;
    }
}
getCaptcha();
function removeContent() {
    inputField.value = "";
    captcha.innerText = "";
}

checkBtn.addEventListener("click", e => {
    statusTxt.style.display = "block";
    let inputVal = inputField.value.split('').join(' ');
    if (inputVal == captcha.innerText) {
        removeContent();
        getCaptcha();
        statusTxt.style.color = "#4db2ec";
        statusTxt.innerText = "Nice! You don't appear to be a robot.";
    } else if (inputVal == "") {
        e.preventDefault();
        inputField.focus();
        statusTxt.style.color = "#ff0000";
        statusTxt.innerText = "Enter captcha text Please";
    }
    else {
        e.preventDefault();
        inputField.focus();
        statusTxt.style.color = "#ff0000";
        statusTxt.innerText = "Captcha not matched. Please try again!";
        removeContent();
        getCaptcha();
    }
});

// End Captcha