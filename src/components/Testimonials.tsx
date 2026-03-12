import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Santi G.",
    role: "La previa no es lo mismo",
    text: "Llevé el Pack VIP a la quinta el finde y fue un viaje de ida. El sabor Pink Punch es una locura, no podés comer solo una.",
    avatar: "https://picsum.photos/seed/santi/100/100"
  },
  {
    name: "Mica R.",
    role: "Fanática de Golden Shot",
    text: "Me encanta que no ocupan lugar en la cartera. Son el accesorio perfecto para el boliche. ¡La pegada es real!",
    avatar: "https://picsum.photos/seed/mica/100/100"
  },
  {
    name: "Facu M.",
    role: "Organizador de Eventos",
    text: "Las usamos para un cumple de 25 y la gente flasheó. Es algo distinto, divertido y con mucha onda.",
    avatar: "https://picsum.photos/seed/facu/100/100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="font-display text-5xl md:text-8xl text-white uppercase tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            La voz de <span className="text-neon-magenta">La Tribu</span>
          </motion.h2>
          <p className="font-body text-xl text-white/50 uppercase tracking-widest mt-4">
            No lo decimos nosotros, lo dice la calle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              className="glass-card p-8 relative flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Quote className="text-neon-magenta/20 absolute top-6 right-6 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-neon-magenta text-neon-magenta" />
                ))}
              </div>

              <p className="font-body text-lg text-white/80 italic mb-8 flex-grow">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all border border-white/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display text-xl text-white uppercase tracking-wider">{t.name}</h4>
                  <p className="font-body text-xs text-neon-magenta uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
