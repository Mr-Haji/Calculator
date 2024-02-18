var inputValue = document.getElementById("inp")

function addVal(val) {
    inputValue.value += val;
}

// delete function

function del() {
    inputValue.value = inputValue.value.slice(0, -1)
}
// All Clear
function clearval() {
    inputValue.value = "";
}

// evaluate 

function calculate() {
    inputValue.value = eval(inputValue.value)
}

var inputValue = document.getElementById("inp")

// for operator

function opr(opr) {
    var a = inputValue.value.charAt(inputValue.value.length - 1)
    if (a === "+" || a === "-" || a === "*" || a === "/" || a === ".") {
        opr = ""
    } else (
        inputValue.value += opr)
}
// add value

function root(val) {
    inputValue.value = Math.sqrt(inputValue.value);
    // console.log(inputValue.value[0])

}
function addVal(val) {
    inputValue.value += val;
}

// delete function

function del() {
    inputValue.value = inputValue.value.slice(0, -1)
}
// All Clear
function clearval() {
    inputValue.value = "";
}

// evaluate 

function calculate() {
    inputValue.value = eval(inputValue.value)
}
// console.log(inputValue.value = "")
