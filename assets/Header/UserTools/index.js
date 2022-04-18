class UserTools{
    constructor(){

    }
    render(){
        const section4 = document.createElement('section');
        section4.classList.add('about-as-elem');

        const smallImgSection = document.createElement('section');
        smallImgSection.classList.add('small-img-sections');

        const item1 = new UserToolItem({pictureSrc :'assets/Images/account.png', pictreAlt: 'userPciture'});
        const item2 = new UserToolItem({pictureSrc :'assets/Images/heart.png', pictreAlt: 'heart'});
        const item3 = new UserToolItem({pictureSrc :'assets/Images/basket.png', pictreAlt: 'basket'});
        smallImgSection.append(item1.render());
        const p = document.createElement('p');
        p.textContent = '2';
        const block = item2.render();
        block.append(p)
        smallImgSection.append(block);
        smallImgSection.append(item3.render());
        
        const pictureLabelsSection = document.createElement('section');
        pictureLabelsSection.classList.add('img-labels-section');

        let textLabel = document.createElement('p');
        textLabel.textContent = 'Войти';
        pictureLabelsSection.append(textLabel);
        let textLabel2 = document.createElement('p');
        textLabel2.textContent = 'Избранное';
        pictureLabelsSection.append(textLabel2);
        let textLabel3 = document.createElement('p');
        textLabel3.textContent = 'Корзина';
        pictureLabelsSection.append(textLabel3);

        section4.append(smallImgSection);
        section4.append(pictureLabelsSection);
        return section4;
    }
}