function make_avg(arr){
    let sum = 0;
    for(let number of arr){
        sum+= number;
    }
    return sum / arr.length;
    
}

let arr = [5,8,3,4,2];
console.log(make_avg(arr));



console.log('-------------');


function mult(number){
    let multiply = 1;
    for(let numbers of number){
        multiply*= numbers;
    }
    let result = multiply / number.length;
    return result;
    
    
}


let multiply = [8,9,7,3,5];
console.log(mult(multiply));
