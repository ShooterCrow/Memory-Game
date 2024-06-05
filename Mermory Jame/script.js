import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})



const cardArray = [
    {
        name: 'fries',
        imaje:'imajes/fries.png'
    },
    {
        name: 'burjer',
        imaje:'imajes/burjer.png'
    },
    {
        name: 'ice-cream',
        imaje:'imajes/ice-cream.png'
    },
    {
        name: 'jotdoj',
        imaje:'imajes/jotdoj.png'
    },
    {
        name: 'milksjake',
        imaje:'imajes/milksjake.png'
    },
    {
        name: 'pizza',
        imaje:'imajes/pizza.png'
    },
    {
        name: 'fries',
        imaje:'imajes/fries.png'
    },
    {
        name: 'burjer',
        imaje:'imajes/burjer.png'
    },
    {
        name: 'ice-cream',
        imaje:'imajes/ice-cream.png'
    },
    {
        name: 'jotdoj',
        imaje:'imajes/jotdoj.png'
    },
    {
        name: 'milksjake',
        imaje:'imajes/milksjake.png'
    },
    {
        name: 'pizza',
        imaje:'imajes/pizza.png'
    },{
        name: 'fries',
        imaje:'imajes/fries.png'
    },
    {
        name: 'burjer',
        imaje:'imajes/burjer.png'
    },
    {
        name: 'ice-cream',
        imaje:'imajes/ice-cream.png'
    },
    {
        name: 'jotdoj',
        imaje:'imajes/jotdoj.png'
    },
    {
        name: 'milksjake',
        imaje:'imajes/milksjake.png'
    },
    {
        name: 'pizza',
        imaje:'imajes/pizza.png'
    },
    {
        name: 'fries',
        imaje:'imajes/fries.png'
    },
    {
        name: 'burjer',
        imaje:'imajes/burjer.png'
    },
    {
        name: 'ice-cream',
        imaje:'imajes/ice-cream.png'
    },
    {
        name: 'jotdoj',
        imaje:'imajes/jotdoj.png'
    },
    {
        name: 'milksjake',
        imaje:'imajes/milksjake.png'
    },
    {
        name: 'pizza',
        imaje:'imajes/pizza.png'
    }  
]


const type = document.querySelector("button");
const buttonsFamily = document.querySelector(".buttons");
const score = document.querySelector("#score");
let scoreCountD = document.querySelector("#score #result");
let scoreCount = 0
let container = document.querySelector(".container");
let noOfCards
let picedCards = []
let picedCardsId = []
let boardTypesArray = []
let playin = false

function checkMatch () {
    const cards = document.querySelectorAll('img')
    console.log(cards[0], picedCardsId)

    if (noOfCards === 12) {
        if (picedCards[0] == picedCards[1]) {
            cards[picedCardsId[0]].setAttribute("src", 'imajes/place.png')
            cards[picedCardsId[1]].setAttribute("src", 'imajes/place.png')
            cards[picedCardsId[0]].removeEventListener("click", flipCard)
            cards[picedCardsId[1]].removeEventListener("click", flipCard)
            scoreCount += 2
            scoreCountD.innerText = scoreCount
            console.log("Matc Found", picedCards[0], picedCards[1])
            playin = true
        } else {
            cards[picedCardsId[0]].setAttribute("src", 'imajes/wjite.png');
            cards[picedCardsId[1]].setAttribute("src", 'imajes/wjite.png');
            // console.log("No Matc Found", picedCards[0], picedCards[1])
        }
        picedCardsId = []
        picedCards = []

    }
 
    if (noOfCards === 24) {
        let masterCard = picedCards[0]
        let matc = (el) => el === masterCard
        if (picedCards.every(matc)) {
            for (let i = 0; i<picedCards.length;i++) {
                cards[picedCardsId[i]].setAttribute("src", 'imajes/place.png');
                cards[picedCardsId[i]].removeEventListener("click", flipCard);
            }
            scoreCount += 4
            scoreCountD.innerText = scoreCount
        } else {for (let i = 0; i<picedCards.length;i++) {
            cards[picedCardsId[i]].setAttribute("src", 'imajes/wjite.png');
        }
        }
        picedCardsId = []
        picedCards = []
    }
    
}

function flipCard () {
    const cardId = this.id
    picedCards.push(cardArray[cardId].name)
    picedCardsId.push(cardId)
    this.setAttribute("src", cardArray[cardId].imaje)
    if (noOfCards === 12) {
        if (picedCards.length === 2) {
            setTimeout(checkMatch, 100); 
        }

    }
    if (noOfCards === 24) {
        if (picedCards.length === 4) {
            setTimeout(checkMatch, 500); 
        }
    }
}

cardArray.sort(() => 0.5 - Math.random())
let createCards = (type) => {    
    document.querySelector("#hero").style.display = 'none'
    container.style.display = "flex"
    score.style.display = "flex"
    container.innerHTML = ''
    for (let i = 0; i<type; i++) {
        let box = document.createElement("img");
        box.setAttribute("src", "imajes/wjite.png");
        box.setAttribute("id", i);
        box.classList.add("box");
        container.appendChild(box);
        box.addEventListener("click", flipCard);
        if (type == 24) {
            box.style.width = '70px'
            box.style.height = '70px'
            container.style.width = '420px'
        }
    } 
    // type.innerText = 33
}

function starter () {
    type.addEventListener("click", () => {
    type.style.display = 'none'
        for (let i = 0; i < 2; i++) {
            let boardTypes = document.createElement("button");
            boardTypes.setAttribute("id", 'type'+i);
            boardTypes.style.position = 'relative'
            buttonsFamily.appendChild(boardTypes);
            boardTypes.innerText = `${(i+1) * cardArray.length/2} Cards`
            boardTypesArray.push(boardTypes.id)
        }
        chooseType ()
    })
}
let answer
function chooseType () {
    let button1 = document.querySelector("#type0")
    let button2 = document.querySelector("#type1")
    let bArray = [button1, button2]

    bArray.forEach((x) => {
        x.addEventListener("click", () => {
            cardArray.sort(() => 0.5 - Math.random())
            
        })
    })
    
    button1.addEventListener("click", () => {
        noOfCards = 12
        if (playin == true) {
            playin = false
            answer = prompt("You will loose your current points, continue?")
            console.log(answer)
        }
        button1.style.display ='none'
        createCards(noOfCards)
        if (button2.style.display ='none') {
            button2.style.display ='block'
        }
    })
    button2.addEventListener("click", () => {
        noOfCards = 24
        if (playin == true) {
            playin = false
            let answer = prompt("You will loose your current points, continue?")
        }
        button2.style.display ='none'
        createCards(noOfCards)
        if (button1.style.display ='none') {
            button1.style.display ='block'
        }
    })


}


starter()



























