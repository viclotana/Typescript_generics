// Illustration 1
class Collection <T>{
    private _things:T[];
    constructor(){
     this._things = [];
    }
    add(something:T):void{
     this._things.push(something);
    }
    get(index:number):T{
     return this._things[index];
     }
    } 
   let Stringss = new Collection<String>();
   Stringss.add(001);
   Stringss.add('world');
   console.log(Stringss.get(0).substr(0,1));