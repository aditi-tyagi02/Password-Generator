const characters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generate(){
    let n=characters.length
    let s=" "
    
    for (let i = 0; i < 15; i++) {
        let k = Math.floor(Math.random() * n);
        s += characters[k];
    }
    let t=document.getElementById("pass")
    t.textContent=s
    
}

function copyToClipboard() {
    let passwordText = document.getElementById("pass").innerText;
    let tempInput = document.createElement("input");
    tempInput.value = passwordText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Password copied to clipboard: " + passwordText);
}

