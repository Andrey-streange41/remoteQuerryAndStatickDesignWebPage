class PageHeader{
    constructor(){
    }
    render(){
        const header = document.createElement('header');
        
        const servicesBlock = document.createElement('section');
        servicesBlock.classList.add('services-block');
        
        const blockComponent = new ServiceBlock()
        header.append(servicesBlock);
        servicesBlock.append(blockComponent.render());
       
        const addBlockComponent = new AddServBlock();
        servicesBlock.append(addBlockComponent.render());

        const border = document.createElement('section');
        border.classList.add('line-border');

        const aboutUsSection = new AboutUs();

        const navigation = new NavigationItem();

       
        header.append(servicesBlock);
        header.append(border);
        header.append(aboutUsSection.render());
        header.append(navigation.render());
        
        return header;
    }
}