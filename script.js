// script.js
const expenseInput = document.getElementById("expenseInput");
const amountInput = document.getElementById("amountInput");
const expenseList = document.getElementById("expenseList");
const totalExpense = document.getElementById("totalExpense");

let expenses = [];

function addExpense() {
    const description = expenseInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (description !== "" && !isNaN(amount)) {
        expenses.push({ description, amount });
        updateExpenseList();
        clearInputs();
    }
}

function updateExpenseList() {
    expenseList.innerHTML = "";
    let total = 0;

    expenses.forEach(expense => {
        const listItem = document.createElement("li");
        listItem.textContent = `${expense.description}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(listItem);
        total += expense.amount;
    });

    totalExpense.textContent = total.toFixed(2);
}

function clearInputs() {
    expenseInput.value = "";
    amountInput.value = "";
}
