export default class Localstorage{
    constructor() {
        this.enterButton = document.querySelector('#inputArea button');
        this.input = document.querySelector('#inputArea input');
        this.ul = document.querySelector('ul#toDoList');

        this.enterButton.addEventListener('click', (e) => this.addListItem(e));
        this.input.addEventListener('keypress', (e) => this.addListItem(e));
    }

    addListItem(e){
        if(this.input.value.length > 0 && (e.key === 'Enter' || e.key === undefined)){
            this.createListItem();
        }

    }

    updateItems(){
        this.items = [];


    }

    saveItems(){

    }
}