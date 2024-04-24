const loginId = document.getElementById('LOGIN_ID');
const loginPw = document.getElementById('LOGIN_PW');
const loginBtn = document.getElementById('LOGIN_BTN');

const color = () => {
  if (loginId.value.length > 0 && loginId.value.indexOf('@') !== -1 && loginPw.value.length >= 5) {
    loginBtn.style.backgroundColor = '#E67800';
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = '#F5F5F5';
    loginBtn.disabled = true;
  }
};

const loginSuccess = () => {
  alert('로그인에 성공했습니다.');
};

loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);
loginBtn.addEventListener('click', loginSuccess);
