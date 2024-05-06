const form = document.getElementById('ageForm');
const ageInput = document.getElementById('age');
const message = document.getElementById('message');
 
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const age = parseInt(ageInput.value);
 
  if (age < 18 || age > 100 || isNaN(age)) {
    message.textContent = 'Věk musí být mezi 18 a 100.';
message.style.color = 'red';
  } else {
    message.textContent = 'Věk je validní.';
message.style.color = 'green';
  }
});