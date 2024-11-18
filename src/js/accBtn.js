const modalCreateAccount = document.querySelector('#modal-create-account');
const overlayCreateAccount = document.querySelector('#overlay-create-account');
const btnCloseModalCreateAccount = document.querySelector(
  '#modal-create-account .btn--close-modal'
);
const btnsOpenModalCreateAccount =
  document.querySelectorAll('.btn--show-modal');

const modalUserLogin = document.querySelector('#modal-user-login');
const overlayUserLogin = document.querySelector('#overlay-user-login');
const btnCloseModalUserLogin = document.querySelector(
  '#modal-user-login .btn--close-userlogin'
);
const btnsOpenModalUserLogin = document.querySelectorAll('.btn--login');

const openModalCreateAccount = function () {
  closeModalUserLogin(); // 關閉 user login
  modalCreateAccount.classList.remove('hidden');
  overlayCreateAccount.classList.remove('hidden');
};

const closeModalCreateAccount = function () {
  modalCreateAccount.classList.add('hidden');
  overlayCreateAccount.classList.add('hidden');
};

const openModalUserLogin = function () {
  closeModalCreateAccount(); // 關閉 create account
  modalUserLogin.classList.remove('hidden');
  overlayUserLogin.classList.remove('hidden');
};

const closeModalUserLogin = function () {
  modalUserLogin.classList.add('hidden');
  overlayUserLogin.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModalCreateAccount.length; i++) {
  btnsOpenModalCreateAccount[i].addEventListener(
    'click',
    openModalCreateAccount
  );
}

for (let i = 0; i < btnsOpenModalUserLogin.length; i++) {
  btnsOpenModalUserLogin[i].addEventListener('click', openModalUserLogin);
}

if (btnCloseModalCreateAccount) {
  btnCloseModalCreateAccount.addEventListener('click', closeModalCreateAccount);
}

if (btnCloseModalUserLogin) {
  btnCloseModalUserLogin.addEventListener('click', closeModalUserLogin);
}

if (overlayCreateAccount) {
  overlayCreateAccount.addEventListener('click', closeModalCreateAccount);
}

if (overlayUserLogin) {
  overlayUserLogin.addEventListener('click', closeModalUserLogin);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modalCreateAccount.classList.contains('hidden')) {
      closeModalCreateAccount();
    }
    if (!modalUserLogin.classList.contains('hidden')) {
      closeModalUserLogin();
    }
  }
});

export {
  openModalCreateAccount,
  closeModalCreateAccount,
  openModalUserLogin,
  closeModalUserLogin,
};
