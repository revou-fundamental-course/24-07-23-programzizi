/*  var slideIndex = 1
setInterval(function(){
    plusDiv(1)
}, 1500)
function plusDiv(index) {
    showImage(slideIndex += index)
}
function showImage(index){
    console.log(index)
    const imgList = document.getElementsByClassName("article my-slider")
    if (index > imgList.length) {slideIndex = 1}
    if (index < 1){slideIndex = imgList.length}
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    imgList[slideIndex - 1].style.display = "flex" 
} */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
};

function validateForm(){
    var name = document.forms["myForm"]["fullname"].value;
    var email = document.forms["myForm"]["email"].value;
    var select = document.forms["myForm"]["field"].value;
if (name == "" || email == "" || select == "") {
    alert("Input tidak boleh kosong!");
    return false;
}
    document.getElementById("sender-fullname").innerText = name;
    document.getElementById("sender-email").innerText = email;
    document.getElementById("sender-field").innerText = select;
    return false;
};
var myForm = document.getElementById("myForm");
var result = document.getElementById("result");
function submitForm(event) {
    event.preventDefault();
    myForm.submit();
    result.innerHTML = "<b>The button is pressed and form is submitted.</b>"
 };

