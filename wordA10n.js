function abbreviate(str) {
    str = str.replace(/\-/g, " ");

    const foo = (str) => str.length >= 3 ? str[0] + str.split("").splice(1, str.length - 2).length + str[str.length - 1]: str;

    return str.split(" ").map(foo).join(' ');
}


console.log(abbreviate("hello"));
