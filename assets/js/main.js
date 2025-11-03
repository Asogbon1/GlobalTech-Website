// Scroll to Top Button
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });


// Animated Statistics Counter
       document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".stat-number");
  let hasAnimated = false;

  const animateCount = (el, target, suffix) => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 20);

    const updateCounter = () => {
      start += increment;
      if (start < target) {
        el.textContent = Math.floor(start).toLocaleString() + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    };

    updateCounter();
  };

  const parseStatValue = (text) => {
    const match = text.match(/^([\d,]+)([a-zA-Z+]+)?$/);
    const number = match ? parseInt(match[1].replace(/,/g, "")) : 0;
    const suffix = match && match[2] ? match[2] : "";
    return { number, suffix };
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        counters.forEach((counter) => {
          const { number, suffix } = parseStatValue(counter.textContent);
          animateCount(counter, number, suffix);
        });
        hasAnimated = true;
      }
    },
    { threshold: 0.5 }
  );

  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    observer.observe(statsSection);
  }
});


