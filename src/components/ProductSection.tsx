import { useState } from 'react';
import { motion } from 'motion/react';
import SuccessModal from './SuccessModal';

export default function ProductSection() {
  const [selectedTier, setSelectedTier] = useState<'1' | '10' | '20'>('10');
  const [currency, setCurrency] = useState<'ARS' | 'USD'>('ARS');

  const product = {
    title: 'Paquete YeliShots',
    subtitle: '(2 Sabores Mix)',
    description: 'La dosis exacta de actitud. Gomitas con alcohol diseñadas para quienes no piden permiso. Sabores intensos, pegada perfecta, y un packaging que grita "Bad Bitch Energy".',
    image: 'https://i.postimg.cc/Hk12Gjz8/7.png'
  };

  const tiers = {
    '1': {
      label: 'Individual',
      units: '1 Unidad',
      price: { ARS: '$2.500', USD: '$2.50' },
      savings: null
    },
    '10': {
      label: 'Pack Previa',
      units: '10 Unidades',
      price: { ARS: '$21.250', USD: '$21.25' },
      savings: 'Ahorro 15%'
    },
    '20': {
      label: 'Fiesta VIP',
      units: '20 Unidades',
      price: { ARS: '$37.500', USD: '$37.50' },
      savings: 'Ahorro 25%'
    }
  };

  const [showSuccess, setShowSuccess] = useState(false);

  const handleBuy = () => {
    setShowSuccess(true);
    window.open(`https://wa.me/5493878406946?text=Hola!%20Quiero%20comprar%20el%20${encodeURIComponent(tiers[selectedTier].label)}%20de%20YeliShots%20(${tiers[selectedTier].units})`, '_blank');
  };

  return (
    <section id="products" className="relative py-32 px-4 md:px-12 bg-black min-h-screen flex items-center">
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-20">
          <motion.h2 
            className="font-display text-5xl md:text-8xl text-white uppercase tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Elegí tu <span className="text-neon-magenta">Arma</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - Spotlight */}
          <motion.div 
            className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden glass-card p-8 flex items-center justify-center hard-shadow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-magenta/20 to-transparent z-0"></div>
            <motion.img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(255,0,127,0.5)]"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Details Side */}
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/10">
                <button 
                  onClick={() => setCurrency('ARS')}
                  className={`px-4 py-2 rounded-full font-body text-sm font-bold transition-colors ${currency === 'ARS' ? 'bg-neon-magenta text-white' : 'text-white/50 hover:text-white'}`}
                >
                  ARS
                </button>
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-4 py-2 rounded-full font-body text-sm font-bold transition-colors ${currency === 'USD' ? 'bg-neon-magenta text-white' : 'text-white/50 hover:text-white'}`}
                >
                  USD
                </button>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tighter mb-2 leading-none">
                {product.title}
              </h3>
              <h4 className="font-display text-3xl text-neon-magenta uppercase tracking-widest mb-6">
                {product.subtitle}
              </h4>
              <p className="font-body text-lg text-white/70 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Tier Selector */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <span className="text-red-500 font-body text-xs font-bold uppercase tracking-widest">
                  Stock Limitado: Solo 7 packs disponibles para hoy
                </span>
              </div>
              {(Object.keys(tiers) as Array<keyof typeof tiers>).map((key) => (
                <button 
                  key={key}
                  onClick={() => setSelectedTier(key)}
                  className={`relative flex items-center justify-between p-6 border-2 transition-all duration-300 ${
                    selectedTier === key 
                      ? 'border-neon-magenta bg-neon-magenta/10 text-white hard-shadow' 
                      : 'border-white/20 text-white/50 hover:border-white/50'
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-2xl uppercase tracking-wider">{tiers[key].label}</span>
                      {key === '10' && (
                        <span className="bg-neon-magenta text-white text-[10px] px-2 py-0.5 font-bold uppercase tracking-tighter animate-pulse">
                          Más Vendido
                        </span>
                      )}
                    </div>
                    <span className="font-body text-sm tracking-widest">{tiers[key].units}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-display text-3xl text-neon-magenta tracking-tighter">{tiers[key].price[currency]}</span>
                    {tiers[key].savings && (
                      <span className="font-body text-xs font-bold bg-white text-black px-2 py-1 mt-1 uppercase tracking-widest">
                        {tiers[key].savings}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={handleBuy}
                className="w-full py-5 bg-[#25D366] text-white font-body font-bold text-xl uppercase tracking-wider hover:bg-[#128C7E] transition-colors duration-300 flex items-center justify-center gap-3"
              >
                Comprar
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
