import { motion } from 'motion/react';

interface MarqueeProps {
  variant?: 'default' | 'top';
}

export default function Marquee({ variant = 'default' }: MarqueeProps) {
  const isTop = variant === 'top';
  
  return (
    <div className={`bg-neon-magenta text-white py-2 md:py-3 overflow-hidden whitespace-nowrap border-y border-white/20 flex z-[100] ${isTop ? 'fixed top-0 left-0 right-0' : 'relative z-20'}`}>
      <motion.div
        className={`flex font-display ${isTop ? 'text-sm md:text-base' : 'text-3xl'} uppercase tracking-widest`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        <div className="flex items-center">
          <span className="mx-8">DOMINA LA NOCHE</span><span className="text-black text-xl">✦</span>
          <span className="mx-8">VIP ONLY</span><span className="text-black text-xl">✦</span>
          <span className="mx-8">NO PIDAS PERMISO</span><span className="text-black text-xl">✦</span>
          <span className="mx-8">BAD BITCH ENERGY</span><span className="text-black text-xl">✦</span>
          <span className="mx-8">CERO RESACA</span><span className="text-black text-xl">✦</span>
        </div>
        <div className="flex items-center">
          <span className="mx-8">DOMINA LA NOCHE</span><span className="text-black text-xl">✦</span>
          <span className="mx-8">VIP ONLY</span><span className="text-black text-xl">✦</span>
          <span className="mx-8">NO PIDAS PERMISO</span><span className="text-black text-xl">✦</span>
          <span className="mx-8">BAD BITCH ENERGY</span><span className="text-black text-xl">✦</span>
          <span className="mx-8">CERO RESACA</span><span className="text-black text-xl">✦</span>
        </div>
      </motion.div>
    </div>
  );
}
