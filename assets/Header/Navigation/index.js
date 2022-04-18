class NavigationItem{
    constructor(){

    }
    render(){
        const navSection = document.createElement('section');
        navSection.classList.add('nav-section');

        const nav = document.createElement('nav');
        const ul = document.createElement('ul');
        ul.classList.add('nav-ul');

        const navItemsText = ['КУХНИ', 'ГОСТИННЫЕ','СПАЛЬНИ','ПРИХОЖИЕ','ШКАФЫ-КУПE','ДЕТСКИЕ','ДИВАНЫ','ГДЕ ПОСМОТРЕТЬ'];
        for (let i = 0; i < navItemsText.length; i++) {
            const item = new NavItem(navItemsText[i]);
            ul.append(item.render());
        }

        nav.append(ul);
        navSection.append(nav);
        return navSection;
    }
}