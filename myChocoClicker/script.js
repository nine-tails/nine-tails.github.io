let chocolats = 0
let chocoPer = 0
let roboCount = 0
const roboX = 1
let cooksCount = 0
const cookX = 10
let confCount = 0
const confX = 100
let factoryCount = 0
const factoryX = 1000

function chocoSec(number) {
    chocolats += number
    document.querySelector ('span:nth-of-type(1)')
        .innerHTML = chocolats.toFixed()
    document.querySelector('#chocoPer').innerHTML = chocoPer
    document.title = chocolats.toFixed() + ' Шоколадок'
}

function buy(count, x) {
    let cost = Math.floor(x * 10 *
        Math.pow(1.1, count));
    if (chocolats >= cost) {
        chocoPer += x
        ++count
        chocolats -= cost
        document.querySelector(`#count${x}`).innerHTML = count;
        switch (x) {
            case 1 : roboCount++
                break
            case 10 : cooksCount++
                break
            case 100 : confCount++
                break
            case 1000 : factoryCount++
                break
        }
    }
    let nextCost = Math.floor(x * 10 * Math.pow(1.1, count));
    document.querySelector(`#cost${x}`).innerHTML = nextCost;
}

setInterval(function () {
    chocoSec(chocoPer/10);
}, 100,);