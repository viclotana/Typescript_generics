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
var Collection1 = /** @class */ (function () {
    function Collection1() {
        this._things = [];
    }
    Collection1.prototype.add = function (something) {
        this._things.push(something);
    };
    Collection1.prototype.get = function (index) {
        return this._things[index];
    };
    return Collection1;
}());
var Stringsss = new Collection1();
Stringsss.add('hello');
Stringsss.add('world');
//# sourceMappingURL=illustration2.js.map