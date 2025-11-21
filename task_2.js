function num(number){
    if(number % 2 != 0){
        let result = number * 2;
        return result;
    }
    else if(number % 2 == 0){
        let result = number / 2;
        return result;
    }
}


let output = num(5);
let result = num(8);

console.log(output);
console.log(result);

