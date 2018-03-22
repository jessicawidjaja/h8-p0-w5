function cariPelaku(str) {
    let finalStr = '';
    let newStr = str.match(/abc/g);

    let result = newStr.toString();

    for (let i=0; i<newStr.length; i++) {
        if (newStr[i] !== ',') {
            finalStr += newStr[i];
        }
    }

    let count = 0;
    for (let j=0; j<finalStr.length; j++) {
        // console.log('j ---- > '+finalStr[j]);
        if (finalStr[j] === 'a') {
            for (let k=j+1; k<finalStr.length; k++) {
              // console.log('k -- > '+finalStr[k]);
                if (finalStr[k] === 'b') {
                    for (let l=k+1; l<finalStr.length; l++) {
                        // console.log('l - > '+finalStr[l]);
                        if (finalStr[l] === 'c') {
                            count += 1;
                            break;
                        }
                    }
                    break;
                }
            }
        }
    }

    return count;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2