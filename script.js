let currentLang = 'zh'; // 預設中文

function toggleLanguage() {
  const langs = document.querySelectorAll('.lang');
  langs.forEach(el => el.classList.remove('active'));

  if (currentLang === 'zh') {
    document.querySelector('.lang-en').classList.add('active');
    currentLang = 'en';
  } else {
    document.querySelector('.lang-zh').classList.add('active');
    currentLang = 'zh';
  }

  // 可選：改變按鈕文字
  const btn = document.getElementById("lang-toggle");
  btn.innerText = currentLang === 'zh' ? "切換語言" : "Switch Language";
}

// 初始顯示中文（等網頁載入完再做）
window.onload = function () {
  document.querySelector('.lang-zh').classList.add('active');
};

document.getElementById("colorBtn").addEventListener("click", function () {
    alert("你點到我了！");
  });
