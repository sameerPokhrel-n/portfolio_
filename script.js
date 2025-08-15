// Smooth UI interactions, accessible navigation, simple animated chart
(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (toggle && menu){
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('show');
    });
  }

  // IntersectionObserver to add reveal animations
  const reveal = (el) => el.classList.add('reveal');
  const io = new IntersectionObserver((entries)=>{
    for (const e of entries){
      if (e.isIntersecting){
        reveal(e.target);
        io.unobserve(e.target);
      }
    }
  }, {threshold: .12});
  document.querySelectorAll('.project, .card').forEach(el => io.observe(el));

 

  // Contact: mailto fallback with validation
  const form = document.getElementById('contactForm');
  if (form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = /** @type {HTMLInputElement} */(document.getElementById('name')).value.trim();
      const email = /** @type {HTMLInputElement} */(document.getElementById('email')).value.trim();
      const message = /** @type {HTMLTextAreaElement} */(document.getElementById('message')).value.trim();
      if (!name || !email || !message) return alert('Please complete all fields.');
      const subject = encodeURIComponent('Portfolio contact from ' + name);
      const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
      window.location.href = 'mailto:sameerpokharel29@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
})();
