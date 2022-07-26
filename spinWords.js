function spinWords(string) {
    if (!string.includes(' ') && string.length >= 5) {
        return string.split('').reverse().join('');
    } if(string.length < 5) {
      return string;
    }
  
    return string.split(" ").map(el => el.length < 5 ? el : el.split('').reverse().join('')).join(' ');
}