import { useState } from "react";
import { Linkedin, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
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
  const [showAll, setShowAll] = useState(false);

  const teamData = {
    leader: [
      { id: "leader", img: l1, name: t("team_member_1_name"), role: t("team_member_1_role"), email: "m.ajlan@ajlanlawexperts.com" }
    ],
    consultants: [
      { id: "staff", img: l3, name: t("team_member_3_name"), role: t("team_member_3_role"), email: "m.erfan@ajlanlawexperts.com" },
      { id: "staff", img: l2, name: t("team_member_2_name"), role: t("team_member_2_role"), email: "o.aljohary@ajlanlawexperts.com" }
    ],
    lawyers: [
      { id: "staff", img: l6, name: t("team_member_6_name"), role: t("team_member_6_role"), email: "a.alamoudi@ajlanlawexperts.com" },
      { id: "staff", img: l5, name: t("team_member_5_name"), role: t("team_member_5_role"), email: "s.sabhani@ajlanlawexperts.com" }
    ],
    management: [
      { id: "staff", img: l4, name: t("team_member_4_name"), role: t("team_member_4_role"), email: "a.alsufiany@ajlanlawexperts.com" },
      { id: "staff", img: l7, name: t("team_member_7_name"), role: t("team_member_7_role"), email: "a.alsufiany@ajlanlawexperts.com" },
      { id: "staff", img: l8, name: t("team_member_8_name"), role: t("team_member_8_role"), email: "a.alsufiany@ajlanlawexperts.com" }
    ]
  };

  const MemberCard = ({ m }: { m: any }) => (
    <div className="group relative">
      <div className={`relative overflow-hidden mb-4 bg-navy shadow-xl transition-all duration-500 border border-white/5 hover:border-gold/30 ${m.id === 'leader' ? 'border-[4px] border-gold shadow-gold/20' : ''}`}>
        <img src={m.img} alt={m.name} className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
          <a href="#" className="w-8 h-8 bg-gold text-navy flex items-center justify-center hover:bg-white transition-colors"><Linkedin size={16} /></a>
          <a href={`mailto:legal@ajlanlawexperts.com`} className="w-8 h-8 bg-gold text-navy flex items-center justify-center hover:bg-white transition-colors"><Mail size={16} /></a>
        </div>
      </div>
      <div className="text-center">
        <h3 className={`font-display text-lg font-semibold transition-colors ${m.id === 'leader' ? 'text-gold text-xl' : 'text-cream group-hover:text-gold'}`}>{m.name}</h3>
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{m.role}</p>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-20 bg-background overflow-hidden">
      <div className="container">
        
        {/* العناوين الرئيسية */}
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl text-cream font-semibold ">{t("team_title")}</h2>
          <div className="h-1 w-20 bg-gold mx-auto mt-4" />
        </div>

        <div className="space-y-24">
          
          {/* 1. صف القيادة - محاذاة في النص */}
          <div className="flex flex-col items-center">
            <div className="text-center mb-10">
              <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2">القيادة العليا</h4>
              <div className="h-px w-10 bg-gold/30 mx-auto" />
            </div>
            <div className="w-full max-w-[320px]">
              {teamData.leader.map((m, i) => <MemberCard key={i} m={m} />)}
            </div>
          </div>

          {/* 2. صف المستشارين */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            <div className="md:col-span-1 border-r border-gold/20 pr-6 rtl:border-r-0 rtl:border-l rtl:pl-6">
              <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2">المستشارون</h4>
              <p className="text-muted-foreground text-[11px] leading-relaxed">نخبة من الخبراء القانونيين</p>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamData.consultants.map((m, i) => <MemberCard key={i} m={m} />)}
            </div>
          </div>

          {/* --- قسم الطي --- */}
          {showAll && (
            <div className="space-y-24 animate-in fade-in slide-in-from-top-10 duration-700">
              {/* 3. صف المحامون */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
                <div className="md:col-span-1 border-r border-gold/20 pr-6 rtl:border-r-0 rtl:border-l rtl:pl-6">
                  <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2">المحامون</h4>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamData.lawyers.map((m, i) => <MemberCard key={i} m={m} />)}
                </div>
              </div>

              {/* 4. صف الإدارة */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
                <div className="md:col-span-1 border-r border-gold/20 pr-6 rtl:border-r-0 rtl:border-l rtl:pl-6">
                  <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-2">الإدارة</h4>
                </div>
                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamData.management.map((m, i) => <MemberCard key={i} m={m} />)}
                </div>
              </div>
            </div>
          )}

          {/* زر إظهار المزيد / إخفاء */}
          <div className="flex justify-center pt-10">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group flex flex-col items-center gap-2 text-gold hover:text-white transition-all"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                {showAll ? "عرض أقل" : "إظهار كافة أعضاء الفريق"}
              </span>
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold transition-all">
                {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};