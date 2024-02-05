function sum_Pairs(arr, sum) {
    let answer = [];
    for(let i=0; i < arr.length;i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == sum){
                answer.push([arr[i], arr[j]]);
            }
        }

    }

    if (answer.length === 0) {
        console.log('unable to find pairs');
    }
    console.log(answer); 
}

sum_Pairs([1,2,3,4,5], 9) //[[4,5]]
sum_Pairs([1,2,3,4,5], 7) //[[2,5], [3,4]]
sum_Pairs([3, 1, 5, 8, 2], 27) //'unable to find pairs'