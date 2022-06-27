function digital_root(n) {
    while (n.toString().split('').length !== 1) {
        n = n.toString().split('').map(Number).reduce((x, y) => x + y).toString();
    }
    return n;
}

digital_root(123);