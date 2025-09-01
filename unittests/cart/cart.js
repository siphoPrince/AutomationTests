class cart{
    constructor(){
        this.items = [];
    }

    addItem(name, price, quantity = 1){
        if(quantity <= 0) throw new Error("Quantity can not be less then zero!");

        const existingItem = this.items.find((item) => item.name === name);
        if(existingItem){
            existingItem.quantity += quantity;
        } else{
            this.items.push({name, price, quantity});
        }
    }

    removeItem(name){
        this.items = this.items.filter((item) => item.name !== name);
    }

    getTotal(){
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    clear(){
        this.items = [];
    }
}

module.export = cart;