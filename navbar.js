window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
document.getElementById("nav").style.width = "50%";
document.getElementById("nav").style.borderRadius = "50px";
document.getElementById("nav").style.top = "10px";
document.getElementById("nav").style.transform = "translateX(50%)"
} else {
document.getElementById("nav").style.width =  "100%";
document.getElementById("nav").style.borderRadius =  "0px";
document.getElementById("nav").style.top = "0px";
document.getElementById("nav").style.transform = "translateX(0%)"
}
}