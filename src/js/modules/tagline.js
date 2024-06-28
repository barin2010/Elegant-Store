function tagline() {
  const closeTaglineBtn = document.querySelector(".tagline_close");
  const tagline = document.querySelector(".tagline");

  closeTaglineBtn.onclick = function () {
    tagline.remove();
  };
}
export default tagline;
