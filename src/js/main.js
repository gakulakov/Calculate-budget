let startBtn = document.getElementById('start');


let budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];


let expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countExpensesBtn = document.getElementsByTagName('button')[2];

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent');


let yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;



startBtn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt ('Ваш бюджет на месяц?');

    while (isNaN(money) || money === '' || money == null) {
        money = prompt("Ваш бюджет?", '');
    }
    appDate.budget = money;
    appDate.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a !== '' && b !== '' && a.length < 50 && a.length > 0 && b.length > 0) {
            console.log('done');
            appDate.expenses[a] = b;
            sum += +b;
        } else {
            i = 0;
        }
    }
    expensesValue.textContent = sum;
    appDate.expenses.expensesSum = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appDate.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appDate.optionalExpenses[i] + 'руб. ';
    }
});

countExpensesBtn.addEventListener('click', function () {
    if (appDate.budget !== undefined) {
        appDate.moneyPerDay = ((appDate.budget - appDate.expenses.expensesSum) / 30).toFixed();
        dayBudgetValue.textContent = appDate.moneyPerDay;

        if (appDate.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка.";
        } else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appDate.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Начните расчёт';
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appDate.income = items.split(', ');
    incomeValue.textContent = appDate.income;
});

checkSavings.addEventListener('click', function () {
    if (appDate.savings === true) {
        appDate.savings = false;
    } else {
        appDate.savings = true
    }
});

sumValue.addEventListener('input', function () {
    if (appDate.savings === true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appDate.monthIncome = sum / 100 / 12 * percent;
        appDate.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appDate.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appDate.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appDate.savings === true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appDate.monthIncome = sum / 100 / 12 * percent;
        appDate.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appDate.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appDate.yearIncome.toFixed(1);
    }

});

let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};




console.log(start);
console.log(budgetValue, dayBudgetValue, levelValue, expensesValue, optionalExpensesValue, incomeValue, monthSavingsValue, yearSavingsValue);
console.log(expensesItem);
console.log(expensesBtn, optionalExpensesBtn, countExpensesBtn);
console.log(optionalExpensesItem);
console.log(chooseIncome, checkSavings, sumValue, percentValue);
console.log(yearValue, monthValue, dayValue,);
