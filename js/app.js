import Todo from "./localstorage.js"

        new Todo ()


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

