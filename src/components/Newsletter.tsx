import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-neon-magenta/5 z-0"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 glass-card p-12 md:p-20 text-center hard-shadow">
        <motion.h2 
          className="font-display text-5xl md:text-8xl text-white uppercase tracking-tighter mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Entrá a <span className="text-neon-magenta">La Tribu</span>
        </motion.h2>
        <p className="font-body text-xl text-white/70 uppercase tracking-widest mb-12 max-w-2xl mx-auto">
          No somos solo gomitas, somos un movimiento. Unite para drops exclusivos, acceso a fiestas VIP y el respeto de la tribu.
        </p>

        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          <form 
            className="flex flex-col md:flex-row gap-4 w-full" 
            onSubmit={(e) => {
              e.preventDefault();
              const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
              window.open(`https://wa.me/5493878406946?text=Hola!%20Quiero%20unirme%20al%20VIP%20de%20YeliShots.%20Mi%20email%20es:%20${encodeURIComponent(email)}`, '_blank');
            }}
          >
            <input 
              name="email"
              type="email" 
              required
              placeholder="TU EMAIL" 
              className="flex-1 bg-white/5 border-2 border-white/10 px-8 py-5 text-white font-body focus:outline-none focus:border-neon-magenta transition-colors uppercase tracking-widest"
            />
            <button type="submit" className="px-12 py-5 bg-white text-black font-display text-2xl uppercase tracking-wider hover:bg-neon-magenta hover:text-white transition-all duration-300">
              Entrar
            </button>
          </form>

          <div className="flex flex-col items-center gap-4">
            <span className="font-body text-xs text-white/40 uppercase tracking-[0.2em]">O también</span>
            <a 
              href="https://wa.me/5493878406946?text=Hola!%20Quiero%20unirme%20al%20Canal%20de%20WhatsApp%20VIP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-magenta font-display text-xl uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2"
            >
              Unirme al Canal de WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
