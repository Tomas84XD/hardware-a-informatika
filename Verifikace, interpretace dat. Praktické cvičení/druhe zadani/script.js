const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const message = document.getElementById('message');
 
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
 
  if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
    message.textContent = 'Heslo musí obsahovat 8 znaků aspoň jedno Velké, malé písmeno a jedno číslo.';
message.style.color = 'red';
  } else if (password !== confirmPassword) {
    message.textContent = 'Hesla se neshodují.';
message.style.color = 'red';
  } else {
    message.textContent = 'Hesla jsou v pořádku.';
message.style.color = 'green';
  }
})


