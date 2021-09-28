import LocalStorage from "./localstorage.js";
const localStorage = new LocalStorage();

const drawCounter = function () {
    document.getElementById('counter').innerHTML = store.counter
}

const bindEvents = function () {
    document.getElementById('increase').addEventListener('click', function () {
        increase()
        drawCounter()
    })
    document.getElementById('decrease').addEventListener('click', function () {
        decrease()
        drawCounter()
    })
}


const store = {
    counter: 0
}


const increase = function () {
    store.counter++
}

const decrease = function () {
    store.counter--
}

const init = function () {
    bindEvents()
    drawCounter()
}

init()

