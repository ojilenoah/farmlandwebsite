import './style.css'
import { motion } from 'framer-motion'

// Interactivity can be added here
console.log('Stewardship Farms website loaded');

// Animate cards on hover
document.querySelectorAll('.product-card-wide, .product-card-tall, .expansion-card').forEach(card => {
  const motionCard = document.createElement('motion.div');
  motionCard.className = card.className;
  motionCard.innerHTML = card.innerHTML;
  motionCard.style.cursor = 'pointer';
  // Note: Framer Motion requires React/Vue, but for vanilla JS, we can use CSS transitions instead
  motionCard.addEventListener('mouseenter', () => {
    motionCard.style.transform = 'scale(1.02)';
    motionCard.style.transition = 'transform 0.3s ease';
  });
  motionCard.addEventListener('mouseleave', () => {
    motionCard.style.transform = 'scale(1)';
  });
  card.replaceWith(motionCard);
});

// Animate buttons
document.querySelectorAll('button, a[href="#products"], a[href="#contact"]').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
    btn.style.transition = 'transform 0.2s ease';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});
