class UserToolItem{
    constructor(options){
        this.options =options;
    }
    render(){
        const div = document.createElement('div');
        div.classList.add('small-img-item');
        const img = document.createElement('img');
        img.src = this.options.pictureSrc;
        img.alt = this.options.pictreAlt;

        div.append(img);
        return div;
    }
}