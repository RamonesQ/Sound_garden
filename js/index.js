// Get the modal
var modal = document.getElementById("myModal");

//var btnReserva = document.getElementsByClassName("btn btn-primary");

// Get the button that opens the modal
var btn = document.getElementsByClassName("btn btn-primary");
// var btn1 = document.getElementById("myBtn1");
// var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
// };

[].forEach.call(btn, function (event) {
    event.onclick = function () {
        modal.style.display = "block";
    };
});
// btn[1].onclick = function () {
//     modal.style.display = "block";
// };
// btn[2].onclick = function () {
//     modal.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target.className == "buttonCancelar") {
        modal.style.display = "none";
    }
};

console.log(btn);
