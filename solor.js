
    function createStars(numStars) {
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 1 + 2}px`;
        star.style.height = `${Math.random() * 1 + 2}px`;
        star.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(star);
      }
    }

    createStars(100);
