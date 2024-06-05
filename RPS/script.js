const rock = document.querySelector(".RockP");
const paper = document.querySelector(".PaperP");
const scissors = document.querySelector(".ScissorsP");
const yp = document.querySelector(".yp");
const cp = document.querySelector(".cp");
const winner = document.querySelector(".winner");
const buttons = document.querySelectorAll("button");
let b23 = false

buttons.forEach((e) => {
    e.addEventListener("click", (q) => {
        if (q.target.classList[0] == "3") {
            if (b23 == false) {
                b23 = true
                winner.innerText = "Best to 3 Mode!!!"
                return
            }
            if (b23 == true) {
                b23 = false
                winner.innerText = "One Time Result"
                return
            }            
        }
        yp.innerText = q.target.innerText
        computerPick()
        bestof3()
    })
})

let computerPick = () => {
    let computerOptions = ["Rock", "Paper", "Scissors"]
    let randomPick = Math.floor(Math.random() * computerOptions.length)
    cp.innerHTML = computerOptions[randomPick]
}

let findWinner = () => {
    if (yp.innerText === cp.innerText) {
        if (b23 === false) winner.innerText = "Draw"
        return "Draw"
    } else if (yp.innerText == "Rock" && cp.innerText == "Scissors") {
        if (b23 === false) winner.innerText = "You Win"
        return "yw"
    } else if (yp.innerText == "Paper" && cp.innerText == "Scissors") {
        if (b23 === false) winner.innerText = "Computer Wins"
        return "cw"
    } else if (yp.innerText == "Paper" && cp.innerText == "Rock") {
        if (b23 === false) winner.innerText = "You Win"
        return "yw"
    } else if (yp.innerText == "Scissors" && cp.innerText == "Rock") {
        if (b23 === false) winner.innerText = "Computer Win"
        return "cw"
    } else if (cp.innerText == "Paper" && yp.innerText == "Rock") {
        if (b23 === false) winner.innerText = "Computer Wins"
        return "cw"
    } else if (yp.innerText == "Scissors" && cp.innerText == "Paper") {
        if (b23 === false) winner.innerText = "You Win"
        return "yw"
    }
}

let ypWinStore = [];
let cpWinStore = [];
let bestof3 = () => {
    if (b23 === false) {
        findWinner()
    }
    if (b23 === true) {
        if (ypWinStore.length === 3) {
            winner.innerText = "You Win This Round"
            ypWinStore = []
            cpWinStore = []
        } else if (cpWinStore.length === 3) {
            winner.innerText = "Computer Wins This Round"
            ypWinStore = []
            cpWinStore = []
        }
        
        if (findWinner() == "yw") {
            ypWinStore.push(yp.innerText)
            console.log("Computer Wins: ",cpWinStore, "Your Wins: ",ypWinStore)
            return
        }
        if (findWinner() == "cw") {
            cpWinStore.push(cp.innerText)
            console.log(cpWinStore, ypWinStore)
            return
        } 
        
    }
}