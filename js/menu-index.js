const navbar = document.querySelector(".menu-navegacion")


window.addEventListener("scroll", function () {
    window.scrollY > 100 && (navbar.style.background = `rgba(0,0,0,0.9)`);
    window.scrollY < 100 && (navbar.style.background = `transparent`);
  });



  window.addEventListener('load', function () {
    // Obtiene todos los enlaces del menú
    var menuLinks = document.querySelectorAll('nav a');

    // Añade un evento de clic a cada enlace del menú
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            // Espera un breve momento antes de realizar el desplazamiento suave
            setTimeout(function () {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 50); // Puedes ajustar este valor si es necesario
        });
    });
});
