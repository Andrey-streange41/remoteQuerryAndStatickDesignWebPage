class FacadColors{
    render(){
        const p = document.createElement('p');
        p.classList.add('colorsLabel');
        p.textContent = 'Цвета фасадов:';

        const colorsSection = document.createElement('section');
        colorsSection.classList.add('colors-section');

        for (let i = 0; i < 7; i++) {
            const element = document.createElement('div');
            element.addEventListener('click', (e)=>{
                for (let i = 0; i < 7; i++) {
                    e.target.parentElement.children[i].className ='unselectedColor';                  
                }
                e.target.className ='selectedColor';
            })
            colorsSection.append(element);
        }

        const sectionWrapper = document.createElement('section');
        sectionWrapper.append(p);
        sectionWrapper.append(colorsSection);
        return sectionWrapper;
    }
}