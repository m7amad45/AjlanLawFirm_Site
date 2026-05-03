import { Shield, Award, Gavel } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import aboutImg from "@/assets/about-office.png";

export const About = () => {
  const { t } = useLanguage();
  const values = [
    {
      icon: Shield,
      title: t("about_value_1_title"),
      desc: t("about_value_1_desc"),
    },
    {
      icon: Gavel,
      title: t("about_value_2_title"),
      desc: t("about_value_2_desc"),
    },
    {
      icon: Award,
      title: t("about_value_3_title"),
      desc: t("about_value_3_desc"),
    },
  ];

  return (
    <section id="about" className="pt-12 pb-8 bg-background overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        {/* جهة الصورة - تم تعديل القص ليملأ المربع بالكامل */}
        <div className="relative order-2 lg:order-1">
          {/* لمسة توهج خلفية لإبراز الصورة (اختياري، يمكن حذفه إذا كنت تفضل البساطة المطلقة) */}
          <div className="absolute -inset-4 bg-gold/5 blur-2xl -z-10 rounded-full opacity-50" />

          {/* حاوية الصورة الرئيسية (المربع الكامل) */}
          <div className="relative z-10 bg-navy-light/10 backdrop-blur-md border border-gold/10 shadow-luxury overflow-visible aspect-square lg:aspect-auto lg:h-[650px]">
            <img
              src={aboutImg}
              alt="Mohammed Ajlan Law Firm"
              // {/* هنا السر:object-cover مع object-center لقص ذكي يملأ المربع ويركز على اليد والعلم */}
              className="w-full h-full object-cover object-center shadow-luxury"
            />

            {/* الوسام الذهبي المربع (+30 عام) */}
            <div className="absolute -bottom-8 ltr:-right-8 rtl:-left-8 bg-gradient-gold p-6 shadow-luxury min-w-[140px] aspect-square flex flex-col items-center justify-center z-20 border border-gold/20 hover:scale-105 transition-transform duration-300">
              <div className="font-display text-5xl text-navy-deep font-bold leading-none tracking-tighter">
                30+
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] mt-3 text-navy-deep font-bold leading-tight text-center">
                {t("hero_stat_years")}
              </div>
            </div>
          </div>
        </div>

        {/* جهة النصوص (لا تغيير هنا) */}
        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold/40" />
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">
              {t("about_eyebrow")}
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream font-semibold mb-8 leading-[1.15] text-balance">
            {t("about_title")}
          </h2>

          <div className="space-y-6 mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed border-s-2 border-gold/20 ps-6">
              {t("about_p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed ps-6 opacity-80">
              {t("about_p2")}
            </p>
          </div>

          <div className="grid gap-8">
            {values.map((v) => (
              <div key={v.title} className="flex gap-6 group">
                <div className="shrink-0 w-12 h-12 border border-gold/30 bg-navy-light/50 text-gold flex items-center justify-center transition-all duration-300 group-hover:bg-gold group-hover:text-navy-deep group-hover:scale-110 shadow-sm">
                  <v.icon className="h-6 w-6" strokeWidth={1.2} />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-xl font-semibold text-cream mb-1 group-hover:text-gold transition-colors duration-300">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md opacity-70">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
