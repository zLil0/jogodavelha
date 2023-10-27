var turn = 1
var text = document.getElementById('turn')
var a1 = 0, a2 = 0, a3=0, b1=0, b2=0, b3=0, c1=0, c2=0, c3=0
var xa=0, xb=0, xc=0, x1=0, x2=0, x3=0, xd1=0, xd2=0
var oa=0, ob=0, oc=0, o1=0, o2=0, o3=0, od1=0, od2=0

const marka1 = () => {
    const position = document.getElementById('a1')
    if(a1===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            xa+=8
            x1+=8
            xd1+=8
            a1++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            oa+=8
            o1+=8
            od1+=8
            a1++
        }
    }
    winner()
}

const markb1 = () => {
    const position = document.getElementById('b1')
    if(b1===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            xb+=1
            x1+=1
            b1++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            ob+=1
            o1+=1
            b1++
        }
    }
    winner()
}
const markc1 = () => {
    const position = document.getElementById('c1')
    if(c1===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            xc+=6
            x1+=6
            xd2+=6
            c1++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            oc+=6
            o1+=6
            od2+=6
            c1++
        }
    }
    winner()
}
const marka2 = () => {
    const position = document.getElementById('a2')
    if(a2===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            xa+=3
            x2+=3
            a2++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            oa+=3
            o2+=3
            a2++
        }
    }
    winner()
}
const markb2 = () => {
    const position = document.getElementById('b2')
    if(b2===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            xb+=5
            x2+=5
            xd1+=5
            xd2+=5
            b2++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            ob+=5
            o2+=5
            od1+=5
            od2+=5
            b2++
        }
    }
    winner()
}
const markc2 = () => {
    const position = document.getElementById('c2')
    if(c2===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            xc+=7
            x2+=7
            c2++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            oc+=7
            o2+=7
            c2++
        }
    }
    winner()
}
const marka3 = () => {
    const position = document.getElementById('a3')
    if(a3===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            xa+=4
            x3+=4
            xd2+=4
            a3++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            oa+=4
            o3+=4
            od2+=4
            a3++
        }
    }
    winner()
}
const markb3 = () => {
    const position = document.getElementById('b3')
    if(b3===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            xb+=9
            x3+=9
            b3++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            ob+=9
            o3+=9
            b3++
        }
    }
    winner()
}
const markc3 = () => {
    const position = document.getElementById('c3')
    if(c3===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            xc+=2
            x3+=2
            xd1+=2
            c3++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            oc+=2
            o3+=2
            od1+=2
            c3++
        }
    }
    winner()
}
const winner = () => {
    if(x1 === 15 || x2 === 15 || x3 === 15 || xa === 15 || xb===15 || xc===15 || xd1===15 || xd2 === 15){
        const final = document.getElementById('game')
        final.innerHTML =`
        <div class="finalwindow">
            <h2>Jogador com <span>X</span> ganhou!!</h2>
            <img src="img/tobey-maguire-spider-man.gif" alt="tobey-maguire-spider-man">
            <button id="playAgain" onclick="window.location.reload()">Jogar novamente</button>
        </div>`
    }
    else if(o1 === 15 || o2 === 15 || o3 === 15 || oa === 15 || ob===15 || oc===15 || od1===15 || od2 === 15){
        const final = document.getElementById('game')
         final.innerHTML =`
         <div class="finalwindow">
            <h2>Jogador com <span>O</span> ganhou!!</h2>
            <img src="img/tobey-maguire-spider-man.gif" alt="tobey-maguire-spider-man">
            <button id="playAgain" onclick="window.location.reload()">Jogar novamente</button>
         </div>`
    }
    if(a1+a2+a3+b1+b2+b3+c1+c2+c3===9){
        const final = document.getElementById('game')
         final.innerHTML =`
         <div class="finalwindow">
            <h2 class="tie">Deu <span>Velha</span>!!!</h2>
            <img src="img/velha.gif" alt="tobey-maguire-spider-man">
            <button id="playAgain" onclick="window.location.reload()">Jogar novamente</button>
         </div>`
    }
    console.log(a1+a2+a3+b1+b2+b3+c1+c2+c3===9)
}
