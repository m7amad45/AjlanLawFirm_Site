import { Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import l1 from "@/assets/Mohammed_Erfan.jpeg";
import l2 from "@/assets/Osama_Johary.jpeg";
import l3 from "@/assets/Mohammed_Ajlan.jpeg";

export const Team = () => {
  const { t } = useLanguage();
  const team = [
    { img: l3, name: t("team_member_1_name"), role: t("team_member_1_role") },
    { img: l2, name: t("team_member_2_name"), role: t("team_member_2_role") },
    { img: l1, name: t("team_member_3_name"), role: t("team_member_3_role") },
  ];

  return (
    <section id="team" className="pt-10 pb-16 md:pt-12 md:pb-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3 justify-center mb-5">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
              {t("team_eyebrow")}
            </span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-semibold mb-5 text-balance">
            {t("team_title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("team_subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((m) => (
            <div key={m.name} className="group">
              <div className="relative overflow-hidden mb-6 bg-navy">
                <img
                  src={m.img}
                  alt={m.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-[420px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <a href="#" className="w-10 h-10 bg-gold text-navy flex items-center justify-center hover:bg-cream transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#contact" className="w-10 h-10 bg-gold text-navy flex items-center justify-center hover:bg-cream transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl font-semibold text-cream">{m.name}</h3>
                <div className="gold-divider mx-auto my-3" />
                <p className="text-muted-foreground uppercase tracking-wider text-xs">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
