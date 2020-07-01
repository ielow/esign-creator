class App {
    constructor(){
        this.params = new URLSearchParams(location.search);
        this.init();
    }
    init(){
        this.change(['name','position','email','mobile']);
    }
    change(attrs){
        attrs.forEach(attr=>{
            const elmName = document.getElementById(attr);
            const value = this.params.get(attr);
            elmName.innerHTML = this.params.get(attr);
            switch(attr){
                case 'email':
                    elmName.setAttribute('href',`mailto:${value}`)
                    break;
                case 'mobile':
                    const mm= document.getElementById('show-m');
                    mm.innerHTML = (value) ? 'M' : '';
                    elmName.setAttribute('href',`tel:${value}`)
                    break;
            }
        });        
    }

}

new App();