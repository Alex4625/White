// Message content for typing animation in the digital letter.
const letterMessage = `Happy White Day, My Love, my sayangg 🤍

Today may just be one day on the calendar,
but for me it is a small chance to remind you
how special you are in my life.

Thank you for always being there,
for your smile that brightens my days,
and for your presence that makes everything feel meaningful.

Every moment with you is a gift
I would never trade for anything.

May our journey ahead be filled with laughter,
new memories, and a love that continues to grow.

Happy White Day.

With love,
Alex`;

const openCardBtn = document.getElementById('openCardBtn');
const cardSection = document.getElementById('card-section');
const typedLetter = document.getElementById('typedLetter');

let typingStarted = false;

// Starts letter typing animation once when the letter section is visible.
function typeLetter(text, target, speed = 30) {
  if (typingStarted) return;
  typingStarted = true;

  let index = 0;
  const timer = setInterval(() => {
    target.textContent += text[index];
    index += 1;

    if (index >= text.length) {
      clearInterval(timer);
    }
  }, speed);
}

// Simple reveal-on-scroll observer for section entrance animations.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');

      if (entry.target.id === 'card-section') {
        typeLetter(letterMessage, typedLetter);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));

// Landing button interaction:
// 1) Fade out landing,
// 2) Smooth scroll to greeting card.
openCardBtn.addEventListener('click', () => {
  document.body.classList.add('card-opened');

  setTimeout(() => {
    cardSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 450);
});
