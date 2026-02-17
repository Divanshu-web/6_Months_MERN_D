// Checking scope of var


// var age = 100

// function userAge() {

//     var age = 200
//     console.log(age)
// }

// userAge()

// console.log(age)


// Checking scope of let


const age = 50



function userAge() {

    const age = 45

   

    console.log(age)
}

userAge()


console.log(age)