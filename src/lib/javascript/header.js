 function initMenu() {
    const menu = document.getElementById("menu");
    if (!menu) return;
    
    let lastScroll = 0;
    
    function handleScroll() {
      const currentScroll = window.scrollY;
      
      if (currentScroll > 50) {
        menu.classList.remove("bg-transparent");
        menu.classList.add("bg-black/30", "backdrop-blur-md", "text-white");
      } else {
        menu.classList.remove("bg-black/30", "backdrop-blur-md", "text-white");
        menu.classList.add("bg-transparent");
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