function enquire() {
  alert("Redirecting to contact page...");
  window.location.href = "contact.html";
}

function submitForm() {
  const name = document.getElementById("name").value;
  alert("Thank you " + name + "! We will contact you soon.");
}
