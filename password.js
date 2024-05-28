let password = document.getElementById

function createPasswords(length = 8) {
    let password = "";
    const chars = "09283908HJHSfdsfdsgjkdshjkhsFJKD";
    let passwordLength = length;

    let array = new Uint32Array(length);
    window.crypto.getRandomValues(array);

    for (i=0; i<length; i++) {
        password += chars[array[i] % chars.length]
    }
    console.log(password);
    return password;
    
}

// createPasswords(5);  
// createPasswords(10);  
// createPasswords(11);  