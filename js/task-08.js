
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitedd);


function submitedd(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.password.value === '' ||
    event.currentTarget.elements.email.value === ''
  ) {
    alert('Invalid password or email');
  } else {
    const userInfo = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };
    console.log(userInfo);
    event.currentTarget.reset();
  }
}


 