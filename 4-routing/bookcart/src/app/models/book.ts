export class Book {
    static count;
    public id: number;

    constructor(
        public title, 
        public author, 
        public price, 
        public rating) {
            Book.count = Book.count || 0;
            Book.count++;
            this.id = Book.count;
            console.log(this);
    }
}
