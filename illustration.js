// Illustration 1
var Collection = /** @class */ (function () {
    function Collection() {
        this._things = [];
    }
    Collection.prototype.add = function (something) {
        this._things.push(something);
    };
    Collection.prototype.get = function (index) {
        return this._things[index];
    };
    return Collection;
}());
var Stringss = new Collection();
Stringss.add(001);
Stringss.add('world');
console.log(Stringss.get(0).substr(0, 1));
//# sourceMappingURL=illustration.js.map