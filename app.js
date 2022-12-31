
function randomNumber() {
    return Math.floor(Math.random() * 101);
}

var btn = document.getElementById("rollBtn");
var num = document.getElementById("rollNumber");

btn.addEventListener("click", function () {
    num.innerHTML = randomNumber();
})




