class AboutUs{
    constructor(){

    }
    render(){
        const aboutUsSection = document.createElement('section');
        aboutUsSection.classList.add('about-as-info-section');
        const logo = document.createElement('img');
        logo.classList.add('yel-bol');
        logo.src = 'assets/Images/round.svg';
        logo.alt = 'logoImg';
        const logoImg = document.createElement('img');
        logoImg.classList.add('about-as-elem');
        logoImg.src = 'assets/Images/Vector.svg';
        logoImg.alt = 'logoText';
        const section1 = document.createElement('section');
        section1.classList.add('about-as-elem');
        const sec1Text = document.createElement('p');
        sec1Text.textContent = 'ул. Московская ,144 корп. -1';
        const sec1Link = document.createElement('a');
        sec1Link.textContent = 'Схема проезда';
        const section2 = document.createElement('section');
        section2.classList.add('about-as-elem');
        const searchField = document.createElement('input');
        searchField.classList.add('search');
        searchField.type = 'text';
        searchField.placeholder = 'Поиск';
        const searchPicture = document.createElement('img');
        searchPicture.src = 'assets/Images/search.png';
        searchPicture.classList.add('search-svg')
        const section3 = document.createElement('section');
        section3.classList.add('about-as-elem');
        const sec3Text = document.createElement('p');
        sec3Text.classList.add('tel-p');
        sec3Text.textContent ='8 (961) 525 91 91';
        const button = document.createElement('order-button');
        button.classList.add('order-button');
        button.textContent='Заказать звонок';


        
        aboutUsSection.append(logo);
        aboutUsSection.append(logoImg);
        aboutUsSection.append(section1);
        section1.append(sec1Text);
        section1.append(sec1Link);
        aboutUsSection.append(section2);
        section2.append(searchField);
        section2.append( searchPicture);
        aboutUsSection.append(section3);
        section3.append(sec3Text);
        section3.append(button);
        const userTools = new UserTools();
        aboutUsSection.append(userTools.render());
        return aboutUsSection;
    }
}