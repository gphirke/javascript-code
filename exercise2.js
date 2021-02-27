// write the function to resverse words without using any in built method

function reverseSent(sent){
    var revSen = ""; let word = "";
    for(let i=sent.length-1; i>=0; i--){
        if(sent.charAt(i) == " ") {
            revSen = " " + word + revSen;
            word = ""
        } else {
          word = word + sent.charAt(i);  
        }
    }
    return word + revSen;
}

console.log(reverseSent("Reverse the words of this sentence"));
