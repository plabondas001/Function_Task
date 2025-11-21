function make_avg(arr){
    let sum = 0;
    for(let number of arr){
        sum+= number;
    }
    return sum / arr.length;
    
}

let arr = [5,8,3,4,2];
console.log(make_avg(arr));
