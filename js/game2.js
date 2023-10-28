var turn = 1
var i, j, t
var a1=0; a2=0; a3=0; b1=0; b2=0; b3=0; c1=0; c2=0; c3=0
spaceId = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
nextStep = ['A1', 'B1', 'C1', 'A2', 'B2', 'C2', 'A3', 'B3', 'C3']
const clickone = () => i = 0
const clicktwo = () => i = 1
const clickthree = () => i = 2
const clickfour = () => i = 3
const clickfive = () => i = 4
const clicksix = () => i = 5
const clickseven = () => i = 6
const clickeight = () => i = 7
const clicknine = () => i = 8
const marka1 = () => {j = 0; mark()}
const markb1 = () => {j = 1; mark()}
const markc1 = () => {j = 2; mark()}
const marka2 = () => {j = 3; mark()}
const markb2 = () => {j = 4; mark()}
const markc2 = () => {j = 5; mark()}
const marka3 = () => {j = 6; mark()}
const markb3 = () => {j = 7; mark()}
const markc3 = () => {j = 8; mark()}

const turnInfo = () => {
    var texth1 = document.getElementById('text')
    var spaceContent = document.getElementById(spaceId[t])
    if(turn === 1) texth1.innerHTML ='vez de <span id="turn">X</span> em ' + nextStep[t]
    else texth1.innerHTML ='Vez de <span id="turn">O</span> em ' + nextStep[t]
    if(turn===1){
        if(spaceContent.innerHTML==='<h3>X</h3>'||spaceContent.innerHTML==='<h3>Ø</h3>'||spaceContent.innerHTML==='<h3>O</h3>'){
            texth1.innerHTML ='vez de <span id="turn">X</span>'
        }
    } else {
        if(spaceContent.innerHTML==='<h3>X</h3>'||spaceContent.innerHTML==='<h3>Ø</h3>'||spaceContent.innerHTML=== '<h3>O</h3>'){
            texth1.innerHTML ='vez de <span id="turn">O</span>'
        }
    }
}

const mark = () => {
    t = j
    if(document.getElementById(spaceId[i]+nextStep[j]).innerHTML===' '){
        if(turn===1){
            document.getElementById(spaceId[i]+nextStep[j]).innerHTML = '<h4>X</h4>'
            turn++
        } else {
            document.getElementById(spaceId[i]+nextStep[j]).innerHTML = '<h4>O</h4>'
            turn--
        }
    }
    swinner()
    turnInfo()
}

