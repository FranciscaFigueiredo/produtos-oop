import Item from "./Item";

export default class TaxItem extends Item {
    // public category: string;
    // public description: string;
    // public price: number;

    constructor(tax: number){
        super()
        this.tax = tax;
    }
}