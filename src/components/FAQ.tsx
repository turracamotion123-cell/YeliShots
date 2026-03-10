import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "¿Cuántas gomitas trae cada paquete?",
    a: "Cada paquete trae unas 12/13 gomitas (paquete de 40gr). El Pack Previa trae 10 paquetes para que la noche sea eterna."
  },
  {
    q: "¿Cuál es la graduación alcohólica?",
    a: "Nuestras gomitas están diseñadas para pegar. Tienen una graduación alcohólica de 10%. Consumir con responsabilidad."
  },
  {
    q: "¿Hacen envíos a todo el país?",
    a: "Sí, hacemos envíos a toda Argentina y vendemos en todo el mundo. En CABA y GBA entregamos en menos de 24hs para que no te quedes sin previa."
  },
  {
    q: "¿Tienen vencimiento?",
    a: "Tienen una vida útil de 6 meses conservadas en un lugar fresco y seco. No necesitan heladera, pero frías saben mejor."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 bg-yeli-black relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.h2 
          className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Preguntas <span className="text-neon-magenta">Frecuentes</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-display text-xl md:text-2xl text-white uppercase tracking-wider group-hover:text-neon-magenta transition-colors">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <Minus className="text-neon-magenta" />
                ) : (
                  <Plus className="text-white/50 group-hover:text-white transition-colors" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-lg text-white/60 pb-8 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
