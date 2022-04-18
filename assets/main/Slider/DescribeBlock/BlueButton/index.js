class BlueButton{
    constructor(text){
        this.text = text;
    }
    render(){
        const button = document.createElement('button');
        button.classList.add('blue-button');
        button.textContent = this.text;
        return button;
    }
}