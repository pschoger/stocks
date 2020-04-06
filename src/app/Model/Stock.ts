export class Stock{
    
    constructor(
        private name:string,
        private description:string,
        private price?:Map<number, number>
    ) {}

    get Name() {return this.name;}
    // set Name(v:string) {this.name = v;}

    get Description() {return this.description;}
    // set Description(v:string) {this.description = v;}

    
    get Price() : Map<number, number> {return this.price; }
    // set Price(v : Map<number, number>) {this.price = v; }
 
}