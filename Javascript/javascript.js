
//calculates the gst of an amount
function calculateGST(){
    var initalValue = document.GSTForm.GSTInput.value; //get the number from the textbox
    var output = document.getElementById("GSTAnswerLabel"); //set the output
    if(initalValue == isNaN || initalValue > 0){
        output.innerHTML = "The GST for " + initalValue + " is " + initalValue * 0.15;
    }else{
        output.innerHTML = "Please enter a valid value";
    }
    
}

//checks if a string has a vowel in it
function isVowel(){
    var vowels = ["a", "e", "i", "o", "u"];
    var isVowel = false; //bool for setting if a letter is a vowel
    var userString = document.vowelsForm.vowelInput.value; //will be set from the element on the webpage
    var output = document.getElementById("vowelAnswerLabel");
    //validating user input
    if(userString != "" && isNaN(userString)){
        for(var i = 0; i < userString.length; i++){
            vowels.forEach(element => {
                if(element.toUpperCase() == userString[i].toUpperCase()){
                    isVowel = true;
                }
            });
        }
    
        if(isVowel == true){
            output.innerHTML = "Yes '" + userString + "' is a vowel"; //set to the element on the webpage
        }else{
            output.innerHTML = "No '" + userString + "' is not a vowel";
        }
    }else{
        output.innerHTML = "Please Enter the correct value";
    }
    
    
}

function checkDisplayImg(){
    //Check if check box is checked
    var checked = document.showHideForm.imgCheckBox.checked;
    var img = document.showHideForm.checkBoxImg;
    if(checked == true){
        img.style.display = "block";
    }else{
        img.style.display = "none";
    }
}