document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("darkModeToggle");

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode"); // Alterna la clase "dark-mode"

        // Cambia el texto del botón según el modo activo
        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "☀️ Modo Claro";
        } else {
            toggleButton.textContent = "🌙 Modo Noche";
        }
    });
});

