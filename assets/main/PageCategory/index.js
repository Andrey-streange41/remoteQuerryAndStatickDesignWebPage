class PageCategory{
    render(){
        const section = document.createElement('section');
        section.classList.add('page-category');
        

        const ul = document.createElement('ul');
        ul.classList.add("page-category-ul");

        for (let i = 0; i < 5; i++) {
            const li = document.createElement('li');
            
            const a = document.createElement('a');
            a.addEventListener('click', (e)=>{
                
                for (let i = 0; i < 5; i++) {
                     console.log(e.target.parentElement.parentElement.children[i])
                     e.target.parentElement.parentElement.children[i].className = 'borderOff';
                }
                e.target.parentElement.className = 'underlineBorder';
                
            })
            if(i===0)
                a.textContent ='ДОСТУПНЫЕ МОДУЛИ';
            else if(i===1)
                a.textContent ='ВАРИАНТЫ СТОЛЕШНИЦ';
            else if(i===2)
                a.textContent ='ОТЗЫВЫ';  
            else if(i===3)
                a.textContent ='ОПИСАНИЕ'; 
            else if(i===4)
                a.textContent ='ОСТАВКА И ОПЛАТА';   

            li.append(a);
            ul.append(li);
        }
        
        const greyLine = document.createElement('p');
        greyLine.classList.add("greyLine");

        section.append(ul);
        section.append(greyLine);
        return section;
    }
}