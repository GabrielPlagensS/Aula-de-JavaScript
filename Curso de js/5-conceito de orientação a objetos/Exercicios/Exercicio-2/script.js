class carrinho{
    constructor(itens, qtd, valorTotal){
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }
    addItem(item){
        for(let itemCArrinho in tais.item){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
            }
        }

        if(contador == 0){
           this.itens.pudh(item)
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item
    }

    removeItem(item){
        for(let itemCarrinho in this.item){
            if(this.itens[itemCarrinho].id == item.id){
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj)) {return obj.id == item.id};
                
                this.qtd -= item.itens[itemCarrinho].qtd;
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

                this.itens.splice(indes,1);
            }
        }
    }  
}

let carrinho = new carrinho([
    {
        id: 01,
        nome: "camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome:"calça",
        qtd: 2,
        preco:50
    }
], 3, 120);

console.log(carrinho);

carrinho.addItem({id:01, nome:"Camisa", qtd:2, preco:20});

console.log(carrinho);

carrinho.addItem({id:03, nome:"Boné", qtd:1, preco:15});

console.log(carrinho);

carrinho.removeItem({id:01, nome: "Camisa", qtd: 1, preco:20});

console.log(carrinho);