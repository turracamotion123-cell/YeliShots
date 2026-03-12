import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <a 
            href="#products"
            className="w-full py-5 bg-neon-magenta text-white font-display text-2xl uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,0,127,0.5)] active:scale-95 transition-transform"
          >
            <ShoppingCart size={24} />
            Comprar Ahora
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
