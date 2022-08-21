const listArray = [];

function display(playerCount) {
    console.log(playerCount);
    const orderedList = document.getElementById('ordered-list');
    orderedList.innerHTML = '';

    for (let i = 0; i < playerCount.length; i++) {

        const name = listArray[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        orderedList.appendChild(tr)

        if (i >= 4) {
            alert('Cant add more')

            return;
        }
    }
}


function playerList(player) {


    const playerName = player.parentNode.parentNode.children[0].innerText


    const playerNameObj = {
        playerName: playerName
    }
    listArray.push(playerNameObj);

    document.getElementById('total-player').innerText = listArray.length;
    display(listArray)

    document.getElementById('btn-perplayer-calculate').addEventListener('click', function () {
        const budgetPerplayerInput = document.getElementById('budget-perplayer');
        const budgetPerplayerString = budgetPerplayerInput.value;
        const budgetPerplayer = parseFloat(budgetPerplayerString);

        //Get value of budget per player


        const playerExpensesMoney = document.getElementById('player-expenses');
        const playerExpensesMoneyString = playerExpensesMoney.innerText;
        const playerExpenses = parseFloat(playerExpensesMoneyString);
        // Calculation
        const playerExpensesTotal = (budgetPerplayer * listArray.length);
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



        const sum = manager + coach + playerExpensesTotal;
        totalMoney.innerText = sum;

    })


}