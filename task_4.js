function odd_even(number){
    if(number % 2 == 0){
        return 'Even';
    }
    else{
        return "Odd";
    }
}


let output = odd_even(20);
let result = odd_even(21);
console.log(output);
console.log(result);

