const showCookieMessage = () => {
  const header = document.querySelector('.header');
  if (!header) {
    console.error('Header element not found.');
    return;
  }

  if (document.querySelector('.cookie-message')) return;

  const message = document.createElement('div');
  message.classList.add('cookie-message');
  message.innerHTML = `
      cookies Testing，並不會索取任何資料
      <button class="btn btn--close-cookie">Got it!</button>
    `;

  header.appendChild(message);

  // 添加事件監聽器，關閉訊息
  message.querySelector('.btn--close-cookie').addEventListener('click', () => {
    message.remove();
  });
};

document.addEventListener('DOMContentLoaded', showCookieMessage);

export { showCookieMessage };
