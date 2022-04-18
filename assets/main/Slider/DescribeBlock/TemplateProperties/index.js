class TemplateProperties{
    render(){
        const propSection = document.createElement('section');
        propSection.classList.add('props-secions');

        const h2 = document.createElement('h2');
        h2.textContent ='ХАРАКТЕРИСТИКИ';

        const border = document.createElement('p');
        border.classList.add('prop-border');

        propSection.append(h2);
        propSection.append(border);
        
        const blockItem = new DescribeItem();
        propSection.append(blockItem.render())
        
        const addInfo = new DescribeItem()
        const addInfoBlock = addInfo.render(); 
        addInfoBlock.style.display ='none';

        propSection.append(addInfoBlock);
        const showAll = document.createElement('button');
        showAll.classList.add('showALl');
        showAll.textContent ='Показать все';
        showAll.addEventListener('click',()=>{
           if(!this.statusButton){
            addInfoBlock.style.display = 'block';
              this.statusButton = true;
           }
           else{
            addInfoBlock.style.display = 'none';
            this.statusButton = false;
           }

        });
        

        propSection.append(showAll);

       return propSection;
    }
    statusButton = false;
}

