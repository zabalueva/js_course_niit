"use strict";
  
/* let isSquare = function sq(n) {
    let square = false;
    if (n == 0 || n == 1) {
            return true;
        } else {
            for (let i = 1; i <= n/2; i++) {
                let result = n / i;
                if (result == i) {
                    return square = true;
                }
            }
    }
    return square;
}

console.log(isSquare(76)); */


//false
//""
//0

//undefined
//null

console.log("undefined == undefined", undefined == undefined);//true
console.log("undefined === undefined", undefined === undefined);//true
console.log("null == undefined", null == undefined);//true
console.log("null === undefined", null === undefined);//false
console.log("null == 0", null == 0);//false 
console.log("null === 0", null === 0);//false
console.log("null == '0'", null == '0'); //false
console.log("null > '0'", null > '0');//false
console.log("null > 0", null > 0);//false
console.log("null >= 0", null >= 0);//false !!! true
console.log("null >= '0'", null >= '0');//false !!! true
console.log("undefined >= 0", undefined >= 0);//false
console.log("0 == false", 0 == false);//true
console.log("0 === false", 0 === false);// false
console.log("'' == false", '' == false);//true
console.log("'' === false", '' === false);//false
console.log("0 == ''", 0 == '');//true
console.log("0 === ''", 0 === '');//false
console.log("1 > false", 1 > false);//true
console.log("1 > ''", 1 > '');//true
console.log("1 > '0'", 1 > '0');//true
console.log("1 == true", 1 == true);//true
console.log("1 === true", 1 === true);//false
console.log("0 < true", 0 < true);//true
console.log("2 == 1 + true", 2 == 1 + true);//true
console.log("2 === 1 + true", 2 === 1 + true);//true
console.log("0 == 1*false", 0 == 1*false);//true
console.log("0 === 1*false", 0 === 1*false);//true
console.log("null == 1*false", null == 1*false);//false
console.log("null >= 1*false", null >= 1*false);//true
console.log("undefined == 1*false", undefined == 1*false);//false
console.log("undefined >= 1*false", undefined >= 1*false);//false
console.log("false == true - true", false == true - true);//true
console.log("false === true - true", false === true - true);//false
console.log("!undefined == !undefined", !undefined == !undefined);//true
console.log("!undefined === !undefined", !undefined === !undefined);//true
console.log("!undefined == !null", !undefined == !null);//true
console.log("!undefined === !null", !undefined === !null);//true
console.log("!undefined === !0", !undefined === !0);//true
console.log("!undefined === !'0'", !undefined === !'0');//true !!! false
console.log("!undefined === !''", !undefined === !'');//true
console.log("!undefined === !1", !undefined === !1);//false
console.log("!undefined === !'1'", !undefined === !'1');//false
console.log("!undefined >= 0", !undefined >= 0);//true
console.log("!false >= 0", !false >= 0);//true
console.log("1 == true? 1 : 0", 1 == true? 1 : 0);//1
console.log("null >= true? 0 : 1", null >= true? 0 : 1);//1
console.log("1 == (true? 1 : 0)", 1 == (true? 1 : 0));//true
console.log("null >= (true? 0 : 1)", null >= (true? 0 : 1));//true
console.log("null >= !(true? 1 : 0)", null >= !(true? 1 : 0));//true
console.log("false === !(true? 1 : 0)", false === !(true ? 1 : 0));//true


console.log(typeof null)
console.log("[object Object]" == {});//true при приведении объекта к типу строка получает оО

//49  строка и 47









