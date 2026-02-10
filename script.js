function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Efek klik tombol
const links = document.querySelectorAll(".links a");

links.forEach(link => {
    link.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);

    });
});