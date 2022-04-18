class Catalog{


    render(){
       
        const catalog = document.createElement('section');
        catalog.classList.add('catalog');

        fetch("https://raw.githubusercontent.com/fd-freshjs/serve-json/main/mebel.json").then(responce=>{
            return responce.json();}).then(response=>{
                for (let i = 0; i < response.data.length; i++) {
                 const element = {
                     name:response.data[i].name,
                     sale:response.data[i].sale,
                     oldPrice:response.data[i].price.old,
                     currentPrice:response.data[i].price.current,
                     pngCode:response.data[i].code
                 }
                    const item = new CatalogItem(element);
                    catalog.append(item.render());
                }

            })
        
        return catalog;
    }
}