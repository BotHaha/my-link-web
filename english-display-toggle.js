function showVideoOnly() {
    const video = document.getElementById("video-section");
    const magazine = document.getElementById("magazine-section");
    const original = document.getElementById("original-section");
  
    video.style.display = "block";
    magazine.style.display = "none";
    original.style.display = "none";
  
    video.classList.add("full-row");
    magazine.classList.remove("full-row");
    original.classList.remove("full-row");

    /*更改標題內容*/
    video.querySelector("h2").textContent = "video-section";

    // 清除原本內容（保留 h2）
    const title = video.querySelector("h2");
    video.innerHTML = "";
    video.appendChild(title);
  
    // 加上新的連結
    video.innerHTML += `
      <a class="link-button full-width" href="https://www.newsinlevels.com">News in Levels</a><br>
      <a class="link-button full-width" href="https://tw.voicetube.com/" target="_blank">VoiceTube</a><br>
      <a class="link-button full-width" href="https://www.youtube.com/watch?v=5yjf1RvhflI&list=WL&index=1&pp=gAQBiAQB" target="_blank">常用1000句</a>;
   `}
  
  function showMagazine() {
    const video = document.getElementById("video-section");
    const magazine = document.getElementById("magazine-section");
    const original = document.getElementById("original-section");
  
    video.style.display = "none";
    magazine.style.display = "block";
    original.style.display = "none";
  
    video.classList.remove("full-row");
    magazine.classList.add("full-row");
    original.classList.remove("full-row");
  }
  
  function showOriginalContent() {
    const video = document.getElementById("video-section");
    const magazine = document.getElementById("magazine-section");
    const original = document.getElementById("original-section");
  
    video.style.display = "none";
    magazine.style.display = "none";
    original.style.display = "block";
  
    video.classList.remove("full-row");
    magazine.classList.remove("full-row");
    original.classList.add("full-row");
  }
  
  function showAll() {
    const video = document.getElementById("video-section");
    const magazine = document.getElementById("magazine-section");
    const original = document.getElementById("original-section");
  
    video.style.display = "flex";
    magazine.style.display = "flex";
    original.style.display = "flex";
  
    video.classList.remove("full-row");
    magazine.classList.remove("full-row");
    original.classList.remove("full-row");

    /*變更回原本網頁*/ 
    video.innerHTML = `
    <h2>Video Resources</h2>
    <a class="link-button full-width" href="https://www.newsinlevels.com">News in Levels</a><br>
    <a class="link-button full-width" href="https://tw.voicetube.com/" target="_blank">VoiceTube</a><br>
    <a class="link-button full-width" href="https://www.youtube.com/watch?v=5yjf1RvhflI&list=WL&index=1&pp=gAQBiAQB" target="_blank">常用1000句</a>
    `;

    magazine.innerHTML = `
        <h2>Magazine</h2>
        <a class="link-button full-width" href="https://magazine.english4u.net/Magdata/menu/jg3ea" target="_blank">No.304 2月 4U</a><br>
        <a class="link-button full-width" href="https://magazine.english4u.net/Magdata/menu/ljkng" target="_blank">No.305 3月 4U</a><br>
        <a class="link-button full-width" href="https://magazine.english4u.net/Magdata/menu/hb0gp" target="_blank">No.306 4月 4U</a>
    `;

    original.innerHTML = `
        <h2>Original Content</h2>
        <a class="link-button full-width" href="https://mangadex.org/" target="_blank">MangaDex</a><br>
        <a class="link-button full-width" href="https://witchculttranslation.com/" target="_blank">Witch Cult Translations</a>
    `;
}