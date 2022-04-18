class ServiceBlock{
    constructor(){

    }
    render(){
        
        const servicesList = document.createElement('ul');
        servicesList.classList.add('services-list');
        servicesList.classList.add('my-list');
        let img = document.createElement('img');
        img.src = "assets/Images/geo.svg";
        servicesList.append(img);
        let li =  new ServListitem('Ростов');
        servicesList.append(li.render());
        li = new ServListitem('Акции');
        servicesList.append(li.render());
        li = new ServListitem('Сборка')
        servicesList.append(li.render());
        li = new ServListitem('Оплата');
        servicesList.append(li.render());
        li = new ServListitem('Доставка');
        servicesList.append(li.render());
        return servicesList;
    }
}