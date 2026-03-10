import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="about" ref={ref} className="relative py-32 px-4 md:px-12 bg-black overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-8xl text-white uppercase tracking-tighter mb-8 leading-none">
              La <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-white drop-shadow-[0_0_15px_rgba(255,0,127,0.5)]">
                Tribu
              </span>
            </h2>
            <p className="font-body text-xl text-white/80 leading-relaxed mb-8">
              No somos un trago más. Somos el flash de la cámara, el VIP sin fila, la actitud que llevas en el bolsillo. YeliShots redefine la forma en que consumes alcohol.
            </p>
            <p className="font-body text-lg text-white/60 leading-relaxed">
              Gomitas con alcohol diseñadas para quienes no piden permiso. Sabores intensos, pegada perfecta, y un packaging que grita "Bad Bitch Energy".
            </p>
          </motion.div>

          {/* Polaroid Grid */}
          <div className="relative h-[600px] w-full">
            <motion.div 
              className="absolute top-0 right-0 w-2/3 h-2/3 bg-white p-3 pb-12 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300 z-10"
              style={{ y: y1 }}
            >
              <img 
                src="https://i.postimg.cc/C1LynCZ8/Chat-GPT-Image-12-feb-2026-15-12-49.png" 
                alt="YeliShots VIP"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center font-display text-black text-xl uppercase tracking-widest">
                #YeliShots
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white p-3 pb-12 shadow-2xl -rotate-6 hover:rotate-0 transition-transform duration-300 z-20"
              style={{ y: y2 }}
            >
              <img 
                src="https://i.postimg.cc/3RJM0jy2/Chat-GPT-Image-13-feb-2026-01-10-17.png" 
                alt="YeliShots Party"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center font-display text-black text-lg uppercase tracking-widest">
                Domina la noche
              </div>
            </motion.div>

            <motion.div 
              className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white p-3 pb-12 shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-300 z-0"
              style={{ y: y3 }}
            >
              <img 
                src="https://i.postimg.cc/qRMf6ctc/Chat-GPT-Image-13-feb-2026-01-10-33.png" 
                alt="YeliShots Lifestyle"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center font-display text-black text-lg uppercase tracking-widest">
                VIP Only
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
