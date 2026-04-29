import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-justice.jpg";

// 1. تأكد من تحديث الاستيراد في أعلى الملف ليشمل animate
import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

const Counter = ({
  value,
  duration = 1.5,
}: {
  value: string;
  duration?: number;
}) => {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // استخراج الرقم واللاحقة (مثل K+)
  const target = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  useEffect(() => {
    if (isInView) {
      // ميزة: استخدام animate مباشرة لضمان سرعة ثابتة (Linear) وعدم التعليق في النهاية
      const controls = animate(0, target, {
        duration: duration,
        ease: "linear",
        onUpdate: (latest) => {
          setDisplay(Math.floor(latest).toLocaleString());
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

export const Hero = () => {
  const { t, dir } = useLanguage();
  const Arrow = () => (
    <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Lady Justice statue"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      <div className="container relative z-10 pt-32 pb-10">
        <div className="max-w-3xl animate-fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-medium">
              {t("hero_eyebrow")}
            </span>
          </div>

          <h1
            className={`font-display font-semibold text-cream leading-[1.1] mb-8 text-balance transition-all duration-500
  ${
    dir === "rtl"
      ? "text-4xl md:text-6xl tracking-tight" // العربي: نص أصغر قليلاً وتضييق مسافات
      : "text-5xl md:text-7xl tracking-normal" // الإنجليزي: الحجم الأصلي
  }`}
          >
            {t("hero_title")}
          </h1>

          <p className="text-lg md:text-xl text-cream/80 mb-10 max-w-2xl leading-relaxed">
            {t("hero_subtitle")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="gold" size="lg">
              <a href="#contact" className="gap-2">
                {t("hero_cta_primary")} <Arrow />
              </a>
            </Button>
            <Button asChild variant="outlineGold" size="lg">
              <a href="#practice">{t("hero_cta_secondary")}</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 md:gap-12 mt-16 pt-10 border-t border-gold/20 max-w-2xl">
            {[
              { n: "30+", l: t("hero_stat_years") },
              { n: "53K+", l: t("hero_stat_cases") },
              { n: "27K+", l: t("hero_stat_clients") },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group"
              >
                <div className="font-display text-3xl md:text-5xl text-gold font-semibold transition-transform duration-500 group-hover:scale-110">
                  {/* الميزة الجديدة: استبدلنا الرقم الثابت بالعداد */}
                  <Counter value={s.n} />
                </div>

                <div className="text-cream/70 text-xs md:text-sm uppercase tracking-wider mt-1 relative inline-block">
                  {s.l}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold/50 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
