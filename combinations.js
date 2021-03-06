function combinations(str){
    var result = [];
    var len = str.length;
    var result = [];
    var currIndx = 0;
    while(currIndx < len){
        var temp = [str.charAt(currIndx)];
        
        for(let c of result) {
            temp.push(""+ c + str[currIndx]);   
        }

        result = result.concat(temp);
        currIndx++
    }
    return result;
}



console.log(combinations("abc"));  //op : ["a", "b", "ab", "c", "ac", "bc", "abc"]
