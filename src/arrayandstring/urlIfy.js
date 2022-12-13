//Write a method to to replace all the spaces in a string with %20. You may assume that the string has sufficient space at the end of the string and you are given true length of the string.

const URLify = (str, len) => {
    let endind = len-1
    let curind = len-1
    let runind = len-1

    while(curind > 1){
        if(str[curind] == ' '){
            curind--
            runind--
        }
        else{
            while(str[curind] != ' '){
                curind--
            }
            while(runind != curind){
                str[endind] = str[runind]
                endind--
                runind--
            }
            str[endind--] = '0'
            str[endind--] = '2'
            str[endind--] = '%'
        }
    }
    console.log(str)
}

URLify(['i', ' ', 'a', 'm', ' ', 'm', 'a', 'n', ' ', ' ', ' ', ' '], 12)