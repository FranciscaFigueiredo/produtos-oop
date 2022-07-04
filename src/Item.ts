export default class Item {
    public category: string;
    public description: string;
    public price: number;

    constructor(category: string, description: string, price: number){
        this.category = category;
        this.description = description;
        this.price = price
    }
}

export class Beer extends Item {
    public tax: number;

    constructor(description: string, price: number) {
        super('Beer', description, price);
        this.tax = 0.2;
    }
}

export class Cigar extends Item {
    public tax: number;
    
    constructor(description: string, price: number) {
        super('Cigar', description, price);
        this.tax = 0.25;
    }
}

export class Eletronics extends Item {
    public tax: number;
    
    constructor(description: string, price: number) {
        super('Eletronics', description, price);
        this.tax = 0.3;
    }
}

export class Water extends Item {
    public tax: number;
    
    constructor(description: string, price: number) {
        super('Water', description, price);
        this.tax = 0;
    }
}