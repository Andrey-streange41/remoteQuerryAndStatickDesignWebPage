class StarsContainer{

    render(){
        const starsContainer = document.createElement('section');
        starsContainer.classList.add('stars-container');

        for (let i = 0; i < 5; i++) {
            const element = document.createElement('img');
            element.src = 'assets/Images/StarFill.png'
            if(i===4)
                element.src = 'assets/Images/StarEmpty.png';
            starsContainer.append(element);
        }
        return starsContainer;
    }
}