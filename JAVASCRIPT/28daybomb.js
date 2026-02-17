function changeInput1() {
    let input1Value = document.getElementById("input1").value
    document.getElementById("input1").disabled = "true"

    document.getElementById("input2").focus()

    if (input1Value == 1) {
        console.log("Value Matched")
    }
    else {
        document.getElementById("bomb1").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7mTLhRmhN5zeN_cLrM9emTUf-CQaJX7Acw&s"

    }

}


function changeInput2() {
    let input2Value = document.getElementById("input2").value
    document.getElementById("input2").disabled = "true"

    document.getElementById("input3").focus()

    if (input2Value == 1) {
        console.log("Value Matched")
    }
    else {
        document.getElementById("bomb2").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7mTLhRmhN5zeN_cLrM9emTUf-CQaJX7Acw&s"

    }

}