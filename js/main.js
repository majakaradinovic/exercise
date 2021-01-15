
function bettween() {
    let x1 = 1;
    let x2 = 5;

    if(x2 < x1) {
        console.log(-1);
    }
    else {
        for(let i=x1; i<x2; i++) {
        console.log(x1);
        x1++;
    }
    }  
}

function multi() {
    for(let i = 1; i<=10; i++) {
    for(let y=1; y<=10; y++) {
        console.log(i*y);
    }
}
}

function multiples() {
    let sum=0;
   for(let i=0; i<500; i+=23) {
       console.log(i);
       sum+=i;
   }
   console.log(`SUMMM ${sum}`);
}

//1.5 smor

function maxOfThree(num1, num2, num3) {
    num1 = 6;
    num2 = 4;
    num3 = 1;
    if((num1 > num2) && (num1 > num3)) {
        return num1;
    } else if((num2 > num1) && (num2 > num3)) {
        return num2;
    }else {
        return num3;
    }
}

//1.7 hell no

//1.8 idk rgb

//=================================

//2.1 meh idk


function sumNmul() {
    let niz = [1, 2, 3, 4, 5];
    let sum = 0;
    let mult = 1;
    for(i=0; i<niz.length; i++) {
    sum += niz[i];
    mult *= niz[i];
}
    console.log(sum);
    console.log(mult);
}

function reverse(str) {
    let text = "";
    for(var i = str.length-1; i>=0; i--) {
        text += str[i];
    }
    return text;
}

//2.4 no

//2.5 
function findLongestWord() {
    let niz = ["dan", "noc", "macke"];
    let max = 0;

    for(let i=0; i<niz.length; i++) {
        if(niz[i].length > max) {
            max = niz[i].length;
        }
    }
    return max;
}

//2.6 idk

//2.7 idk

//====================



function randomLargest() {
    let r1 = Math.floor(Math.random() * 101);
    let r2 = Math.floor(Math.random() * 101);
    let r3 = Math.floor(Math.random() * 101);

    console.log(r1,r2,r3);
    console.log(`Largest ${Math.max(r1, r2, r3)}`);
}


function randomEven() {
    let random = Math.floor(Math.random() * 101);

    for(let i=0; i<=random; i++) {
        if(i%2 == 0) {
            console.log(i);
        }
    }
}


function randomOdd() {
    let random = Math.floor(Math.random() * 101);
    console.log(`NUM: ${random}`);

    if(random < 40) {
        for(i=40; i>=random; i--) {
            console.log(i); 
        }
    }

    for(let i=40; i<random; i++) {
        if(i%2 != 0) {
            console.log(i);
        }
    }
}

function randomRandom() {
    let nums = [];
    let random = Math.floor(Math.random() * 101);
    console.log(`NUM: ${random}`);

    for(let i=0; i<=random; i++) {
        let rand = Math.floor(Math.random() * 101);
        nums.push(rand);
    }
    console.log(nums);
    console.log(Math.max.apply(null, nums));

}

function randomSum() {
    let sum = 0;
    let sumAgain = 0;
    let random = Math.floor(Math.random() * 10000) + 1000;
    console.log(`NUM: ${random}`);

    while(random) {
        sum += random % 10;
        random = Math.floor(random / 10);
    }
    console.log(sum);
    while(sum) {
        sumAgain += sum % 10;
        sum = Math.floor(sum / 10); 
    }    
    console.log(sumAgain);
}

//Multiplication table
let p1 = 1;
let p2 = 10;

function multiple() {
    let res = "\n";

    for(let i = p1; i <= p2; i++)  {
        for(let y = p1; y <= p2; y++) {
            res += (i*y) + "\t";
        }
        res += "\n";
    }
    console.log(res);

}

//Hex to rgb
function getRgb(value) {
    let valueSplit = value.split("");
    
    for(let i = 0; i < valueSplit.length; i++) {
        switch(valueSplit[i]) {
            case("A"):
                valueSplit[i] = 10; 
                break;
            case("B"):
                valueSplit[i] = 11;
                break;
            case("C"):
                valueSplit[i] = 12;
                break;
            case("D"):
                valueSplit[i] = 13;
                break;
            case("E"):
                valueSplit[i] = 14;
                break;
            case("F"):
                valueSplit[i] = 15;
        }

        valueSplit[i] = parseInt(valueSplit[i]);
    } 

    let r = valueSplit[1] * 16 + valueSplit[2];
    let g = valueSplit[3] * 16 + valueSplit[4];
    let b = valueSplit[5] * 16 + valueSplit[6];

    console.log(`rgb(${r},${g},${b})`);
}

let a = getRgb('#50068F');


//filterWords

let words = "Just some random words";
let num = 4;

function filterLongWords() {
    let result = [];
    words = words.split(" ");

    for(let i = 0; i < words.length; i++) {
        if(words[i].length > num) {

            result.push(words[i]);   
        }
    }

    let result2 = words.filter(word => word.length > num);
    console.log(result2);

    return result;

}

//6

function encodeWord(str) {
    str = str.replace("T", "7").replace("A", "4").replace("S", "5").replace("O", "0");
    console.log(str);
}

encodeWord("TASO TASO TASO"); //this does't work properly

//7


function fibonacci(n) {
    return n == 0 ? 0
    : n == 1 ? 1
    : fibonacci(n - 1) + fibonacci(n - 2);
}


function add() {
    let args = Array.from(arguments);
    let sum = 0;

    args.forEach(function (num, index) {
            sum += num;
      });
      
    console.log(sum);
}


function reverse(num) {
    str = String(num);

    return str.split("").reverse().join("");
}


function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    let rev = str.split("").reverse().join("");

    return rev == str ? console.log("Yup, it's palindrome") : console.log("Hell no");
}

//Write a JavaScript function that generates all combinations of a string ?? 

function alphaOrder(str) {
    return str.split('').sort().join('');
}



function upperFirstLetter(str) {
    str = str.split(" ");

    for(let word in str) {

        str[word] = str[word].split("");
        str[word][0] = str[word][0].toUpperCase();
        str[word] = str[word].join("");

    }

    console.log(str.join(' '));
    
}


function numOfVowels(str) {
    srt = str.split("");
    let letNum = "";

    for(let letter in str) {
        if(str[letter] == "a" || str[letter] == "e" || str[letter] == "i" || str[letter] == "o" || str[letter] == "u") {
            letNum += str[letter];
        }
    }

    return letNum.length;
}


//typeof() ?


function getExponent(b,n) {
    result = 1;
    
    for(let i = 1; i <= n; i++) {
        result = b * result;
    }

    console.log(result);
}

getExponent(2,2);


function uniqueChar(str) {
    let unique = "";

    for(let i = 0; i < str.length; i++) {
        if(unique.indexOf(str.charAt(i))==-1) {
            unique += str[i];
        }   
    }
    console.log(unique);
}


function occurence(str) {
    str = str.split("").sort().join("");
    let num = 1;

    for(let i = 0; i < str.length; i++) {
        if(str[i] == str[i + 1]) {
            num ++;
        }
        else {
            console.log(str[i],num);
            num = 1;
        }
    }
}

occurence("dabb");


function getStringId(num) {
    var res = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < num; i++) {
        res += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return res;
 }
 
 console.log(getStringId(3));



 function letterOccurence(str, letter) {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        } 
     }

    console.log(count);
 }

 letterOccurence("daadssa", "a");






