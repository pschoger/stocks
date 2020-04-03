export class Stock{
    
    constructor(
        private name:string,
        private description:string,
        private price?:Map<Date, number>
    ) {}

    get Name() {return this.name;}
    // set Name(v:string) {this.name = v;}

    get Description() {return this.description;}
    // set Description(v:string) {this.description = v;}

    
    get Price() : Map<Date, number> {return this.price; }
    // set Price(v : Map<Date, number>) {this.price = v; }
    
}