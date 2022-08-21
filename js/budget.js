
document.getElementById('btn-perplayer-calculate').addEventListener('click', function () {
    const budgetPerplayerInput = document.getElementById('budget-perplayer');
    const budgetPerplayerString = budgetPerplayerInput.value;
    const budgetPerplayer = parseFloat(budgetPerplayerString);
    //Get value of budget per player


    const playerExpensesMoney = document.getElementById('player-expenses');
    const playerExpensesMoneyString = playerExpensesMoney.innerText;
    const playerExpenses = parseFloat(playerExpensesMoneyString);
    // Calculation
    const startValue = playerExpenses + 1
    const playerExpensesTotal = startValue * (budgetPerplayer * 5);
    playerExpensesMoney.innerText = playerExpensesTotal;


});

document.getElementById('btn-total-budget').addEventListener('click', function () {
    const managerField = document.getElementById('manager-field');
    const managerFieldString = managerField.value;
    const manager = parseFloat(managerFieldString);


    const coachField = document.getElementById('coach-field');
    const coachFieldString = coachField.value;
    const coach = parseFloat(coachFieldString);




    const totalMoney = document.getElementById('total');
    const totalMoneyString = totalMoney.innerText;
    const money = parseFloat(totalMoneyString);



    const sum = manager + coach;
    totalMoney.innerText = sum;

})

