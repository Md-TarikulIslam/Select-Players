const listArray = [];

function display(playerCount) {

    const orderedList = document.getElementById('ordered-list');
    orderedList.innerHTML = '';

    for (let i = 0; i < playerCount.length; i++) {
        const name = listArray[i].playerName;

        const ol = document.createElement('ordered-list');
        ol.innerHTML = `

        <li>${name}</li>
        `;
        orderedList.appendChild(ol);

    }
}


function playerList(player) {

    const playerName = player.parentNode.parentNode.children[0].innerText

    const playerNameObj = {
        playerName: playerName
    }

    if (listArray.length < 5) {
        listArray.push(playerNameObj);
    }
    else {
        alert("You already added 5, you can't add more!")
    }
    let buttonName = player.parentNode.parentNode.children[1].children[0]
    buttonName.setAttribute('disabled', 'disabled')


    document.getElementById('total-player').innerText = listArray.length;
    display(listArray)

    let playerExpensesTotal;
    document.getElementById('btn-perplayer-calculate').addEventListener('click', function () {
        const budgetPerplayerInput = document.getElementById('budget-perplayer');
        const budgetPerplayerString = budgetPerplayerInput.value;
        const budgetPerplayer = parseFloat(budgetPerplayerString);

        const playerExpensesMoney = document.getElementById('player-expenses');
        const playerExpensesMoneyString = playerExpensesMoney.innerText;
        const playerExpenses = parseFloat(playerExpensesMoneyString);
        playerExpensesTotal = (budgetPerplayer * listArray.length);
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



