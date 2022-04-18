class AddServBlock{
    constructor(){

    }
    render(){
        const ul = document.createElement('ul');
        ul.classList.add('add-serv-list');
        ul.classList.add('my-list');
        let li = new ServListitem('Наши работы');
        ul.append(li.render());
        li = new ServListitem("Контакты");
        ul.append(li.render());
        return ul;
    }
}