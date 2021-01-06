
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

//1.8 idk how to get rgb

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

//2.5 gugl
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

//nah




