// const loginId = document.getElementById('LOGIN_ID');
const loginId = document.querySelector(#'LOGIN_ID');
const loginPw = document.getElementById('LOGIN_PW');
const loginBtn = document.getElementById('LOGIN_BTN');
const loginSection = document.getElementById('LOGIN_SECTION');
const loginSuccess = document.getElementById('LOGIN_SUCCESS');

const color = () => {
  if (loginId.value.length > 0 && loginId.value.indexOf('@') !== -1 && loginPw.value.length >= 5) {
    loginBtn.style.backgroundColor = '#E67800';
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = '#F5F5F5';
    loginBtn.disabled = true;
  }
};

const success = () => {
  loginSection.style.display = 'none';
  loginSuccess.style.display = 'block';
};

const move = () => {
  loginSection.style.display = 'flex';
  loginSuccess.style.display = 'none';
};

loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);
loginBtn.addEventListener('click', success);
success_btn.addEventListener('click', move);
