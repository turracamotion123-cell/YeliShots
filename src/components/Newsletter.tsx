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

          <div className="flex flex-col items-center gap-8 mt-12 pt-12 border-t border-white/10">
            <span className="font-display text-2xl text-white uppercase tracking-[0.2em]">O dejate de vueltas</span>
            <a 
              href="https://whatsapp.com/channel/0029Vb8MECDDzgTG3yAytN2O"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-12 py-8 rounded-full font-display text-2xl md:text-4xl uppercase tracking-tighter hover:scale-105 transition-all shadow-[0_20px_50px_rgba(37,211,102,0.3)] flex items-center gap-4 group"
            >
              Sigue el canal en WhatsApp <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
            <p className="text-white/40 font-mono text-xs uppercase tracking-widest mt-4">
              Drops exclusivos, acceso a fiestas VIP y el respeto de la tribu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
