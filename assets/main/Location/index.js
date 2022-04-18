class CurrentLocation{
    constructor(){

    }
    render(){
        const section = document.createElement('section');
        const ul = document.createElement('ul');
        ul.classList.add('current-location');

        const stackLocation = ['Главная','Каталог', 'Кухни','Модульная кухня Ройс'];

        for (let i = 0; i < stackLocation.length; i++) {
            const element = new LocationItem(stackLocation[i]);
            ul.append(element.render());
        }

        section.append(ul);
        return section;
    }
}