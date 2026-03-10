import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-90 contrast-110 saturate-110"
        >
          <source src="https://res.cloudinary.com/dzpcycipg/video/upload/v1773172991/Dise%C3%B1o_sin_t%C3%ADtulo_xtipvw.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto w-full h-full pt-32 md:pt-40 pb-12">
        
        <div className="relative w-full flex flex-col items-center">
          {/* Main Headline with Integrated Image */}
          <div className="relative">
            <motion.h1 
              className="font-display text-7xl md:text-9xl lg:text-[12rem] text-white uppercase tracking-tighter leading-[0.8] relative z-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              DOMINA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-white drop-shadow-[0_0_15px_rgba(255,0,127,0.8)]">
                LA NOCHE
              </span>
            </motion.h1>
          </div>

          <motion.p
            className="font-body text-xl md:text-3xl text-white/80 uppercase tracking-[0.3em] max-w-3xl drop-shadow-lg font-bold mt-12 mb-12 relative z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Otros te dan un "touch". <br className="md:hidden" /> Nosotros te damos el golpe entero.
          </motion.p>

          <motion.div
            className="relative z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <a 
              href="#products" 
              className="inline-block px-16 py-6 bg-neon-magenta text-white font-display text-3xl uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_40px_rgba(255,0,127,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)]"
            >
              Armá tu Previa
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="font-body text-xs text-white/50 uppercase tracking-widest">Scroll</span>
        <motion.div 
          className="w-[1px] h-16 bg-gradient-to-b from-neon-magenta to-transparent"
          animate={{ height: ["0rem", "4rem", "0rem"], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
