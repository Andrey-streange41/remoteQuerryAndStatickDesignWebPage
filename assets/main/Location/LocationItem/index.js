class LocationItem{
    constructor(text){
        this.text = text;
        
    }
    render(){
        const li = document.createElement('li');
        const a = document.createElement('a');
        const img = document.createElement('img');
        a.textContent = this.text;
        li.classList.add("curent-loc-item");
        li.append(a);
        img.src = './assets/Images/birdRightDir.png';
        img.alt= 'birdPicture';
        li.append(img);
        return li;
    }
}