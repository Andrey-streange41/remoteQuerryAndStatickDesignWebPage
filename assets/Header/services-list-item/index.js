class ServListitem{
    constructor(options){
        this.options = options;
    }
    render(){
        const li = document.createElement('li')
        li.classList.add('services-lst-item');
        const a = document.createElement('a');
        a.classList.add('servis-link');
        a.textContent = this.options;
        li.append(a);
        return li;
    }
}