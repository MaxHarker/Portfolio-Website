const roles = ["Software Engineer", "Web Developer", "IT Specialist", "Data Analyst", "Programmer"];
const typingElement = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentRole.substring(0, charIndex);

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", type);