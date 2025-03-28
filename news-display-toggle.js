function showUK() {
    const UK = document.getElementById("UK-section");
    const US = document.getElementById("US-section");
    const JP = document.getElementById("JP-section");
  
    UK.style.display = "block";
    US.style.display = "none";
    JP.style.display = "none";
  
    UK.classList.add("full-row");
    US.classList.remove("full-row");
    JP.classList.remove("full-row");

    /*更改標題內容*/
    UK.querySelector("h2").textContent = "BBC";

    // 清除原本內容（保留 h2）
    const title = UK.querySelector("h2");
    UK.innerHTML = "";
    UK.appendChild(title);
  
    // 加上新的連結
    UK.innerHTML += `
      <a class="link-button full-width" href="https://www.bbc.com/news/articles/c3d883k1rx5o" target="_blank">Albanese faces headwinds ahead of Australian election</a>
    `;
  }
  
  function showUS() {
    const UK = document.getElementById("UK-section");
    const US = document.getElementById("US-section");
    const JP = document.getElementById("JP-section");
  
  
    UK.style.display = "none";
    US.style.display = "block";
    JP.style.display = "none";
  
    UK.classList.remove("full-row");
    US.classList.add("full-row");
    JP.classList.remove("full-row");

    /*更改標題內容*/
    US.querySelector("h2").textContent = "CNN";

    // 清除原本內容（保留 h2）
    const title = US.querySelector("h2");
    US.innerHTML = "";
    US.appendChild(title);
  
    // 加上新的連結
    US.innerHTML += `
      
      <h2>The New York Times</h2>
      `;

  }
  
  function showJP() {
    const UK = document.getElementById("UK-section");
    const US = document.getElementById("US-section");
    const JP = document.getElementById("JP-section");
  
  
    UK.style.display = "none";
    US.style.display = "none";
    JP.style.display = "block";
  
    UK.classList.remove("full-row");
    US.classList.remove("full-row");
    JP.classList.add("full-row");

    /*更改標題內容*/
    JP.querySelector("h2").textContent = "Asahi Shimbun";

    // 清除原本內容（保留 h2）
    const title = JP.querySelector("h2");
    JP.innerHTML = "";
    JP.appendChild(title);
  
    // 加上新的連結
    JP.innerHTML += `
      
      `;
  }
  
  function showAll() {
    const UK = document.getElementById("UK-section");
    const US = document.getElementById("US-section");
    const JP = document.getElementById("JP-section");
  
  
    UK.style.display = "flex";
    US.style.display = "flex";
    JP.style.display = "flex";
  
    UK.classList.remove("full-row");
    US.classList.remove("full-row");
    JP.classList.remove("full-row");

    /*變更回原本網頁*/ 
    UK.innerHTML = `
        <h2>UK</h2>
				<a class="link-button" href="https://www.bbc.com/news" target="_blank">BBC</a><br>
    `;

    US.innerHTML = `
        <h2>US</h2>
				<a class="link-button" href="https://www.cnn.com/" target="_blank">CNN</a><br>
				<a class="link-button" href="https://www.nytimes.com/" target="_blank">The New York Times</a><br>
    `;

    JP.innerHTML = `
        <h2>JP</h2>
				<a class="link-button" href="https://www.asahi.com/ajw/" target="_blank">Asahi Shimbun</a><br>
    `;
}