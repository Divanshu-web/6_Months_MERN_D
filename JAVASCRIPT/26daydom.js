//  console.log("External JS")

// function addNumbers(num1, num2){
//     console.log(num1+num2)
// }

// addNumbers(60,100)

// addNumbers(100,400)



let h = document.getElementById("myHeading")

h.innerText = "MERN Stack"


let box = document.getElementById("box")
box.innerHTML = "<h1>Hi</h1>"


function submitForm() {
    let inputValue = document.getElementById("input1").value
    console.log(inputValue)
}

// UPPERCASE
// lowercase
// camelCase
// kebab-case
// snake_case
// HelloWorld


function changeImg() {
    document.getElementById("image1").src = "https://media.istockphoto.com/id/457381095/photo/waterfall-iceland-seljalandsfoss.jpg?s=612x612&w=0&k=20&c=XzfRuKIZ4v2wfE8MHOiZMOZkBfnj03hnVJg3X92HsKQ="

    document.getElementById("imgHeading").innerHTML = "Sunset"

    let imgHeading = document.getElementById("imgHeading")

    imgHeading.style.backgroundColor = "red"
    imgHeading.style.color = "white"
    imgHeading.style.fontSize = "100px"
}


function changeImg2() {
    document.getElementById("image1").src = "https://media.istockphoto.com/id/1473666403/photo/deep-forest-waterfall-in-thailand-erawan-waterfall-national-park-kanjanaburi-thailand.jpg?s=612x612&w=0&k=20&c=weBEF1fecZcspR3wqZz79ZmH4fnauLTqy9A4xEb8xi4="
    document.getElementById("imgHeading").innerHTML = "Waterfall"
}
