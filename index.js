const route1 = [2.1, 3.5, 0.3, 5.2]

function kilometerToMile(km) {
    return km / 1.6
}


function routeInMiles(route) {
    // rewrite ...
    return route.map(kilometerToMile);

    //   const res = []
    //   for (let i = 0; i < route.length; i++) { // iterate
    //     const mile = kilometerToMile(route[i]) // ? ..., ? ...
    //     res[i] = mile                        // keep
    //   }
    //   return res
}

// test
console.log(JSON.stringify(routeInMiles(route1)))

function longStretches(route) {
    // rewrite ...
    return route.filter(r => r > 2);

    //   const res = []
    //   for (let i = 0; i < route.length; i++) { // iterate
    //     let stretch = route[i]               // ? ...
    //     if (stretch > 2) {                   // check
    //       res.push(stretch)                // keep
    //     }
    //   }
    //   return res
}

// test
console.log(JSON.stringify(longStretches(route1)))


function total(route) {
    // rewrite ...
    return route.reduce((acm, currentValue) => acm + currentValue);

    //   let res = 0
    //   for (let i = 0; i < route.length; i++) { // iterate
    //     res += route[i]                      // ? ..., ? ...
    //   }
    //   return res
}

// test
console.log(total(route1) === 11.1)

function avarageStretch(route) {
    let res = 0;
    for (let index = 0; index < route.length; index++) {
        res += route[index];
    }
    console.log(res);
    res = res / route.length;
    return res;
}
console.log(avarageStretch(route1));


const grades1 = [9, 5.5, 6, 7.3]

function toAmericanGrade(grade) {

    // hint: you can use if ( *conditional* ) return 'A'; etc.
    if (grade >= 9) {
        return 'A';
    }
    if (grade >= 8) {
        return 'B';
    }
    if (grade >= 7) {
        return 'C';
    }
    if (grade >= 6) {
        return 'D';
    }
    return 'F';

}

function toAmericanGrades(grades) {
    return grades.map(toAmericanGrade);
}

function avarageAmericanGrade(grades) {

    return toAmericanGrade(grades.reduce((acc, currentVal) => acc + currentVal, 0) / grades.length);

}

console.log(avarageAmericanGrade(grades1));

let A = {
    name: {
        first: "Kelly"
    },
    age: 26
}

let copyOfA = Object.assign({}, A);

//Kelly did it on the board
// function ispal(str) {
//     if (str.length <= 1) {
//         return true;
//     } else {
//         if (str[0] !== str[str.length] - 1) {
//             console.log(str[0], str[str.length - 1]);
//             return false;
//         } else {
//             console.log("Buraya dustu");
//             return ispal(str.splice(1, -1));
//         }
//     }
// }

//Polindrom exmp.
function palindrome(word) {
    // A zero-length word is a palindrome
    if (word.length === 0) {
        return true
    }
    console.log(word[0] === word[word.length] - 1);
    console.log(palindrome(word.slice(1, -1)));
    return word[0] === word[word.length - 1] && palindrome(word.slice(1, -1))
}
console.log(palindrome("racecar"));

//console.log(ispal("racecar"));

