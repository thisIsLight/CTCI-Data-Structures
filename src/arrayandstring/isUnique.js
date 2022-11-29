//Implement an algorithm todetermine is a string has all unique character.
// Challenge : Don't use aditional data structure.


//Appraoch 1

const isUnique = (param) => {
    let map = {};
    for(let ch of param){
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

//Appraoch 2

const isUniqueWithoutObject = (param) => {
    let bitarray = []
    for(let ch in param){
        if(!bitarray[param.charCodeAt(ch)]){
            bitarray[param.charCodeAt(ch)] = 1
            console.log(bitarray)
        }
        else{
            console.log('not unique')
            return
        }
    }
    console.log('unique')
}