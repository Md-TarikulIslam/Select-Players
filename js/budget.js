document.getElementById('btn-perplayer-calculate').addEventListener('click', function () {
    const budgetPerplayerInput = document.getElementById('budget-perplayer');
    const budgetPerplayerString = budgetPerplayerInput.value;
    const budgetPerplayer = parseFloat(budgetPerplayerString);
    //Get value of budget per player


    const playerExpensesMoney = document.getElementById('player-expenses');
    const playerExpensesMoneyString = playerExpensesMoney.innerText;
    const playerExpenses = parseFloat(playerExpensesMoneyString);
    //Calculation
    const startValue = playerExpenses + 1
    const playerExpensesTotal = startValue * (budgetPerplayer * 5);
    playerExpensesMoney.innerText = playerExpensesTotal;
})