function generatePassword() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialCharacters = "!@#$%^&*()_+";

    let characters = letters + numbers;  

    if (document.getElementById("specialChars").checked) {
        characters += specialCharacters;
    }

    let password = "";
    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("passwordOutput").textContent = password;
}