//Implement an algorithm todetermine is a string has all unique character.
// Challenge : Don't use aditional data structure.


//Approach 1

const isUnique = (param) => {
    let map = {};
    for(let ch in param){
        if(!map[ch]){
            map[ch] = 1
        }
        else{
            console.log('Not unique')
            return;
        }
    }
    console.log('unique');
}

isUnique(abcdef);