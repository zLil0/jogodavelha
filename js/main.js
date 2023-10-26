var turn = 1
var text = document.getElementById('turn')
var a1 = 0, a2 = 0, a3=0, b1=0, b2=0, b3=0, c1=0, c2=0, c3=0

const marka1 = () => {
    const position = document.getElementById('a1')
    if(a1===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            a1++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            a1++
        }
    }

}
const markb1 = () => {
    const position = document.getElementById('b1')
    if(b1===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            b1++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            b1++
        }
    }

}
const markc1 = () => {
    const position = document.getElementById('c1')
    if(c1===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            c1++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            c1++
        }
    }

}
const marka2 = () => {
    const position = document.getElementById('a2')
    if(a2===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            a2++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            a2++
        }
    }

}
const markb2 = () => {
    const position = document.getElementById('b2')
    if(b2===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            b2++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            b2++
        }
    }

}
const markc2 = () => {
    const position = document.getElementById('c2')
    if(c2===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            c2++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            c2++
        }
    }

}
const marka3 = () => {
    const position = document.getElementById('a3')
    if(a3===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            a3++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            a3++
        }
    }
}
const markb3 = () => {
    const position = document.getElementById('b3')
    if(b3===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            b3++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            b3++
        }
    }

}
const markc3 = () => {
    const position = document.getElementById('c3')
    if(c3===0){
        if(turn === 1){
            position.innerHTML = '<h3>X<h3>'
            turn += 1
            text.innerHTML = 'O'
            c3++
        }
        else{
            position.innerHTML = '<h3>O<h3>'
            turn -= 1
            text.innerHTML = 'X'
            c3++
        }
    }
}

if (a1+b1+c1 === 3 || a2+b2+c2 === 3 || a3+b3+c3 === 3 || a1+a2+a3 === 3 || b1+b2+b3 === 3 || a1+a2+a3 === 3 || a1+b2+c3 === 3 || c1+b2+a3 === 3){
    const final = document.getElementById('game')
    final.innerHTML = `
    <div class="finalwindow">
        <h2>Jogador com <span>X</span> ganhou!!</h2>
    </div>`   
}
if (a1+b1+c1 === 3)
console.log(a1+b1+c1)
