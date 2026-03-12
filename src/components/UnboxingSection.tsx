import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function UnboxingSection() {
  return (
    <section className="py-32 px-4 bg-yeli-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-8">
              El Unboxing <br />
              <span className="text-neon-magenta">De La Victoria</span>
            </h2>
            <p className="font-body text-xl text-white/70 uppercase tracking-widest leading-relaxed mb-8">
              No es solo un paquete, es el inicio de la mejor noche de tu vida. Mirá la textura, sentí el aroma y preparate para el golpe.
            </p>
            <ul className="space-y-4">
              {['Textura Premium', 'Sabor Explosivo', 'Efecto Inmediato'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-display text-2xl uppercase tracking-wider">
                  <div className="w-6 h-6 bg-neon-magenta rounded-full flex items-center justify-center text-[10px]">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[9/16] max-w-[400px] mx-auto rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-[0_0_50px_rgba(255,0,127,0.3)] group cursor-pointer"
          >
            {/* Placeholder for Video/GIF */}
            <img 
              src="https://images.unsplash.com/photo-1514525253344-f814d074358a?auto=format&fit=crop&q=80" 
              alt="Unboxing preview" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="text-black fill-black ml-1" size={32} />
              </div>
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <span className="bg-neon-magenta text-white px-4 py-2 font-display text-xl uppercase tracking-widest">Ver Unboxing</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
