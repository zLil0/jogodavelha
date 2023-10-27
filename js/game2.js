var turn = 1
var spaceId
var nextStep
const clickone = () => spaceId = 'one'
const clicktwo = () => spaceId = 'two'
const clickthree = () => spaceId = 'three'
const clickfour = () => spaceId = 'four'
const clickfive = () => spaceId = 'five'
const clicksix = () => spaceId = 'six'
const clickseven = () => spaceId = 'seven'
const clickeight = () => spaceId = 'eight'
const clicknine = () => spaceId = 'nine'
const marka1 = () => {nextStep = 'A1'; mark()}
const markb1 = () => {nextStep = 'B1'; mark()}
const markc1 = () => {nextStep = 'C1'; mark()}
const marka2 = () => {nextStep = 'A2'; mark()}
const markb2 = () => {nextStep = 'B2'; mark()}
const markc2 = () => {nextStep = 'C2'; mark()}
const marka3 = () => {nextStep = 'A3'; mark()}
const markb3 = () => {nextStep = 'B3'; mark()}
const markc3 = () => {nextStep = 'C3'; mark()}


const mark = () => {
    if(document.getElementById(spaceId+nextStep).innerHTML===' '){
        if(turn===1){
            document.getElementById(spaceId+nextStep).innerHTML = '<h4>X</h4>'
            turn++
        } else {
            document.getElementById(spaceId+nextStep).innerHTML = '<h4>O</h4>'
            turn--
        }
    }
}