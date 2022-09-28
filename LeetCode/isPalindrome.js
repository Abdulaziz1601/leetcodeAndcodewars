/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
    const validStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = validStr.split('').reverse().join('');
    console.log(validStr, reversedStr);
    return validStr === reversedStr;
}


isPalindrome("A man, a plan, a canal: Panama");
