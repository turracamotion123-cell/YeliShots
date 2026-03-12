import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header 
        className="fixed top-8 md:top-10 left-0 right-0 z-40 glass-header px-6 py-4 flex justify-between items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <a href="#hero" className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
          <img 
            src="https://i.postimg.cc/1tgPqyTz/Diseno-sin-titulo-(12).png" 
            alt="YeliShots Logo" 
            className="h-12 w-auto"
            referrerPolicy="no-referrer"
          />
        </a>

        <nav className="hidden md:flex gap-8 font-body text-sm uppercase tracking-widest font-semibold text-white/80 items-center">
          <a href="#hero" className="hover:text-neon-magenta transition-colors">La Experiencia</a>
          <a href="#varieties" className="hover:text-neon-magenta transition-colors">Variedades</a>
          <a href="#products" className="hover:text-neon-magenta transition-colors">Packs de Previa</a>
          <a href="#about" className="hover:text-white transition-colors">La Tribu</a>
          <a 
            href="#products" 
            className="ml-4 px-6 py-2 bg-neon-magenta text-white font-display text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,0,127,0.3)]"
          >
            Comprar
          </a>
        </nav>

        <button 
          className="md:hidden text-white hover:text-neon-magenta transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={32} />
        </button>
      </motion.header>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-yeli-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-neon-magenta transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X size={40} />
          </button>
          <nav className="flex flex-col gap-12 text-center font-display text-5xl uppercase tracking-tighter">
            <a href="#hero" onClick={() => setIsOpen(false)} className="text-white hover:text-neon-magenta transition-colors">La Experiencia</a>
            <a href="#varieties" onClick={() => setIsOpen(false)} className="text-white hover:text-neon-magenta transition-colors">Variedades</a>
            <a href="#products" onClick={() => setIsOpen(false)} className="text-white hover:text-neon-magenta transition-colors">Packs de Previa</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-white hover:text-white transition-colors">La Tribu</a>
          </nav>
        </motion.div>
      )}
    </>
  );
}
