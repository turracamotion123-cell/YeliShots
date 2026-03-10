export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4 md:px-12 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <a href="#hero" className="flex items-center hover:opacity-80 transition-opacity cursor-pointer">
          <img 
            src="https://i.postimg.cc/1tgPqyTz/Diseno-sin-titulo-(12).png" 
            alt="YeliShots Logo" 
            className="h-16 w-auto"
            referrerPolicy="no-referrer"
          />
        </a>

        <div className="flex flex-col md:flex-row gap-8 font-body text-sm uppercase tracking-widest text-white/60">
          <a href="https://www.instagram.com/yelishots?igsh=MTUyb3QwMDhoOW05cA==" target="_blank" rel="noopener noreferrer" className="hover:text-neon-magenta transition-colors">Instagram</a>
          <a href="https://www.tiktok.com/@yelishotsoficial?_r=1&_t=ZS-94a7fBBTEuX" target="_blank" rel="noopener noreferrer" className="hover:text-neon-magenta transition-colors">TikTok</a>
          <a href="https://www.facebook.com/share/15k1AZ1d8T2/" target="_blank" rel="noopener noreferrer" className="hover:text-neon-magenta transition-colors">Facebook</a>
          <a href="mailto:contacto@yelishots.com" className="hover:text-white transition-colors">Contacto</a>
        </div>

        <div className="font-body text-xs text-white/40 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} YeliShots. Todos los derechos reservados.<br/>
          Bebe con moderación. Prohibida su venta a menores de 18 años.
        </div>

      </div>
    </footer>
  );
}
