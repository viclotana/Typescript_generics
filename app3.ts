// Illustration 2
// class Collection <T,K>{
//     private _things:K[];
//     constructor(){
//      this._things = [];
//     }
//     add(something:K):void{
//      this._things.push(something);
//     }
//     get(index:number):T{
//      console.log(index);
//     }
//   }

// Illustration 3
class Collection1{
    private _things:any[];
    constructor(){
     this._things = [];
    }
    add<A>(something:A):void{
     this._things.push(something);
    }
    get<B>(index:number):B{
     return this._things[index];
    }
}

let Stringsss = new Collection1();
Stringsss.add<string>('hello');
Stringsss.add('world');