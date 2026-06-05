import { Mail, Info } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// استيراد الصور
import l1 from "@/assets/Mohammed_Ajlan.jpeg";
import l2 from "@/assets/Osama_Johary.png";
import l3 from "@/assets/Mohammed_Erfan.png";
import l4 from "@/assets/Abeer_Sufiany.jpeg";
import l5 from "@/assets/Sadeem_Sabhani.jpeg";
import l6 from "@/assets/Abdulrahman_Amoudi.png";
import l7 from "@/assets/Nedal_Bamejally.jpeg";
import l8 from "@/assets/Hassan_Abdelkareem.png";
import l9 from "@/assets/Yazzan_Ajlan.png";
import l10 from "@/assets/KAMIRAN DAKOURI.png";

import { useNavigate } from "react-router-dom"; // أضف هذا الاستيراد

export const Team = () => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate(); // السطر الجديد
  const teamData = {
    leader: [
      {
        slug: "mohammed-ajlan",
        id: "leader",
        img: l1,
        name: t("team_member_1_name"),
        role: t("team_member_1_role"),
        email: "m.ajlan@ajlanlawexperts.com",
      },
    ],
    management: [
      {
        slug: "kamiran-dakouri",
        img: l10,
        name: t("team_member_10_name"),
        role: t("team_member_10_role"),
        email: "k.dakouri@ajlanlawexperts.com",
      },
      {
        slug: "mohammed-erfan",
        img: l3,
        name: t("team_member_3_name"),
        role: t("team_member_3_role"),
        email: "m.erfan@ajlanlawexperts.com",
      },
      {
        slug: "osama-aljohary",
        img: l2,
        name: t("team_member_2_name"),
        role: t("team_member_2_role"),
        email: "o.aljohary@ajlanlawexperts.com",
      },
      {
        slug: "abdulrahman-alamoudi",
        img: l6,
        name: t("team_member_6_name"),
        role: t("team_member_6_role"),
        email: "a.alamoudi@ajlanlawexperts.com",
      },
      {
        slug: "sadeem-subhani",
        img: l5,
        name: t("team_member_5_name"),
        role: t("team_member_5_role"),
        email: "s.sabhani@ajlanlawexperts.com",
      },
      {
        img: l9,
        name: t("team_member_9_name"),
        role: t("team_member_9_role"),
        email: "y.ajlan@ajlanlawexperts.com",
      },
    ],
    support: [
      {
        slug: "abeer-alsufyani",
        img: l4,
        name: t("team_member_4_name"),
        role: t("team_member_4_role"),
        email: "a.alsufiany@ajlanlawexperts.com",
      },
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
    slug,
    isLeader = false,
  }: {
    m: any;
    slug?: string;
    isLeader?: boolean;
  }) => (
    <div className="group relative">
      <div
        className={`relative overflow-hidden mb-3 bg-navy border border-white/5 transition-all duration-500 hover:border-gold/30 ${isLeader ? "border-gold/50 shadow-lg shadow-gold/10" : ""}`}
      >
        <img
          src={m.img}
          alt={m.name}
          className="w-full aspect-square object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-20"
          dir="rtl"
        >
          {" "}
          {/* زر الـ Info الجديد - متطابق 100% في الشكل والتصميم ويظهر فقط عند وجود slug */}
          {slug && (
            <button
              onClick={() => navigate(`/team/${slug}`)} // خاصية الانتقال باستخدام الـ slug
              className="w-10 h-10 rounded-full bg-gold text-navy flex items-center justify-center hover:bg-white transition-all shadow-lg"
              title={dir === "rtl" ? "عرض السيرة الذاتية" : "View Profile"}
            >
              <Info size={18} />
            </button>
          )}
          <a
            href={`mailto:legal@ajlanlawexperts.com`}
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
        <p className="text-[12px] md:text-[16px] text-cream/70 font-light tracking-[0.1em] mt-2">
          {m.role}
          {/* 🟢 تم تعديله إلى font-light وتعديل كلاس الحجم إلى md:text-[16px] لمنع الضخامة العشوائية بالمنصب */}
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

        {/* 1. القيادة العليا */}
        {/* 🟢 قمنا بفرد الحاوية الأبوية لتصبح w-full لتسمح بإنشاء السطر الممتد بالكامل */}
        <div className="w-full">
          {/* سطر العنوان والخط الذهبي: ممتد أفقياً ومحاذى لليمين تماماً مثل باقي الأقسام */}
          <div className="w-full flex items-center gap-4 mb-8">
            <h4 className="text-gold uppercase tracking-[0.3em] text-[11px] font-normal whitespace-nowrap">
              {t("team_category_leader")}
            </h4>
            <div className="h-px w-full bg-gold/10" />
          </div>

          {/* حاوية الصورة: معزولة ومستقلة تماماً في المنتصف (items-center) لضمان ثبات التمركز بالملي */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[400px]">
              {teamData.leader.map((m, i) => (
                <MemberCard key={i} m={m} slug={m.slug} isLeader={true} />
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

            {/* 🟢 جعلنا الشبكة مرنة flex وتتوسط الصفحة، وأعطينا كل كرت حجم يدوي ثابت max-w-[224px] لتوحيد المقاس */}
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {teamData.management.map((m, i) => (
                <div key={i} className="w-full max-w-[224px]">
                  <MemberCard m={m} slug={m.slug} />
                </div>
              ))}
            </div>
          </div>

          {/* 3. فريق الدعم */}
          <div className="w-full">
            <div className="flex items-center gap-4 mb-8">
              <h4 className="text-gold uppercase tracking-[0.3em] text-[11px] font-normal whitespace-nowrap">
                {t("team_category_support")}
              </h4>
              <div className="h-px w-full bg-gold/10" />
            </div>

            {/* 🟢 حولناها إلى grid-cols-1 لضمان نزولهم تحت بعض بالملي، وثبتنا العرض الأقصى للحاوية على [224px] ليطابق حجم الفريق القانوني تماماً */}
            <div className="grid grid-cols-1 gap-10 max-w-[224px] mx-auto">
              {teamData.support.map((m, i) => (
                <div key={i} className="w-full">
                  <MemberCard m={m} slug={m.slug} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
