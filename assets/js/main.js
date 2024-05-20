const handleClick = {
  dropdownClick: function (btn, dropdownContent) {
    const body = document.getElementsByTagName("body")[0];

    btn.addEventListener("click", function () {
      if (this.classList.contains("dropdown-open")) {
        this.classList.remove("dropdown-open");
      } else {
        this.classList.add("dropdown-open");
      }
    });
    btn.addEventListener("mouseleave", function () {
      if (this.classList.contains("dropdown-open")) {
        this.classList.remove("dropdown-open");
      }
    });
    dropdownContent.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    body.addEventListener("click", function (event) {
      if (
        !event.target.closest(".dropdown") &&
        !event.target.closest(".dropdown-content") &&
        btn.classList.contains("dropdown-open")
      ) {
        btn.classList.remove("dropdown-open");
      }
    });
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.getElementById("js-dropdown");
  const dropdownContent = document.getElementById("js-dropdown-content");
  const shareBtn = document.getElementById("js-share-btn");
  const dropdownShareContent = document.getElementById("js-dropdown-share-content");

  handleClick.dropdownClick(dropdownBtn, dropdownContent);
  handleClick.dropdownClick(shareBtn, dropdownShareContent);
});
