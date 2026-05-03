import { Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// استيراد الصور
import l1 from "@/assets/Mohammed_Ajlan.jpeg";
import l2 from "@/assets/Osama_Johary.jpeg";
import l3 from "@/assets/Mohammed_Erfan.jpeg";
import l4 from "@/assets/Abeer_Sufiany.jpeg";
import l5 from "@/assets/Sadeem_Sabhani.jpeg";
import l6 from "@/assets/Abdulrahman_Amoudi.jpeg";
import l7 from "@/assets/Nedal_Bamejally.jpeg";
import l8 from "@/assets/Hassan_Abdelkareem.jpeg";

export const Team = () => {
  const { t } = useLanguage();

  const teamData = {
    leader: [
      {
        id: "leader",
        img: l1,
        name: t("team_member_1_name"),
        role: t("team_member_1_role"),
        email: "m.ajlan@ajlanlawexperts.com",
      },
    ],
    management: [
      {
        img: l3,
        name: t("team_member_3_name"),
        role: t("team_member_3_role"),
        email: "m.erfan@ajlanlawexperts.com",
      },
      {
        img: l2,
        name: t("team_member_2_name"),
        role: t("team_member_2_role"),
        email: "o.aljohary@ajlanlawexperts.com",
      },
      {
        img: l6,
        name: t("team_member_6_name"),
        role: t("team_member_6_role"),
        email: "a.alamoudi@ajlanlawexperts.com",
      },
      {
        img: l5,
        name: t("team_member_5_name"),
        role: t("team_member_5_role"),
        email: "s.sabhani@ajlanlawexperts.com",
      },
      {
        img: l4,
        name: t("team_member_4_name"),
        role: t("team_member_4_role"),
        email: "a.alsufiany@ajlanlawexperts.com",
      },
    ],
    support: [
      {
        img: l7,
        name: t("team_member_7_name"),
        role: t("team_member_7_role"),
        email: "n.bamejally@ajlanlawexperts.com",
      },
      {
        img: l8,
        name: t("team_member_8_name"),
        role: t("team_member_8_role"),
        email: "h.abdelkareem@ajlanlawexperts.com",
      },
    ],
  };

  const MemberCard = ({
    m,
    isLeader = false,
  }: {
    m: any;
    isLeader?: boolean;
  }) => (
    <div className="group relative">
      <div
        className={`relative overflow-hidden mb-3 bg-navy border border-white/5 transition-all duration-500 hover:border-gold/30 ${isLeader ? "border-gold/50 shadow-lg shadow-gold/10" : ""}`}
      >
        <img
          src={m.img}
          alt={m.name}
          className="w-full h-[320px] md:h-[350px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <a
            href={`mailto:${m.email}`}
            className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center hover:bg-white transition-all shadow-lg"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="text-center">
        {/* الاسم: تم تغيير الخط ليكون Bold وبروز أكبر */}
        <h3
          className={`font-display font-bold tracking-wide transition-colors ${isLeader ? "text-gold text-2xl md:text-3xl" : "text-cream text-lg md:text-xl-lg group-hover:text-gold"}`}
        >
          {m.name}
        </h3>
        {/* المنصب: تم تغييره للأبيض، تكبير الخط، وتقليل التباعد العنيف */}
        <p className="text-[12px] md:text-[18px] text-cream/80 font-medium uppercase tracking-[0.1em] mt-2">
          {m.role}
        </p>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-8 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-cream font-bold">
            {t("team_title")}
          </h2>
          <div className="h-1 w-16 bg-gold mx-auto mt-3" />
        </div>

        <div className="flex flex-col gap-y-16">
          {/* 1. القيادة العليا */}
          <div className="flex flex-col items-center">
            <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 opacity-80">
              {t("team_category_leader")}
            </h4>
            <div className="w-full max-w-[300px]">
              {teamData.leader.map((m, i) => (
                <MemberCard key={i} m={m} isLeader={true} />
              ))}
            </div>
          </div>

          {/* 2. الإدارة */}
          <div className="w-full">
            <div className="flex items-center gap-4 mb-8">
              <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold whitespace-nowrap">
                {t("team_category_management")}
              </h4>
              <div className="h-px w-full bg-gold/10" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              {teamData.management.map((m, i) => (
                <div
                  key={i}
                  className={`${i === 4 ? "col-span-2 lg:col-span-1 flex justify-center lg:block" : ""}`}
                >
                  <div
                    className={
                      i === 4
                        ? "w-full max-w-[calc(50%-12px)] lg:max-w-full"
                        : ""
                    }
                  >
                    <MemberCard m={m} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. فريق الدعم */}
          <div className="w-full">
            <div className="flex items-center gap-4 mb-8">
              <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold whitespace-nowrap">
                {t("team_category_support")}
              </h4>
              <div className="h-px w-full bg-gold/10" />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {teamData.support.map((m, i) => (
                <div key={i} className="w-[calc(50%-12px)] md:w-[240px]">
                  <MemberCard m={m} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
