//There are three types of edits that can be performed on strings : insert, update, delete. Given two strings, check if they are one edit away to be similar.

const oneAway = (str1, str2) => {
    let i=0;
    let j=0
    let unmatched = 0
    if(str1.length - str2.length > 1 || str2.length - str1.length > 1  ){
        console.log(false)
        return
    }
    while(i < str1.length && j < str2.length){
        if(str1[i] != str2[j]){
            unmatched++
            j++
            if(unmatched > 1){
                console.log(false)
                return
            }
        }
        else{
            i++;
            j++
        }
    }
    if(str1.length -i >= 1 && unmatched == 1){
        console.log(false)
        return
    }
    console.log(true)
}

oneAway('abcd', 'aabcd')