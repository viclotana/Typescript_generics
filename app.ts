
interface NameArgs {
    length: number;
}

function printName <T extends NameArgs>(arg: T){
    console.log(arg.length);
    return arg;
}
printName({length: 3, value: 3});
