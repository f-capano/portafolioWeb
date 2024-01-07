const navbar = document.querySelector(".menu-navegacion")

window.addEventListener("scroll", function () {
    window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
    window.scrollY < 100 && (navbar.style.background = `transparent`);
  });




  document.addEventListener('DOMContentLoaded', function () {
    // Obtiene todos los enlaces del menú
    var menuLinks = document.querySelectorAll('nav a');

    // Añade un evento de clic a cada enlace del menú
    menuLinks.forEach(function (link) {
        link.addEventListener('click', scrollSmooth);
    });

    // Función para realizar el desplazamiento suave
    function scrollSmooth(e) {
        e.preventDefault();

        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        // Realiza el desplazamiento suave a la sección objetivo
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
});