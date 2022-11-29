//Given Two strings, write a method to decide if one is a permutation of another

const checkPermutation = (param1, param2) => {
    if(param1.length != param2.length){
        console.log('false')
        return
    }
    else{
        let map = {}
        for(let ch of param1){
            if(!map[ch]){
                map[ch] = 1
            }
            else{
                map[ch]++
            }
        }
        
        for(let ch of param2){
            if(map[ch]){
                if(map[ch] == 0){
                    console.log('fasle')
                }
                else{
                    map[ch]--
                }
            }
            else{
                console.log(false)
                return
            }
        }
    }
    console.log(true)
}
