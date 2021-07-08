/*exercise1*/

function multTwoNumbers () {
    const p = document.querySelector('#multiplyNumber')
    p.innerHTML = Number(3*5)
}
multTwoNumbers ()


/*exercise2*/

function multNum () {
    const p = document.querySelector('#multiplyNumberSecond')
    return p.innerHTML = 3*3
}
const f = multNum ()


/*exercise3*/

function multiply3 (x, y) {
    const p = document.querySelector('#exercise3')
    return p.innerHTML = x*y
}
const ex3 = multiply3 (5, 5)


/*exercise4*/

function triangle (x, y, z) {
    const p = document.querySelector('#exercise4')
        if (x === y && x === z) {
            return p.innerHTML = "It is an equilateral triangle."
        }
        else if (x === y || x === z || y === z) {
            return p.innerHTML = "It is an isosceles triangle."
        }
        else {
            return p.innerHTML = "It is an scalene triangle."
        }
}
const ex4 = triangle (2, 1, 3)


/*exercise5*/

function exchange (x) {
    const p = document.querySelector('#exercise5')
    var xNew = x.replace(/a/g, 1)
    p.innerHTML = xNew
}
const ex5 = exchange ("Fratata")
/*why did searching the array x with for(){if()}...not work?*/


/*exercise6*/

function countAndSmallest (x) {
    const p = document.querySelector('#exercise6')
    x.sort(function(a, b) {
        return a-b
    })
    var f1f2 = [x.length, x[0]]
    return p.innerHTML = f1f2
}   
const ex6 = countAndSmallest ([8, 34, 23, 1, 455, 234, 2])
/*look again at   sort(a, b){return a-b})   functionality for 
sorting numbers in ascending order although being strings in an 
array: 
When comparing 40 and 100, the sort() method calls the compare function(40,100).
The function calculates 40-100, and returns -60 (a negative value).
The sort function will sort 40 as a value lower than 100.*/



/*exercise7*/

function addEvenNo (x) {
    const p = document.querySelector('#exercise7')
    let sum = 0
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 == 0) {
            sum += x[i]
        }
    } return p.innerHTML = sum
}
const ex7 = addEvenNo ([1, 2, 8, 3, 2 ])



/*exercise8*/

function addEvenIndexPos (x) {
    const p = document.querySelector('#exercise8')
    let sum = 0
    for (var i = 0; i < x.length; i += 2) {
            sum += x[i]
    } return p.innerHTML = sum
}
const ex8 = addEvenIndexPos ([1, 2, 8, 3, 2, 3, 4])


/*exercise9*/

function evenNumBelowPar (x) {
    const p = document.querySelector('#exercise9')
    var evenNum = []
    for (var i = 0; i < x; i +=2) {
        evenNum.push(i)
    }
    return p.innerHTML = evenNum
}
const ex9 = evenNumBelowPar ([9])


/*exercise10*/

function oddNumBetweenNum (x, y) {
    const p = document.querySelector('#exercise10')
    var oddNum = []
    for (var i = x; i < y; i++) {
        if (i % 2 != 0) {
            oddNum.push(i)
        }
    } return p.innerHTML = oddNum
}
const ex10 = oddNumBetweenNum (4, 15)