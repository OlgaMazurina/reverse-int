module.exports = function reverse(n) {
    let s = n.toString();
    let str = "";

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == "-") {
            continue;
        }
        str += s[i];
    }
    return +str;
};
