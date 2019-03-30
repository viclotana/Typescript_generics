//console.log("hello worl");

// class Collection{
//     private _things:any[];

//     constructor(){
//         this._things = [];
//     }

//     add<A>(something:A):void{
//         this._things.push(something);
//     }

//     get<B>(index:number):B{
//         return this._things[index];
//     }
// }

// let Stringss = new Collection();
// Stringss.add<string>('hello'); 
// Stringss.add('world');

interface NameArgs {
    length: number;
}

function printName <T extends NameArgs>(arg: T){
    console.log(arg.length);
    return arg;
}
printName({length: 3, value: 3});

// console.log(Stringss.get<string>(0).length);