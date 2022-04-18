class DescribeBlock{
    constructor(){
        this.heartStatus =false;
    }
    heartStatus =false;
    render(){
        const descrBlock = document.createElement('section');
        descrBlock.classList.add('descr-block');

        const row1 = document.createElement('section');
        row1.classList.add('row1');

        const h2 = document.createElement('h2');
        h2.textContent = "Модульная кухня Ройс";

        const starsContainer = new StarsContainer();

        const p = document.createElement('p');
        p.textContent = "5 отзывов";

        row1.append(h2);
        row1.append(starsContainer.render());
        row1.append(p);

        const row2 = document.createElement('section');
        row2.classList.add('row2');

        for (let i = 0; i < 2; i++) {
            const element = document.createElement('p');
            if(i===0)
                element.textContent = '18 700 руб.';
            else 
                element.textContent = '13 100 руб. м/п';
            row2.append(element);
        }

        for (let i = 0; i < 2; i++) {
            const element = document.createElement('img');
            if(i===0){
                element.src="assets/Images/birkaSale/Vector.png";
            }
            else{
                element.src="assets/Images/birkaSale/-30%.png";
            }
            row2.append(element);
        }

        const row3 = document.createElement('section');
        row3.classList.add('row3');

        const button = document.createElement('button');
        button.textContent="В наличии";

        const rastroch = document.createElement('p');
        rastroch.textContent ="Рассрочка 0-0-6";

        row3.append(button);
        row3.append(rastroch);

        const row4 = document.createElement('section');
        const buttonBuy = new BlueButton('КУПИТЬ');
        
        const imgHeart = document.createElement('img');
        imgHeart.src='assets/Images/redHeart.png';
        imgHeart.alt = 'heartPicture';
        imgHeart.classList.add('heart2');
        imgHeart.addEventListener('click', ()=>{
            if(this.heartStatus ===false){
                imgHeart.src = 'assets/Images/fillHeart.png';
                this.heartStatus = true;
            }
            else{
                imgHeart.src = 'assets/Images/redHeart.png';
                this.heartStatus = false;
            }
                
        });

        row4.append(buttonBuy.render());
        row4.append(imgHeart);

        const makeProjButton = new BlueButton('СДЕЛАТЬ ПРОЕКТ И ПРОСЧЕТ');
        const infoButton = new BlueButton('ГДЕ ПОСМОТРЕТЬ');

        const colorsBlock = new FacadColors();
        const propSection = new TemplateProperties();
        
        descrBlock.append(row1);
        descrBlock.append(row2);
        descrBlock.append(row3);
        descrBlock.append(row4);
        descrBlock.append(makeProjButton.render());
        descrBlock.append(infoButton.render());
        descrBlock.append(colorsBlock.render());
        descrBlock.append(propSection.render());

        return descrBlock;

    }
}