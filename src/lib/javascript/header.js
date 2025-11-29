 function initMenu() {
    const menu = document.getElementById("menu");
    const menuMobile = document.getElementById("menu-mobile");
    
    let lastScroll = 0;
    
    function handleScroll() {
      const currentScroll = window.scrollY;
      
      if (currentScroll > 50) {
        // Aplicar efecto al menú desktop
        if (menu) {
          menu.classList.remove("bg-transparent");
          menu.classList.add("bg-black/30", "backdrop-blur-md", "text-white");
        }
        // Aplicar efecto al menú móvil
        if (menuMobile) {
          menuMobile.classList.remove("bg-transparent");
          menuMobile.classList.add("bg-black/30", "backdrop-blur-md", "text-white");
        }
      } else {
        // Remover efecto del menú desktop
        if (menu) {
          menu.classList.remove("bg-black/30", "backdrop-blur-md", "text-white");
          menu.classList.add("bg-transparent");
        }
        // Remover efecto del menú móvil
        if (menuMobile) {
          menuMobile.classList.remove("bg-black/30", "backdrop-blur-md", "text-white");
          menuMobile.classList.add("bg-transparent");
        }
      }
      
      lastScroll = currentScroll;
    }
    
    window.addEventListener("scroll", handleScroll);
    
    // Verificar el scroll inicial
    handleScroll();
  }
  
  // Ejecutar cuando el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMenu);
  } else {
    initMenu();
  }
  
  // Re-ejecutar en navegaciones de Astro
  document.addEventListener("astro:page-load", initMenu);


// script mobile

function initMobileMenu() {
        const burger = document.getElementById('burger');
        const mobileMenu = document.getElementById('mobile-menu');
        const submenuToggle = document.getElementById('submenu-toggle');
        const submenu = document.getElementById('submenu');
        const submenuIcon = document.getElementById('submenu-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        burger?.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu?.classList.toggle('hidden');
        mobileMenu?.classList.toggle('flex');
        });

        submenuToggle?.addEventListener('click', () => {
        submenu?.classList.toggle('hidden');
        submenuIcon?.classList.toggle('rotate-180');
        });

        mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu?.classList.add('hidden');
          mobileMenu?.classList.remove('flex');
          burger?.classList.remove('active');
        });
        });
      }

      initMobileMenu();
      document.addEventListener('astro:after-swap', initMobileMenu);