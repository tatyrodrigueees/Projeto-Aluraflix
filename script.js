var playersList = [];

var tableElement = document.getElementById("tabelaJogadores");

function addPlayers() {
  var newPlayer = document.getElementById("playerName").value;
  playersList.push({
    name: newPlayer,
    wins: 0,
    ties: 0,
    defeats: 0,
    points: 0
  });
  document.getElementById("playerName").value = "";
  displayData();
}

function displayData() {
  tableElement.innerHTML = "";
  for (i = 0; i < playersList.length; i++) {
    tableElement.innerHTML =
      tableElement.innerHTML +
      `
        <tr>
            <td>${playersList[i].name}</td>
            <td>${playersList[i].wins}</td>
            <td>${playersList[i].ties}</td>
            <td>${playersList[i].defeats}</td>
            <td>${playersList[i].points}</td>
            <td><button onClick="adicionarVitoria(${i})" class="win">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${i})" class="tie">Empate</button></td>
            <td><button onClick="adicionarDerrota(${i})" class="defeat">Derrota</button></td>
       </tr>
    `;
}
}

function adicionarVitoria(player) {
  playersList[player].wins++;
  playersList[player].points = playersList[player].points + 3;
  displayData();
}

function adicionarEmpate(player) {
  playersList[player].ties++;
  playersList[player].points++;
  displayData();
}

function adicionarDerrota(player) {
  playersList[player].defeats++;
  displayData();
}

function resetData() {
  playersList.length = 0;
  displayData();
}

function startAgain() {
  playersList.forEach(function (player) {
    player.wins = 0;
    player.ties = 0;
    player.defeats = 0;
    player.points = 0;
  });
  displayData();
}




