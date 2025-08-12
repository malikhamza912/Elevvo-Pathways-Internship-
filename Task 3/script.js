const welcomeDiv = document.getElementById('welcomeDiv');
const servicesDiv = document.getElementById('servicesDiv');

const observerWelcomeDiv = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      welcomeDiv.classList.remove('opacity-0', 'translate-y-10');
      welcomeDiv.classList.add('opacity-100', 'translate-y-0');
    }
    else {
      welcomeDiv.classList.add('opacity-0', 'translate-y-10');
      welcomeDiv.classList.remove('opacity-100', 'translate-y-10');
    }
  });
}, {
  threshold: 0.8
});

const observerServicesDiv = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            servicesDiv.classList.remove('opacity-0', 'translate-y-40');
            servicesDiv.classList.add('opacity-100', 'translate-y-0');
        }
        else {
            servicesDiv.classList.add('opacity-0', 'translate-y-40');
            servicesDiv.classList.remove('opacity-100', 'translate-y-0');
    }
  });
}, {
    threshold: 0.8
});

observerWelcomeDiv.observe(welcomeDiv);
observerServicesDiv.observe(servicesDiv);