const swinner = () => {
    for (j=0; j<=8; j++){
        const marked = document.getElementById(spaceId[i]+nextStep[j]).innerHTML
        if(j===0 && marked === '<h4>X</h4>') a1 = 2
        if(j===1 && marked === '<h4>X</h4>') b1 = 9
        if(j===2 && marked === '<h4>X</h4>') c1 = 4
        if(j===3 && marked === '<h4>X</h4>') a2 = 7
        if(j===4 && marked === '<h4>X</h4>') b2 = 5
        if(j===5 && marked === '<h4>X</h4>') c2 = 3
        if(j===6 && marked === '<h4>X</h4>') a3 = 6
        if(j===7 && marked === '<h4>X</h4>') b3 = 1
        if(j===8 && marked === '<h4>X</h4>') c3 = 8
        if(spaceId[i] === 'five'){
            if(a1+b1+c1===15 || a2+b2+c2===15 || a3+b3+c3===15 || a1+a2+a3===15 || b1+b2+b3===15 || c1+c2+c3===15 || a1+b2+c3===15 || a3+b2+c1===15){
                a1=0; a2=0; a3=0; b1=0; b2=0; b3=0; c1=0; c2=0; c3=0
                document.getElementById(spaceId[i]).innerHTML = '<div class="space center marked"><h3>X</h3><div>'
            } else if (a1!=0 && a2!=0 && a3!=0 && b1!=0 && b2!=0 && b3!=0 && c1!=0 && c2!=0 && c3!= 0){
                a1=0; a2=0; a3=0; b1=0; b2=0; b3=0; c1=0; c2=0; c3=0
                document.getElementById(spaceId[i]).innerHTML = '<div class="space center marked"><h3>Ø</h3><div>'
            }
        }
        if(a1+b1+c1===15 || a2+b2+c2===15 || a3+b3+c3===15 || a1+a2+a3===15 || b1+b2+b3===15 || c1+c2+c3===15 || a1+b2+c3===15 || a3+b2+c1===15){
            a1=0; a2=0; a3=0; b1=0; b2=0; b3=0; c1=0; c2=0; c3=0
            document.getElementById(spaceId[i]).innerHTML = '<div class="space marked"><h3>X</h3><div>'
        } else if (a1!=0 && a2!=0 && a3!=0 && b1!=0 && b2!=0 && b3!=0 && c1!=0 && c2!=0 && c3!= 0){
            a1=0; a2=0; a3=0; b1=0; b2=0; b3=0; c1=0; c2=0; c3=0
            document.getElementById(spaceId[i]).innerHTML = '<div class="space marked"><h3>Ø</h3><div>'
        }
    }
    for (j=0; j<=8; j++){
        const marked = document.getElementById(spaceId[i]+nextStep[j]).innerHTML
        if(j===0 && marked === '<h4>O</h4>') a1 = 200
        if(j===1 && marked === '<h4>O</h4>') b1 = 900
        if(j===2 && marked === '<h4>O</h4>') c1 = 400
        if(j===3 && marked === '<h4>O</h4>') a2 = 700
        if(j===4 && marked === '<h4>O</h4>') b2 = 500
        if(j===5 && marked === '<h4>O</h4>') c2 = 300
        if(j===6 && marked === '<h4>O</h4>') a3 = 600
        if(j===7 && marked === '<h4>O</h4>') b3 = 100
        if(j===8 && marked === '<h4>O</h4>') c3 = 800
        if(spaceId[i] === 'five'){
            if(a1+b1+c1===15 || a2+b2+c2===15 || a3+b3+c3===15 || a1+a2+a3===15 || b1+b2+b3===15 || c1+c2+c3===15 || a1+b2+c3===15 || a3+b2+c1===15){
                a1=0; a2=0; a3=0; b1=0; b2=0; b3=0; c1=0; c2=0; c3=0
                document.getElementById(spaceId[i]).innerHTML = '<div class="space center marked"><h3>O</h3><div>'
            } else if (a1!=0 && a2!=0 && a3!=0 && b1!=0 && b2!=0 && b3!=0 && c1!=0 && c2!=0 && c3!= 0){
                a1=0; a2=0; a3=0; b1=0; b2=0; b3=0; c1=0; c2=0; c3=0
                document.getElementById(spaceId[i]).innerHTML = '<div class="space center marked"><h3>Ø</h3><div>'
            }
        }
        if(a1+b1+c1===1500 || a2+b2+c2===1500 || a3+b3+c3===1500 || a1+a2+a3===1500 || b1+b2+b3===1500 || c1+c2+c3===1500 || a1+b2+c3===1500 || a3+b2+c1===1500){
            a1=0; a2=0; a3=0; b1=0; b2=0; b3=0; c1=0; c2=0; c3=0
            document.getElementById(spaceId[i]).innerHTML = '<div class="space marked"><h3>O</h3><div>'
        } else if (a1!=0 && a2!=0 && a3!=0 && b1!=0 && b2!=0 && b3!=0 && c1!=0 && c2!=0 && c3!= 0){
            a1=0; a2=0; a3=0; b1=0; b2=0; b3=0; c1=0; c2=0; c3=0
            document.getElementById(spaceId[i]).innerHTML = '<div class="space marked"><h3>Ø</h3><div>'
        }
    }
}