// // dom element
// const balanceE1 = document.getElementById('balance');
// const incomeE1 = document.getElementById('income');
// const expenseE1 = document.getElementById('expense');
// const transactionsE1 = document.getElementById('transactions');
// const formE1 = document.getElementById('form');
// const textInput = document.getElementById('text');
// const amountInput = document.getElementById('amount');
// const clearAllBtn = document.getElementById('clearAllBtn');

// //parse local storage 
// let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// //save local storage
// function updateLocalStorage() {
//     localStorage.setItem('transactions',JSON.stringify(transactions))
// }

// //function init
// function init() {
//     renderTransactions();
//     updateBalance();
// }
// function generateID() {
//     return Math.floor(Math.random() * 100000000);
// }
// //add event listeners
// formE1.addEventListener('submit',addBtn);
// clearAllBtn.addEventListener('click',clearAllBtn1);

// function addBtn(e){
//     e.preventDefault()
//     const text = textInput.value.trim();
//     const amount = +amountInput.value;

//     const transaction = {
//         id: generateID(),
//         text,
//         amount,
//     }

//     transactions.push(transaction)
//     updateLocalStorage()
//     renderTransactions()
//     updateBalance();

//     textInput.value = ''
//     amountInput.value = ''
//     textInput.focus();
// }

// function updateBalance() {
//     const amounts = transactions.map(transaction => transaction.amount)

//     const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);
    
    
//     const income = amounts
//     .filter(item => item > 0)
//     .reduce((acc,item)=> (acc+= item),0)
//     .toFixed(2);
     
//     const expense = amounts
//     .filter(item => item < 0)
//     .reduce((acc,item)=> (acc+= item),0)*-1
//     .toFixed(2);

// balanceE1.innerText = `$${total}`;
// incomeE1.innerText = `$${income}`;
// expenseE1.innerText = `$${expense}`;
// }

// function renderTransactions() {
    
//     transactionsE1.innerHTML = '';

//     transactions.forEach(transaction => {
//     const isIncome = transaction.amount > 0;
//     const sign = isIncome ? '+' : '-';
//     const amount = Math.abs(transaction.amount);

//     const item = document.createElement('div');
//     item.classList.add('transaction');
//     item.classList.add(isIncome ? 'income' : 'expense')

//     item.innerHTML = `
//     <div class="transaction-text">${transaction.text}</div>
//     <div class="transaction-amount">${sign}$${amount}</div>
//     <button class="delete-btn" onclick="showModal">x</button>
//     `
//     transactionsE1.appendChild(item);
//     })
// }

// function clearAllBtn1() {
//     if (transactions.length ===  0) return;
//     if (confirm('aree you sure you want to delete all this Transactions')) {
//         transactions = [];
//         updateBalance()
//         updateLocalStorage();
//         renderTransactions();
//     }
// }
// init();





// dom eleements 
const balanceE1 = document.getElementById('balance');
const incomeE1 = document.getElementById('income');
const expenseE1 = document.getElementById('expense');
const transactionsE1 = document.getElementById('transactions');
const formE1 = document.getElementById('form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');
const clearAllBtn = document.getElementById('clearAllBtn');

function init() {
    renderTransactions()
    updateBalance()
}
//local storage 

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function saveTransactions(){
    localStorage.setItem('transactions',JSON.stringify(transactions));
}
//event
formE1.addEventListener('submit',addTransactions)


function generateId() {
    return Math.floor(Math.random() * 100000);
}

//add transaction button
function addTransactions(e) {
    e.preventDefault();
    const text = textInput.value.trim();
     const amount = +amountInput.value;

    const transaction = {
        id: generateId(),
        text,
        amount,
    }
    transactions.push(transaction)
    saveTransactions();
    updateBalance();
    renderTransactions();


    textInput.value = '';
    amountInput.value = ''
    textInput.focus();
}

//current balance

function updateBalance() {
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc,item) => (acc += item),0)

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc,item) => (acc += item),0)
    .toFixed(2)
    const expense = amounts
    .filter(item => item < 0)
    .reduce((acc,item) => (acc += item),0)*-1
    .toFixed(2)

    incomeE1.innerText = `$${income}`
    expenseE1.innerText = `$${expense}`
    balanceE1.innerText = `$${total}`
}

function renderTransactions() {
    transactionsE1.innerHTML = '';
    transactions.forEach(transaction => {
        const isIncome = transaction.amount > 0;
        let sign;
        if (isIncome) {
            sign = '+'
        } else {
            sign = '-'
        }
        const amount = Math.abs(transaction.amount);

        const item = document.createElement("div");
        item.classList.add('transaction');
        if (isIncome) {
            item.classList.add('income');
        } else {
            item.classList.add('expense');
        }

        item.innerHTML = `
        <div class="transaction-text">${transaction.text}</div>
        <div class="transaction-amount">${sign}$${amount}</div>
        <button></button>
        `
        transactionsE1.appendChild(item);
    });
}
init()