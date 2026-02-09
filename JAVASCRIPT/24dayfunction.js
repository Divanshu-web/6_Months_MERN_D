// let num1 = 10
// let num2 = 20

// console.log(num1+num2)

// let num3 = 100
// let num4 = 200

// console.log(num3+num4)

function hello(){
    console.log("Hello World!")
}


hello()
hello()
hello()
hello()
hello()

// function addNumbers(n1,n2){
//     console.log(n1+n2)
// }

// addNumbers(10,50)

// addNumbers(500,500)


function addNumbers(n1,n2){
    return n1 + n2
}

let result = addNumbers(90,10)

console.log(result)

// simple function
// anonymous function
// arrow function

function number(n1){
     if(n1>=0){
        console.log("Number is Positive")
     }else{
        console.log("Number is Negative")
     }
     return n1
}
let results = number(-2)
console.log(results)


function Number(n1){
     if(n1/2){
        console.log("Number is Even")
     }else{
        console.log("Number is Odd")
     }
     return n1
}
let answer = Number(2)
console.log(answer)