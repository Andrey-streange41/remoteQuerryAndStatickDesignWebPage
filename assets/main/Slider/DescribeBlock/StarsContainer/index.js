class StarsContainer{

    render(){
        const starsContainer = document.createElement('section');
        starsContainer.classList.add('stars-container');

        for (let i = 0; i < 5; i++) {
            const element = document.createElement('img');
            element.id = 'star:' + i;
            element.addEventListener('click',(e)=>
            {
                console.log(e.target.id)
                if(e.target.id === 'star:0')
                {
                    for (let i = 0; i < e.target.parentElement.children.length; i++) {
                        
                        e.target.parentElement.children[i].src= 'assets/Images/StarEmpty.png';
                    }
                    e.target.parentElement.children[0].src ='assets/Images/StarFill.png';
                }
                if(e.target.id === 'star:1')
                {
                    for (let i = 0; i < e.target.parentElement.children.length; i++) {
                        
                        e.target.parentElement.children[i].src= 'assets/Images/StarEmpty.png';
                    }
                    e.target.parentElement.children[0].src ='assets/Images/StarFill.png';
                    e.target.parentElement.children[1].src ='assets/Images/StarFill.png';
                }
                if(e.target.id === 'star:2')
                {
                    for (let i = 0; i < e.target.parentElement.children.length; i++) {
                        
                        e.target.parentElement.children[i].src= 'assets/Images/StarEmpty.png';
                    }
                    e.target.parentElement.children[0].src ='assets/Images/StarFill.png';
                    e.target.parentElement.children[1].src ='assets/Images/StarFill.png';
                    e.target.parentElement.children[2].src ='assets/Images/StarFill.png';
                }
                if(e.target.id === 'star:3')
                {
                    for (let i = 0; i < e.target.parentElement.children.length; i++) {
                        
                        e.target.parentElement.children[i].src= 'assets/Images/StarEmpty.png';
                    }
                    e.target.parentElement.children[0].src ='assets/Images/StarFill.png';
                    e.target.parentElement.children[1].src ='assets/Images/StarFill.png';
                    e.target.parentElement.children[2].src ='assets/Images/StarFill.png';
                    e.target.parentElement.children[3].src ='assets/Images/StarFill.png';
                }
                if(e.target.id === 'star:4')
                {
                    for (let i = 0; i < e.target.parentElement.children.length; i++) {
                        
                        e.target.parentElement.children[i].src= 'assets/Images/StarEmpty.png';
                    }
                    e.target.parentElement.children[0].src ='assets/Images/StarFill.png';
                    e.target.parentElement.children[1].src ='assets/Images/StarFill.png';
                    e.target.parentElement.children[2].src ='assets/Images/StarFill.png';
                    e.target.parentElement.children[3].src ='assets/Images/StarFill.png';
                    e.target.parentElement.children[4].src ='assets/Images/StarFill.png';
                }
            })
            element.src = 'assets/Images/StarFill.png'
            
            if(i===4)
                element.src = 'assets/Images/StarEmpty.png';
            starsContainer.append(element);
        }
        return starsContainer;
    }
}