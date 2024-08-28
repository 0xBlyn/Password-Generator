function generatePassword(length, strength) {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{};:,.<>?';
  
    let characters = '';
    let requiredCharacters = [];

    switch (strength) {
        case 'low':
            characters = lowercaseLetters;
            break;
        case 'medium':
            characters = lowercaseLetters + uppercaseLetters + numbers;
            requiredCharacters.push(
                lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length)),
                uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length)),
                numbers.charAt(Math.floor(Math.random() * numbers.length))
            );
            break;
        case 'high':
            characters = lowercaseLetters + uppercaseLetters + numbers + specialCharacters;
            requiredCharacters.push(
                lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length)),
                uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length)),
                numbers.charAt(Math.floor(Math.random() * numbers.length)),
                specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
            );
            break;
        default:
            throw new Error('Invalid strength level');
    }

    if (length < 8) {
        throw new Error('Invalid length');
    }

    let password = requiredCharacters.join('');

    // Generate the remaining characters
    for (let i = password.length; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Shuffle the password to ensure required characters are randomly distributed
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    return password;
}

module.exports = generatePassword;
