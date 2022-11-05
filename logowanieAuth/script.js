const loginChangeBtn = document.querySelector('.orLogin');
const signUpEl = document.querySelector('.signUpClass');
const logInEl = document.querySelector('.logIn');
const cartBtn = document.querySelector('.bi-cart');

loginChangeBtn.addEventListener('click', function (e) {
  e.preventDefault();
  signUpEl.classList.toggle('is-hidden');
  logInEl.classList.toggle('is-hidden');
  loginChangeBtn.classList.toggle('is-hidden');
});
