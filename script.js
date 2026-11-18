const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");
const navigationLinks = navigation.querySelectorAll("a");
const year = document.getElementById("year");

menuButton.addEventListener("click", function () {
  navigation.classList.toggle("open");

  const isOpen = navigation.classList.contains("open");
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

year.textContent = new Date().getFullYear();
