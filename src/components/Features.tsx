import { motion } from 'motion/react';

const features = [
  { 
    title: "PEGADA PERFECTA", 
    desc: "Ni un 'touch' ni una gota. La dosis exacta para prender la noche sin apagar la memoria. Diseñado para aguantar hasta el after." 
  },
  { 
    title: "SABOR EXPLOSIVO", 
    desc: "Olvídate del gusto a jarabe barato. Mixología de alta gama encapsulada en una gomita. Sabores intensos que explotan en tu boca." 
  },
  { 
    title: "ACTITUD VIP", 
    desc: "El packaging que todos van a mirar cuando lo saques del bolsillo. No es una golosina, es un statement. Eres el main character." 
  }
];

export default function Features() {
  return (
    <section className="py-24 px-4 md:px-12 bg-black relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tighter mb-4">
            OTROS TE DAN UN <span className="text-white/30 line-through">TOUCH</span>.<br/>
            NOSOTROS TE DAMOS <span className="text-neon-magenta">LA NOCHE ENTERA.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-8 hard-shadow-white hover:hard-shadow transition-all duration-300 group cursor-default"
            >
              <div className="text-neon-magenta font-display text-5xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                0{i + 1}
              </div>
              <h3 className="font-display text-3xl text-white uppercase tracking-tighter mb-4 group-hover:text-neon-magenta transition-colors">{f.title}</h3>
              <p className="font-body text-white/70 leading-relaxed text-lg">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
