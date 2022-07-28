function duplicateCount(text) {
    const sortedChars = text.toLowerCase().split('').sort();
    const chars = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));
    let count = 0;
    for (const c of chars) {
        if (sortedChars.filter(item => item === c).length > 1) {
            count++;
        }
    }
    return count;
}