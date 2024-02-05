// For this challenge you will make a program that takes in two different strings and see if the invidual letter or number characters in a string match in both strings. 
// For example, 'abcde2' can be rearranged to 'c2abed'.

function is_anagram(string1, string2) {
    let arr1 = string1.split('')
    let arr2 = string2.split('')

    for(let char in arr1) {
        if(char in arr2){
        }
    }
}

is_anagram('charm', 'march')
is_anagram('CharM', 'mARcH')
is_anagram('abcde2', 'c2abed')