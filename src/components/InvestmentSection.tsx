import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, BarChart3, Download, FileText, PieChart, ArrowUpRight, DollarSign } from 'lucide-react';

const GOAL = 12000000;
const EQUITY_SHARE = 20; // 20% of profits

export const InvestmentSection = () => {
  const [investment, setInvestment] = useState<number>(100000);
  const currentCapital = 3360000; // Fixed starting point for demo (~28%)

  const progress = (currentCapital / GOAL) * 100;
  const userDividendShare = (investment / GOAL) * EQUITY_SHARE;

  // Format currency
  const formatARS = (val: number) => 
    new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(val);

  return (
    <section id="investment" className="py-24 bg-black overflow-hidden border-y border-white/10 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-magenta/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-magenta/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-24 text-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-block px-6 py-2 border border-neon-magenta/30 text-neon-magenta font-mono text-xs md:text-sm tracking-[0.5em] uppercase mb-8"
            >
                Oportunidad para la Tribu
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-display text-7xl md:text-9xl text-white mb-8 uppercase italic tracking-tighter leading-none"
            >
                INVERTÍ EN <span className="text-neon-magenta">LA POSTA</span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-body uppercase tracking-[0.1em] px-4 leading-relaxed mb-10"
            >
                No solo compres gomitas. Sé parte del movimiento que está redefiniendo la noche argentina. Escalabilidad real, tracción bruta.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <a 
                    href="/inversores.html" 
                    className="inline-flex items-center gap-4 px-8 py-4 bg-neon-magenta text-white font-display font-bold italic uppercase tracking-widest hover:bg-white hover:text-black transition-all group"
                >
                    Ver Propuesta Detallada <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
