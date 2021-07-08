/*writing expressions with variables*/


console.log("Starting javascript")

var myName = "Nadine"
console.log(myName)

var age = 31
console.log(age)

var juliaAge = 32
var ageDiff = age - juliaAge
console.log(ageDiff)

if (age > 21) {
    console.log("You are older than 21")
}
else {
    console.log("You are not older than 21")
}

if (age > juliaAge) {
    console.log("Julia is younger than you")
}
else if (age == juliaAge) {
    console.log("You have the same age as Julia")
}
else {
    console.log("Julia is older than you")
}


/*sorting an array*/

var courseNames = ["Ottavia", "Lucas", "Jost", "Mazen", "Sarah", "Obaida", "Fabian", "Nadine", "Raul", "Sosan"]
courseNames.sort()
console.log(courseNames[0])
courseNames.reverse()
console.log(courseNames[0])

for (var i = 0; i < courseNames.length; i++) {
    console.log(courseNames[i])
}


/*looping over an array*/

var courseAges = [26, 34, 25, 31, 30, 38, 22, 27, 33, 23]
var i = -1

while (i < courseAges.length) {
    i++
    if (courseAges[i] % 2 == 0) {
    console.log(courseAges[i])
    }
}

for (var i = 0; i < courseAges.length; i++) {
    if (courseAges[i] % 2 == 0) {
    console.log(courseAges[i])
    }
}


/*functions that use arrays*/

var randomNumbers = [20, 3, 45, 65, 8, 99]
var min = Math.min.apply(Math, randomNumbers) 
console.log(min)
var max = Math.max.apply(Math, randomNumbers)
console.log(max)

var array = [3, 6, 67, 6, 23, 11, 100, 8, 93]
var index = 1
console.log(array[index])

console.log("break")



/*very important exercise*/

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]
var duplicateArray = []
array.forEach(argument => {
    if (duplicateArray.includes(argument)) {
        console.log(argument)
    }
    else {
        duplicateArray.push(argument)
    }
} 
) /*creates an array without duplicates*/

/*second solution to exercise above:*/

var arr = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]

function duplicateArr (x) {
    var duplicateArr = []
    for (var i = 0; i < x.length; i++) {
        for (var j = i + 1; j < x.length; j++) {
            if (x[i] === x[j]) {
                if (duplicateArr.indexOf(x[i]) ===-1) {
                    duplicateArr.push(x[j])
                }
            }
        }
    } return duplicateArr
} 
console.log(duplicateArr(arr))


/*third solution to exercise above*/

var arr = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]

const findDuplicate = (arr) => {
    let counts = {}
    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]]) {
            counts[arr[i]] += 1
        } else counts[arr[i]] = 1
    }
    for (let el in counts) {
        if (counts[el] >= 2) {
            console.log(el)
        }
    }
    console.log('counts', counts)
}






var myColor = ["Red", "Green", "White", "Black"]
console.log('"' + myColor.join('","') + '"')


/*JavaScript String*/

function reversedNo(x) {
    return (
    (x.toString().split('').reverse().join(''))
    *Math.sign(x) /*turns it back into proper number type*/
    )
}
console.log(reversedNo(32443))


function sortedString(x) {
    return (
        (x.split('').sort().join(''))
    )
}
console.log("'" + sortedString('webmaster') + "'")



function uppercase(x) {
    var string = x.split(' ')
    for (var i = 0; i < string.length; i++) {
       string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1)
    }
    return string.join(' ')
    
}
console.log(uppercase("prince of persia"))


/*exercise 4*/
function longestWord(x) {
    var separateWords = x.split(' ')
    var maxLength = 0
    for (var i = 0; i < separateWords.length; i++) {
        if (separateWords[i].length > maxLength) {
            maxLength = separateWords[i].length
            if (separateWords[i].length == maxLength) {
                var longest = separateWords[i]
            }
        }
    }
    return longest
}
console.log(longestWord("Web Development Tutorial"))






