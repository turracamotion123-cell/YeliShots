import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, CheckCircle2 } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-yeli-black border-2 border-neon-magenta p-8 md:p-12 text-center hard-shadow"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-20 h-20 bg-neon-magenta/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="text-neon-magenta" size={48} />
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tighter mb-4">
              ¡Ya sos parte de <br /> <span className="text-neon-magenta">La Tribu</span>!
            </h2>
            
            <p className="font-body text-lg text-white/70 uppercase tracking-widest mb-8">
              Tu pedido se está procesando en WhatsApp. Mientras tanto, acá tenés tu regalo:
            </p>

            <div className="bg-white/5 border-2 border-dashed border-neon-magenta p-6 mb-8 relative group">
              <span className="block font-body text-xs text-white/40 uppercase tracking-widest mb-2">Código de Descuento</span>
              <span className="block font-display text-4xl text-white tracking-[0.2em]">TRIBU10</span>
              <div className="absolute -top-3 -right-3 bg-neon-magenta text-white text-[10px] font-bold px-2 py-1 uppercase">10% OFF</div>
            </div>

            <div className="flex flex-col gap-4 text-left bg-white/5 p-6 rounded-xl">
              <div className="flex gap-4">
                <Gift className="text-neon-magenta shrink-0" />
                <div>
                  <h4 className="font-display text-white uppercase tracking-wider">Tu Sticker Exclusivo</h4>
                  <p className="font-body text-xs text-white/50 leading-relaxed">
                    Pedile tu sticker de "La Tribu" al operador de WhatsApp para usarlo en tus historias.
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="mt-10 w-full py-4 bg-white text-black font-display text-xl uppercase tracking-widest hover:bg-neon-magenta hover:text-white transition-all"
            >
              Volver a la web
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
