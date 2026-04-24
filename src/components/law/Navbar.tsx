import { useState, useEffect } from "react";
import { Menu, X, Languages, ArrowRight } from "lucide-react"; // ميزة 1: أيقونات جديدة
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const { t, lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: t("nav_home") },
    { href: "#about", label: t("nav_about") },
    { href: "#practice", label: t("nav_practice") },
    { href: "#team", label: t("nav_team") },
    { href: "#contact", label: t("nav_contact") },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-luxury" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        {/* قسم اللوجو والنص */}
        {/* قسم اللوجو والنص - تم تعديله ليكون أفقياً وثابتاً */}
        <a href="#home" className="flex items-center gap-3 text-cream group">
          <img 
            src={logo} 
            alt="Ajlan Law Firm Logo" 
            className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          
          <div className="flex flex-col justify-center border-l border-gold/30 pl-3 py-1">
            {/* اسم الشركة ثابت وصغير */}
            <div className="font-display text-[12px] md:text-[14px] font-bold tracking-[0.05em] text-cream leading-tight uppercase">
              {t("brand_name")}
            </div>
            
            {/* التاغ لاين صغير جداً */}
            <div className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-gold/90 whitespace-nowrap mt-0.5 leading-none font-medium">
              {t("brand_tagline")}
            </div>
          </div>
        </a>

        {/* القائمة الرئيسية */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-cream/85 hover:text-gold transition-colors uppercase tracking-wider">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* ميزة 2: زر اللغة الكبسولي (المعدل) */}
          <button
            onClick={toggle}
            className="hidden sm:flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold/30 text-cream bg-black/20 hover:bg-gold/10 hover:border-gold/50 transition-all duration-300"
          >
            <Languages className="h-4 w-4 text-gold/90" strokeWidth={1.5} />
            <span className="text-[13px] font-medium tracking-wide">
              {lang === "en" ? "ع" : "EN"}
            </span>
          </button>

          {/* ميزة 3: زر الاستشارة مع السهم واللمعان (المعدل) */}
          {/* <Button asChild variant="gold" size="sm" className="hidden sm:inline-flex group relative overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg">
            <a href="#contact" className="flex items-center gap-2">
              <span className="relative z-10">{t("nav_consult")}</span>
              <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </Button> */}

          <button className="lg:hidden text-cream" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* قائمة الجوال */}
      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-gold/20 animate-in fade-in slide-in-from-top-4">
          <ul className="container py-6 flex flex-col gap-4 text-center items-center">
            {links.map((l) => (
              <li key={l.href} className="w-full">
                <a href={l.href} onClick={() => setOpen(false)} className="block text-cream/90 py-2 text-sm hover:text-gold uppercase tracking-wider">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="w-full pt-2 border-t border-gold/10">
              <button onClick={() => { toggle(); setOpen(false); }} className="flex items-center justify-center gap-2 text-gold py-2 w-full">
                <Languages className="h-4 w-4" />
                {lang === "en" ? "ع" : "En"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};