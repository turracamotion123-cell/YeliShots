import { motion } from 'motion/react';

const varieties = [
  {
    name: "Pink Punch",
    desc: "Sabor intenso a daikiri de frutos rojos. Dulce, atrevido y diseñado para la noche.",
    image: "https://i.postimg.cc/1XK1w49h/12.png",
    color: "from-neon-magenta to-pink-500"
  },
  {
    name: "Golden Shot",
    desc: "Cítricos vibrantes. Refrescante, sofisticado y con una pegada que no perdona.",
    image: "https://i.postimg.cc/Zq0YmPJV/11.png",
    color: "from-yellow-400 to-orange-500"
  }
];

export default function Varieties() {
  return (
    <section id="varieties" className="py-32 px-4 md:px-12 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="font-display text-5xl md:text-8xl text-white uppercase tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nuestras <span className="text-neon-magenta">Variedades</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {varieties.map((v, i) => (
            <motion.div 
              key={i}
              className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 hard-shadow-white hover:hard-shadow transition-all duration-500 group"
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="w-full md:w-1/2 relative aspect-square">
                <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`}></div>
                <img 
                  src={v.image} 
                  alt={v.name}
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="font-display text-4xl text-white uppercase tracking-tighter mb-4">{v.name}</h3>
                <p className="font-body text-lg text-white/70 leading-relaxed mb-6">{v.desc}</p>
                <div className={`h-1 w-20 bg-gradient-to-r ${v.color} mx-auto md:mx-0 mb-8`}></div>
                <a 
                  href="#products" 
                  className="inline-block px-8 py-3 bg-white text-black font-display text-xl uppercase tracking-wider hover:bg-neon-magenta hover:text-white transition-all duration-300"
                >
                  Quiero este Pack
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
