
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

// Открытие и закрытие меню
menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.textContent = isOpen ? "✕" : "☰";
});

// Закрытие меню после выбора раздела
const links = navigation.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
});

// Автоматическое обновление года
document.getElementById("year").textContent =
    new Date().getFullYear();
