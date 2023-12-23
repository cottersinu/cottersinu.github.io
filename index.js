
//scroll top
let mybutton = document.getElementById("myBtn");

window.onscroll = function(){
  scrollFunction()
};

function scrollFunction(){
  if (document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20){
    mybutton.style.display = "block";
  } else {
     mybutton.style.display = "none";
 }
}
function topFunction(){
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}

// Automatic Slideshow - change image every 10 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 10000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}