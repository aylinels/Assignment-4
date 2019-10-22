//get "i" div using getElementById, put it inside a variable
var i = document.getElementById('i');
//makes the variable listen for a click
i.addEventListener("click", ChangeI);

function ChangeI() {
  //when it hears click, trigger onclick function that changes color of body to blue
  i.style.backgroundColor = "blue";
}

//get "t1" div using getElementById, put it inside a variable
var t = document.getElementById('t1');
//makes the variable listen for a click
t.addEventListener("click", ChangeT);

function ChangeT() {
    //when it hears click, trigger onclick function that changes color of body to gray
  t.style.backgroundColor = "blue";
}

//get "t1" div using getElementById, put it inside a variable
var e = document.getElementById('e2');
//makes the variable listen for a click
e.addEventListener("click", ChangeE);

function ChangeE() {
    //when it hears click, trigger onclick function that changes color of body to gray
  e.style.backgroundColor = "blue";
}


var anim = document.getElementById("i");
anim.addEventListener("click", AddAnimation);

function AddAnimation() {
// adding animation class to letter "I"
anim.classList.add("animation");
}

var anim2 = document.getElementById("x2");
anim2.addEventListener("click", AddAnimation2);

function AddAnimation2() {
// adding animation class to "x1"
anim2.classList.add("animation2");
}
