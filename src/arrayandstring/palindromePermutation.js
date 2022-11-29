//Given a string, write a function to check if it is a permutaiton of a palindrome.

const palindromePermutation = (str) => {

    let len = 0
    for(let ch of str){
        if(ch != ' '){
            len++
        }
    }
    console.log(len)
    let map = {}
    for(let ch of str){
        if(ch != ' '){
            if(!map[ch]){
                map[ch] = 1
            }
            else{
                map[ch]++
            }
        }
    }
    console.log(map)
    let evencount = 0
    let oddcount = 0
    for(let item in map){
        if(map[item]%2 != 0){
            oddcount++
        }
        else{
            evencount++
        }
    }
    console.log(oddcount,evencount)
    if(len%2 == 0 && oddcount > 0){
        console.log(false)
        return
    }
    else if(len%2 != 0 && oddcount != 1){
        console.log(false)
        return
    }
    else{
        console.log(true)
    }
}

palindromePermutation('abc ca       ccccccx')
