import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function FloatingGummies() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      <motion.img 
        src="https://i.postimg.cc/brcB6P6J/3.png"
        alt="Gummy 1"
        className="absolute top-1/4 left-10 w-32 md:w-48 opacity-80 mix-blend-screen pointer-events-auto cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,0,127,0.8)] hover:scale-110"
        style={{ y: y1, rotate: rotate1 }}
        referrerPolicy="no-referrer"
      />
      <motion.img 
        src="https://i.postimg.cc/kGQhzHZ8/4.png"
        alt="Gummy 2"
        className="absolute top-1/2 right-10 w-40 md:w-64 opacity-90 mix-blend-screen pointer-events-auto cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,0,127,0.8)] hover:scale-110"
        style={{ y: y2, rotate: rotate2 }}
        referrerPolicy="no-referrer"
      />
      <motion.img 
        src="https://i.postimg.cc/Zn8D2QgN/5.png"
        alt="Gummy 3"
        className="absolute bottom-1/4 left-1/4 w-24 md:w-36 opacity-70 mix-blend-screen pointer-events-auto cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,0,127,0.8)] hover:scale-110"
        style={{ y: y3, rotate: rotate1 }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
