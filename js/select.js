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
}