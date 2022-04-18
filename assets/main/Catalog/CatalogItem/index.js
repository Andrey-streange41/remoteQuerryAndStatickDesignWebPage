class CatalogItem
{
    constructor(data)
    {
        this.data = data;
    }
    

    render(){

        const catalogItem = document.createElement('section');
        catalogItem.classList.add('catalog-item');

        const birkaDiv = document.createElement('div');
        birkaDiv.classList.add('birka');

        const saleSumma = document.createElement('p');
        saleSumma.classList.add('saleSumma');
        saleSumma.textContent = '-' + this.data.sale + '%';


        const pictureBirka = document.createElement('img');
        pictureBirka.src= 'assets/Images/birkaSale/Vector.png';
        pictureBirka.alt = 'salePicture';

        birkaDiv.append(saleSumma);
        birkaDiv.append(pictureBirka);

       
        

        const presentPicture = document.createElement('img');
        presentPicture.classList.add('img6');
        presentPicture.src = `https://github.com/fd-freshjs/serve-json/raw/main/assets/images/mebel/${this.data.pngCode}.png`;
        presentPicture.alt ='presentPicture';
        presentPicture.style.maxHeight = '250px';
        presentPicture.style.height = '250px';
        presentPicture.style.width= '300px';


        const itemName = document.createElement('h6');
        itemName.classList.add('h6-item');
        itemName.textContent = this.data.name;

        const borderItem = document.createElement('p'); // x2
        borderItem.classList.add('border-item');
        const borderItem2 = document.createElement('p'); // x2
        borderItem2.classList.add('border-item');

        const oldPriceSpan = document.createElement('span');
        oldPriceSpan.textContent = this.data.oldPrice+ "грн";
        oldPriceSpan.classList.add('span1');

        const currentPriceSpan = document.createElement('span');
        currentPriceSpan.textContent = this.data.currentPrice +'грн.';
        currentPriceSpan.classList.add('span2');

        //border2

        const section = document.createElement('section');
        
        const buttonBuy = document.createElement('button');
        buttonBuy.classList.add('button-buy-type-2');
        buttonBuy.textContent = 'КУПИТЬ';

        const hearPicture = document.createElement('img');
        hearPicture.src ='assets/Images/redHeart.png';
        hearPicture.alt = 'heartImage';

        section.append(buttonBuy);
        section.append(hearPicture);
        catalogItem.append(birkaDiv);
        catalogItem.append(presentPicture);
        catalogItem.append(itemName);
        catalogItem.append(borderItem2);
        catalogItem.append(oldPriceSpan);
        catalogItem.append(currentPriceSpan);

        
        catalogItem.append(borderItem);
        catalogItem.append(section);

        return catalogItem;
    }
}