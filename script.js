document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const ideas = document.getElementById("ideas").value;

  // Simple form validation (you can add more)
  if (name && phone && ideas) {
    // Display success message
    document.getElementById("formResponse").textContent = "Thank you, " + name + "! We’ve received your message.";
    
    // Clear the form
    document.getElementById("contactForm").reset();
  } else {
    // Display error message
    document.getElementById("formResponse").textContent = "Please fill out all the fields.";
    document.getElementById("formResponse").style.color = "red";
  }
});
