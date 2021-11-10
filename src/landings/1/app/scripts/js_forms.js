//Аккордион////////////////////////////////////////
const questionsLink = document.querySelectorAll(".__link");
for (let questionsLinkItem of questionsLink) {
  questionsLinkItem.addEventListener("click", function (el) {
    el.preventDefault();
    this.classList.toggle("open");
    const dropHidden = () => this.classList.contains("open");
    if (dropHidden()) {
      this.nextElementSibling.style.height =
        this.nextElementSibling.scrollHeight + "px";
      this.nextElementSibling.classList.add("open");
    } else {
      this.nextElementSibling.style.height = 0 + "px";
      this.nextElementSibling.classList.remove("open");
    }
  });
}
