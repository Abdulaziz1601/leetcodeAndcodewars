function rot13(message) {
    let sum = [];
    for (let i = 0; i < message.length; i++) {
        if (
            (message.charCodeAt(i) >= 0 && message.charCodeAt(i) <= 64) ||
            (message.charCodeAt(i) >= 91 && message.charCodeAt(i) <= 96) ||
            (message.charCodeAt(i) >= 123 && message.charCodeAt(i) <= 127)
        ) {
            sum.push(message.charCodeAt(i));
        } else {
            if (message.charCodeAt(i) >= 97) {
                sum.push(
                    message.charCodeAt(i) + 13 > 122
                        ? message.charCodeAt(i) + 13 - 26
                        : message.charCodeAt(i) + 13
                );
            } else {
                sum.push(
                    message.charCodeAt(i) + 13 > 90
                        ? message.charCodeAt(i) + 13 - 26
                        : message.charCodeAt(i) + 13
                );
            }
        }
    }
    console.log(String.fromCharCode(...sum));
    return String.fromCharCode(...sum);
}

rot13("Te*!!@#$%^&*()_+?><{}st");
