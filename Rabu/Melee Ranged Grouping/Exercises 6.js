function meleeRangedGrouping (str) {
    let result = [];

    if (str.length === 0) {
        return result;
    }

    let splittedStr = str.split(',');
   

    let splitted = [];
    for (let i=0; i<splittedStr.length; i++) {
        splitted.push(splittedStr[i].split('-'));
    }
    let listMeleeType = [];

    for (let j=0; j<splitted.length; j++) {
        let meleeType = splitted[j][1];
        let match = false;

        if (listMeleeType.includes(meleeType) === true) {
            match =true;
        }

        if (match === false) {
            listMeleeType.push(meleeType);
        }
    }

    for (let k=0; k<listMeleeType.length; k++) {
        
        var tempArr = [];
        for (let l=0; l<splitted.length; l++) {
            if (listMeleeType[k] === splitted[l][1]) {
                let meleeName = splitted[l][0]
                tempArr.push(meleeName);
            }
        }

      result.push(tempArr);
    }

    return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []