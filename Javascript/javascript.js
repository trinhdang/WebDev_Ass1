
//
function calculateGST(){
    var initalValue; //get the number from the textbox
    if(initalValue == isNaN || initalValue > 0){
        var finalValue = initalValue + (initalValue * 0.15);
        return finalValue; //need to be set to the element on webpage
    }
    return -100;  
}

//checks if a string has a vowel in it
function isVowels(){
    var vowels = ["a", "e", "i", "o", "u"];
    var userString; //will be set from the element on the webpage
    for(var i = 0; i < userString.length; i++){
        vowels.forEach(element => {
            if(element == userString[i]){
                return true; //set to the element on the webpage
            }
        });
    }

    return false;
}