import { motion } from 'motion/react';
import { X, Check, GlassWater, PartyPopper } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Subí de <span className="text-neon-magenta">Nivel</span>
          </motion.h2>
          <p className="font-body text-xl text-white/50 uppercase tracking-widest mt-4">
            La diferencia entre una noche más y una noche épica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden hard-shadow">
          {/* The Old Way */}
          <div className="bg-white/5 p-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <GlassWater className="text-white/40" size={32} />
            </div>
            <h3 className="font-display text-3xl text-white/40 uppercase tracking-wider mb-8">La Previa Común</h3>
            <ul className="space-y-6 w-full">
              {[
                "Botellas pesadas y calientes",
                "Vasos de plástico que se pierden",
                "Gusto a alcohol puro",
                "Cero estilo, cero onda"
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-center gap-3 text-white/30 font-body text-sm uppercase tracking-widest">
                  <X size={16} className="text-red-500/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* The Yeli Way */}
          <div className="bg-neon-magenta/10 p-12 flex flex-col items-center text-center relative">
            <div className="absolute top-6 right-6 bg-neon-magenta text-white text-[10px] font-bold px-3 py-1 uppercase tracking-tighter rounded-full animate-pulse">
              Recomendado
            </div>
            <div className="w-16 h-16 bg-neon-magenta rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,0,127,0.5)]">
              <PartyPopper className="text-white" size={32} />
            </div>
            <h3 className="font-display text-3xl text-white uppercase tracking-wider mb-8">Con YeliShots</h3>
            <ul className="space-y-6 w-full">
              {[
                "Entra en tu bolsillo",
                "Sin vasos, sin vueltas",
                "Mixología de alta gama",
                "Actitud de Main Character"
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-center gap-3 text-white font-body text-sm uppercase tracking-widest font-bold">
                  <Check size={16} className="text-neon-magenta" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
