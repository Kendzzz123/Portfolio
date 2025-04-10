    // Expand effect
    function expandNavbar() {
      if (window.innerWidth > 768) {
        setTimeout(() => {
          document.getElementById("navbar").classList.add("expanded");
        }, 300);
      }
    }

    //website display
    document.addEventListener("DOMContentLoaded", () => {
      const elements = document.querySelectorAll('header, section, footer, .hidden');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      });

      elements.forEach(el => observer.observe(el));
    });