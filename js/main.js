var turn = 1, i, a1=0, a2=0, a3=0, b1=0, b2=0, b3=0, c1=0, c2=0, c3=0
var spaceId = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]
const marka1 = () => {i = 0; mark()}
const marka2 = () => {i = 1; mark()}
const marka3 = () => {i = 2; mark()}
const markb1 = () => {i = 3; mark()}
const markb2 = () => {i = 4; mark()}
const markb3 = () => {i = 5; mark()}
const markc1 = () => {i = 6; mark()}
const markc2 = () => {i = 7; mark()}
const markc3 = () => {i = 8; mark()}

const mark = () => {
    if(document.getElementById(spaceId[i]).innerHTML===' '){
        if(turn===1){
            document.getElementById(spaceId[i]).innerHTML = '<h3>X</h3>'
            document.getElementById('turn').innerHTML ='O'
            turn++
        } else {
            document.getElementById(spaceId[i]).innerHTML = '<h3>O</h3>'
            document.getElementById('turn').innerHTML ='X'
            turn--
        }
    }
    winner()
}
const winner = () => {
    switch (i) {
        case 0: turn===1 ? a1 = 8 : a1 = 800; break;
        case 1: turn===1 ? a2 = 3 : a2 = 300; break;
        case 2: turn===1 ? a3 = 4 : a3 = 400; break;
        case 3: turn===1 ? b1 = 1 : b1 = 100; break;
        case 4: turn===1 ? b2 = 5 : b2 = 500; break;
        case 5: turn===1 ? b3 = 9 : b3 = 900; break;
        case 6: turn===1 ? c1 = 6 : c1 = 600; break;
        case 7: turn===1 ? c2 = 7 : c2 = 700; break;
        default:turn===1 ? c3 = 2 : c3 = 200; break;
    }
    if (a1+a2+a3===15||b1+b2+b3===15||c1+c2+c3===15||a1+b1+c1===15||a2+b2+c2===15||a3+b3+c3===15||a1+b2+c3===15||c1+b2+a3===15){
        document.getElementById('game').innerHTML =`
        <div class="finalwindow">
            <h2>Jogador com <span>O</span> ganhou!!</h2>
            <img src="img/tobey-maguire-spider-man.gif" alt="tobey-maguire-spider-man">
            <button id="playAgain" onclick="window.location.reload()">Jogar novamente</button>
        </div>`
    }
    else if (a1+a2+a3===1500||b1+b2+b3===1500||c1+c2+c3===1500||a1+b1+c1===1500||a2+b2+c2===1500||a3+b3+c3===1500||a1+b2+c3===1500||c1+b2+a3===1500){
        document.getElementById('game').innerHTML =`
        <div class="finalwindow">
            <h2>Jogador com <span>X</span> ganhou!!</h2>
            <img src="img/tobey-maguire-spider-man.gif" alt="tobey-maguire-spider-man">
            <button id="playAgain" onclick="window.location.reload()">Jogar novamente</button>
        </div>`
    }
    else if(a1!=0 && a2!=0 && a3!=0 && b1!=0 && b2!=0 && b3!=0 && c1!=0 && c2!=0 && c3!=0){
        document.getElementById('game').innerHTML =`
         <div class="finalwindow">
            <h2 class="tie">Deu <span>Velha</span>!!!</h2>
            <img src="img/velha.gif" alt="tobey-maguire-spider-man">
            <button id="playAgain" onclick="window.location.reload()">Jogar novamente</button>
         </div>`
    }
}
