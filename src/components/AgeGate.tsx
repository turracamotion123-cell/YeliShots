import { useState } from 'react';
import { motion } from 'motion/react';

interface AgeGateProps {
  onConfirm: () => void;
}

export default function AgeGate({ onConfirm }: AgeGateProps) {
  const [error, setError] = useState(false);

  const handleDeny = () => {
    setError(true);
    setTimeout(() => setError(false), 2000);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-yeli-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center px-4 flex flex-col items-center">
        <motion.img 
          src="https://i.postimg.cc/Kz9FKRQk/Diseno-sin-titulo-(10).png"
          alt="YeliShots Logo"
          className="h-24 md:h-32 w-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          referrerPolicy="no-referrer"
        />
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-9xl text-white uppercase tracking-tighter mb-8 text-glitch"
          data-text="¿TIENES EDAD PARA LA FIESTA?"
        >
          ¿TIENES EDAD PARA LA FIESTA?
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button 
            onClick={onConfirm}
            className="px-8 py-4 bg-neon-magenta text-white font-display text-2xl uppercase tracking-wider hover:bg-white hover:text-neon-magenta transition-colors duration-300"
          >
            SÍ, SOY MAYOR
          </button>
          <button 
            onClick={handleDeny}
            className="px-8 py-4 border border-white/20 text-white/60 font-display text-2xl uppercase tracking-wider hover:border-white hover:text-white transition-colors duration-300"
          >
            NO TODAVÍA
          </button>
        </div>

        {error && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-body mt-8 uppercase tracking-widest text-sm"
          >
            Vuelve cuando estés listo para dominar la noche.
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
