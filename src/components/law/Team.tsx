import { Linkedin, Mail, ChevronRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useRef } from "react";
import l1 from "@/assets/Mohammed_Ajlan.jpeg";
import l2 from "@/assets/Osama_Johary.jpeg";
import l3 from "@/assets/Mohammed_Erfan.jpeg";
import l4 from "@/assets/Abeer_Sufiany.jpeg";
import l5 from "@/assets/Sadeem_Sabhani.jpeg";
import l6 from "@/assets/Abdulrahman_Amoudi.jpeg";

export const Team = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const team = [
    { 
      id: "leader", 
      img: l1, 
      name: t("team_member_1_name"), 
      role: t("team_member_1_role"),
      email: "m.ajlan@ajlanlawexperts.com",
      linkedin: "https://linkedin.com" // رابط مؤقت
    },
    { 
      id: "staff", 
      img: l2, 
      name: t("team_member_2_name"), 
      role: t("team_member_2_role"),
      email: "o.aljohary@ajlanlawexperts.com",
      linkedin: "https://linkedin.com"
    },
    { 
      id: "staff", 
      img: l3, 
      name: t("team_member_3_name"), 
      role: t("team_member_3_role"),
      email: "m.erfan@ajlanlawexperts.com",
      linkedin: "https://linkedin.com"
    },
    { 
      id: "staff", 
      img: l6, // عبدالرحمن العامودي
      name: t("team_member_6_name"), 
      role: t("team_member_6_role"),
      email: "a.alamoudi@ajlanlawexperts.com",
      linkedin: "https://linkedin.com"
    },
    { 
      id: "staff", 
      img: l5, // سديم سبهاني
      name: t("team_member_5_name"), 
      role: t("team_member_5_role"),
      email: "s.sabhani@ajlanlawexperts.com",
      linkedin: "https://linkedin.com"
    },
    { 
      id: "staff", 
      img: l4, // عبير السفياني
      name: t("team_member_4_name"), 
      role: t("team_member_4_role"),
      email: "a.alsufiany@ajlanlawexperts.com",
      linkedin: "https://linkedin.com"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="team" className="pt-10 pb-16 md:pt-12 md:pb-20 bg-background overflow-hidden">
      <div className="container relative">
        
        {/* قسم العناوين */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3 justify-center mb-5">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
              {t("team_eyebrow")}
            </span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-semibold mb-5 italic">
            {t("team_title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("team_subtitle")}
          </p>
        </div>

        {/* حاوية الشريط */}
        <div className="relative px-2 md:px-12">
          
          {/* أسهم التنقل */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute -left-2 md:left-2 top-[40%] -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-gold text-navy hover:bg-cream transition-all rounded-full shadow-2xl"
          >
            <ChevronLeft size={20} />
          </button>

          <button 
            onClick={() => scroll('right')} 
            className="absolute -right-2 md:right-2 top-[40%] -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-gold text-navy hover:bg-cream transition-all rounded-full shadow-2xl"
          >
            <ChevronRight size={20} />
          </button>

          {/* الشريط - جميع الكروت بحجم موحد */}
          <div 
            ref={scrollRef}
            className="flex items-start overflow-x-auto gap-8 no-scrollbar pb-10 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {team.map((m, index) => {
              const isLeader = m.id === "leader";

              return (
                <div key={index} className="min-w-[280px] md:min-w-[320px] group snap-center">
                  
                  {/* كرت الصورة - الإطار الذهبي للمدير فقط */}
                  <div className={`relative overflow-hidden mb-6 bg-navy shadow-2xl transition-all duration-500 
                    ${isLeader 
                      ? 'border-[6px] border-gold ring-4 ring-gold/10' 
                      : 'border border-white/5 hover:border-gold/30'
                    }`}>
                    
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                    />
                    
                    {/* طبقة التدرج اللوني عند التحويم */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* أيقونات التواصل */}
                    <div className="absolute bottom-6 left-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <a href="#" className="w-9 h-9 bg-gold text-navy flex items-center justify-center hover:bg-white transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href={`mailto:${m.email}`} className="w-9 h-9 bg-gold text-navy flex items-center justify-center hover:bg-white transition-colors">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                  
                  {/* بيانات الموظف */}
                  <div className="text-center px-4">
                    <h3 className={`font-display text-xl md:text-2xl font-semibold transition-colors 
                      ${isLeader ? 'text-gold' : 'text-cream group-hover:text-gold'}`}>
                      {m.name}
                    </h3>
                    <div className="gold-divider mx-auto my-3" />
                    <p className={`uppercase tracking-wider text-[10px] leading-relaxed 
                      ${isLeader ? 'text-cream font-bold' : 'text-muted-foreground'}`}>
                      {m.role}
                    </p>
                    
                    {/* <a 
                      href={`/team/${m.name.replace(/\s+/g, '-').toLowerCase()}`} 
                      className="mt-4 text-gold hover:text-white text-[10px] font-black tracking-widest uppercase italic transition-all block"
                    >
                      {t("read_more") || "اقرأ المزيد"} &gt;
                    </a> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};