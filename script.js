let header =document.querySelector('header');
let menu= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menu.onclick = () =>{
navbar.classList.toggle('active')
}
document.getElementById("submit").addEventListener("click", SubmitForm);
function SubmitForm(event) {
  event.preventDefault();
  let Name = document.getElementById("userP").value;

  let Email = document.getElementById("emailP").value;

  let Phone = document.getElementById("Phone").value;
  }
  if (!Name && !Email && !Phone && !Message) {
    console.warn("You must enter some data to submit this form");
  } else {
    if (!Name) {
      Name = "no submission";
    }
    if (!Email) {
      Email = "no submission";
    }
    if (!Phone) {
      Phone = "no submission";
    }
    if (!Message) {
        Message = "no submission";
    }

    console.log(
      "==================Form Submission ==========================="
    );
    console.log("Name :", Name);
    console.log("Email :", Email);
    console.log("Newsletter :",Phone );
    console.log("Date :",Message);
  }


