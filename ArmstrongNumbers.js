function Armstrong(num) {
    let sum = 0;
    let arr = num.toString().split('')
    let length = arr.length
        for(let num of arr){
            sum += Math.pow(parseInt(num), length) 
        }
    return num === sum
}



Armstrong(371)