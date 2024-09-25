
//form validation

const form = document.getElementById('form');

const uname = document.getElementById('uname');
const email = document.getElementById('email');
const message = document.getElementById('message');

const error_name = document.getElementById('error_name');
const error_email = document.getElementById('error_email');
const error_message = document.getElementById('error_message');

let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit',(e)=>
    {
if(uname.value === '' || uname.value == null){
 e.preventDefault();
 error_name.innerHTML = "Please enter your name";
}
else{
    error_name.innerHTML = "";
}

if(!email.value.match(emailPattern)){
 e.preventDefault();
 error_email.innerHTML = "Please enter valid email address"
}
else{
    error_email.innerHTML = "";
}

if(email.value === '' || email.value == null){
    e.preventDefault();
    error_email.innerHTML = "Please provide an email address";
   }
   else{
       error_email.innerHTML = "";
   }

   if(message.value === '' || message.value == null){
    e.preventDefault();
    error_message.innerHTML = "You have not entered any message yet";
   }
   else{
       error_message.innerHTML = "";
   }   
})


//background switch

const bgContainer = document.querySelector('.background-container');
let currentIndex = 0;

function slideBackgrounds() {
    currentIndex = (currentIndex + 1) % 2; // Toggle between 0 and 1
    bgContainer.style.transform = `translateX(-${currentIndex * 50}%)`;
}

setInterval(() => {
    slideBackgrounds();
}, 5000); // Change background every 8 seconds


// Get all sections and navigation links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Add scroll event listener
window.addEventListener("scroll", () => {
  let current = "";

  // Check which section is currently in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute("id"); // Get the section id
    }
  });

  // Remove active class from all links and add it to the correct link
  navLinks.forEach(link => {
    link.classList.remove("active"); // Remove active class
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active"); // Add active class to the correct link
    }
  });
});