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
        for (let i = 0; i < 4; i++) {
            const block = document.createElement('div');
            const border2= document.createElement('p');
            border2.classList.add('prop-border-2');
            for (let j = 0; j < 2; j++) {
                 const element = document.createElement('span');
                 if(i===0 && j === 0)
                     element.textContent ='Высота нижних шкафов:';
                 else if(i===0 && j=== 1)
                     element.textContent ='858 мм - до верха столешницы';
                 else if(i ===1 && j ===0)
                    element.textContent ='Высота верхних шкафов:';
                 else if(i===1 && j ===1)
                    element.textContent = "700 мм";
                 else if(i===2 && j === 0)
                    element.textContent = "Глубина нижних шкафов:";
                 else if(i===2 && j === 1)
                    element.textContent = "858 мм - до верха столешницы";
                 else if(i===3 && j === 0)
                    element.textContent = "Высота нижних шкафов:";
                    else if(i===4 && j === 1)
                    element.textContent = "500 мм корпус (по столешнице 600 мм";
                 block.append(element);
            }
            block.append(border2);
            propSection.append(block);
        }
        const showAll = document.createElement('button');
        showAll.classList.add('showALl');
        showAll.textContent ='Показать все';

        propSection.append(showAll);

       return propSection;
    }
}