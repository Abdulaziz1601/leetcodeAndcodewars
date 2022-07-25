function toCamelCase(str) {
    return str.includes('-') ?
        str.split("-").map((item, i) => i !== 0 ? [item.split('')[0].toUpperCase(), ...item.slice(1)].join('') : item).join('') :
        str.split("_").map((item, i) => i !== 0 ? [item.split('')[0].toUpperCase(), ...item.slice(1)].join('') : item).join('');
}

console.log(toCamelCase(''));