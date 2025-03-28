// 功能選單切換
function toggleMenu() {
  const menu = document.getElementById("dropdown-content");
  if (menu) {
    menu.classList.toggle("show");
  }
}

// 點擊非按鈕時關閉選單
document.addEventListener("click", function (event) {
  const isDropdownBtn = event.target.matches(".dropbtn");
  const dropdown = document.getElementById("dropdown-content");

  if (!isDropdownBtn && dropdown && dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  }
});

// 語言切換
let currentLang = 'zh';

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

  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.innerText = currentLang === 'zh' ? "切換語言" : "Switch Language";
  }
}

window.addEventListener("load", function () {
  const zhBlock = document.querySelector('.lang-zh');
  if (zhBlock) zhBlock.classList.add('active');
});

// ✅ 點其他地方收起下拉選單
window.addEventListener("click", function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }
  }
});