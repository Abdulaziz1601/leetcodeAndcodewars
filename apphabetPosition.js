const alphabetPosition = (text) => {
    const arr = "abcdefghijklmnopqrstuvwxyz".split("");
    return text.split("").map(el => (arr.findIndex((ch) => ch === el.toLowerCase()) + 1)).filter(el => el !== 0).join(" ")
}