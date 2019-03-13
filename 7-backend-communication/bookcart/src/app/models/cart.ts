export class Cart {
    items: Item[];
    totalPrice: number;

    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }
}

export class Item {
    constructor(public name: string,
        public price: number,
        public qty: number
    ) {

    }
}
