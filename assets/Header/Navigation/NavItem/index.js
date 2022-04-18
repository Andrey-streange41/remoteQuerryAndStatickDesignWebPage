class NavItem{
    constructor(text){
this.text= text;
    }
    render(){
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.classList.add('nav-item');
        a.textContent = this.text;
        li.append(a);
        return li;
    }
}