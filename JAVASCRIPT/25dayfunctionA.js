// 1. Make a function to find whether a number is Positive or Negative.
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

// 2. Make a function to find whether a number is Odd or Even.
function Number(n1){
     if(n1%2==0){
        console.log("Number is Even")
     }else{
        console.log("Number is Odd")
     }
     return n1
}
let answer = Number(2)
console.log(answer)

// 3. Make a function to find whether a entered text is String or Number.
function text(n1){
    if(!isNaN(n1)&& n1 !==""){
        console.log("Text is Number");
     }
     else {
      console.log("Text is String");
     }
return n1 
}
let solution = text("ygkj8")
console.log("your input is:",solution)