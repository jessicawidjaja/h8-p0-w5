function hapusSimbol(str) {
    // e("[^a-zA-Z0-9]+")
    let finalStr = '';
    let newStr = str.match(/[a-z0-9]+/gi);

    let result = newStr.toString();

    for (let i=0; i<newStr.length; i++) {
        if (newStr[i] !== ',') {
            finalStr += newStr[i];
        }
    }

    return finalStr;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100