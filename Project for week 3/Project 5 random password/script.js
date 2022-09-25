function genPass(){

    let passLen = document.getElementById("len").value;
    if( Number(passLen) === 0 )
    {
        alert("Please input valid length");
        return;
    }

    let allStr = "";
    let allLetters = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
    
    if(document.getElementById("uppercase").checked)
        allStr += allLetters;
    if(document.getElementById("lowercase").checked)
        allStr += allLetters.toLocaleLowerCase();
    if(document.getElementById("numbers").checked)
        allStr += "0123456789";
    if(document.getElementById("symbols").checked)
        allStr += "`~!@#$%^&*()_+=-{}[]|\\';:\"<,>.?/";

    if(allStr.length === 0)
    {
        alert("Please select an option!");
        return;
    }
    

    let generatedPassword = generateRandomSubstring(allStr, passLen);
    document.getElementById("genPass").innerHTML = generatedPassword;
}

function generateRandomSubstring(allStr, length) {
    let ans = "";

    for(let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * allStr.length);
        ans += allStr[index];
    }

    return ans;
}

// function validateInput(){
//     let passLen = document.getElementById("len").value;
    
//     if( Number(passLen) === 0 )
//         alert("Please input valid length");
    
    
// }