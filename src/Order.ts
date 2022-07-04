import Item from './Item';

export default class Order {
    public items: any[];

    constructor() {
        this.items = []
    }
    addItem(item) {
        this.items.push(item)
    }

    getTotal() {
        let soma = 0;
        
        this.items.forEach((item) => soma += item.price);

        return soma;
    }

    getTaxes() {
        let tax = 0;

        this.items.forEach((item) => tax += item.price * item.tax);

        return tax;
    }
}