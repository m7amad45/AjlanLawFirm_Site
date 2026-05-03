import {
  Scale,
  Building2,
  Users,
  Briefcase,
  Home,
  HardHat,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Practice = () => {
  const { t, dir } = useLanguage();

  const areas = [
    {
      icon: Scale,
      title: t("practice_criminal_title"),
      desc: t("practice_criminal_desc"),
    },
    {
      icon: Building2,
      title: t("practice_corporate_title"),
      desc: t("practice_corporate_desc"),
    },
    {
      icon: Users,
      title: t("practice_family_title"),
      desc: t("practice_family_desc"),
    },
    {
      icon: Briefcase,
      title: t("practice_commercial_title"),
      desc: t("practice_commercial_desc"),
    },
    {
      icon: Home,
      title: t("practice_realestate_title"),
      desc: t("practice_realestate_desc"),
    },
    {
      icon: HardHat,
      title: t("practice_labor_title"),
      desc: t("practice_labor_desc"),
    },
  ];

  return (
    <section
      id="practice"
      className="pt-10 pb-16 md:pt-8 md:pb-8 bg-navy-deep text-cream relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, hsl(var(--gold)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3 justify-center mb-5">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
              {t("practice_eyebrow")}
            </span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-5 text-balance">
            {t("practice_title")}
          </h2>
          <p className="text-cream/70 text-lg">{t("practice_subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15">
          {areas.map((a) => (
            <div
              key={a.title}
              className="bg-card p-8 md:p-10 group hover:bg-navy transition-colors duration-500 relative overflow-hidden"
            >
              <a.icon
                className="h-10 w-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-500"
                strokeWidth={1.25}
              />
              <h3 className="font-display text-2xl font-semibold mb-3">
                {a.title}
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed mb-0">
                {a.desc}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
