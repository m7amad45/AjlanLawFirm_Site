import { useParams, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
// استيراد خطاف اللغة القياسي من مشروعك
import { useLanguage } from "@/i18n/LanguageContext";
import { useEffect } from "react"; // 👈 تأكد من وجود هذا السطر في أعلى الملف
// ================= 🖼️ استيراد صور الموظفين الرسمية للنقاء الكامل =================
import imgAjlan from "@/assets/Mohammed_Ajlan.jpeg";
import imgKamiran from "@/assets/KAMIRAN DAKOURI.png";
import imgOsama from "@/assets/Osama_Johary.png";
import imgErfan from "@/assets/Mohammed_Erfan.png";
import imgAbeer from "@/assets/Abeer_Sufiany.jpeg";
import imgSadeem from "@/assets/Sadeem_Sabhani.jpeg";
import imgAbdulrahman from "@/assets/Abdulrahman_Amoudi.png";

import { dir } from "console";

// خريطة برمجية لربط الـ slug القادم من الرابط بالصورة الصحيحة والإيميل والرقم التعريفي في ملف الترجمة
const teamConfig: Record<string, { id: number; email: string; image: string }> =
  {
    "mohammed-ajlan": {
      id: 1,
      email: "m.ajlan@ajlanlawexperts.com",
      image: imgAjlan,
    },
    "kamiran-dakouri": {
      id: 10,
      email: "k.dakouri@ajlanlawexperts.com",
      image: imgKamiran,
    },
    "osama-aljohary": {
      id: 2,
      email: "o.johary@ajlanlawexperts.com",
      image: imgOsama,
    },
    "mohammed-erfan": {
      id: 3,
      email: "m.erfan@ajlanlawexperts.com",
      image: imgErfan,
    },
    "abeer-alsufyani": {
      id: 4,
      email: "a.sufiany@ajlanlawexperts.com",
      image: imgAbeer,
    },
    "sadeem-subhani": {
      id: 5,
      email: "s.subhani@ajlanlawexperts.com",
      image: imgSadeem,
    },
    "abdulrahman-alamoudi": {
      id: 6,
      email: "a.amoudi@ajlanlawexperts.com",
      image: imgAbdulrahman,
    },
  };

export const TeamMember = () => {
  const { t, dir } = useLanguage();
  const params = useParams();
  const location = useLocation();

  // استخراج الـ slug بأمان من الـ Router أو من رابط المتصفح الفعلي بشكل متوافق 100%
  const currentSlug =
    Object.keys(teamConfig).find(
      (key) =>
        params.id === key ||
        (params as any).slug === key ||
        location.pathname.endsWith(key) ||
        location.pathname.includes("/" + key),
    ) || "mohammed-ajlan";

  const currentMember = teamConfig[currentSlug];
  const memberId = currentMember.id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlug]);

  // توليد المفاتيح النصية الحركية ديناميكياً
  const memberName = t(`team_member_${memberId}_name` as any);
  const memberRole = t(`team_member_${memberId}_role` as any);
  const memberEmail = currentMember.email;
  const memberImage = currentMember.image;

  // الحل الذكي الجديد: حماية الأقسام من الظهور إذا كانت الترجمة مفقودة

  // 1. المؤهلات العلمية
  const qualKey = `team_member_${memberId}_qualifications_text`;
  const qualRaw = t(qualKey as any);
  const qualifications =
    !qualRaw || qualRaw === qualKey ? [] : qualRaw.split("\n").filter(Boolean);

  // 2. الخبرة المهنية
  const expKey = `team_member_${memberId}_experience_text`;
  const expRaw = t(expKey as any);
  const experiences =
    !expRaw || expRaw === expKey ? [] : expRaw.split("\n").filter(Boolean);

  // 3. مجالات التخصص
  const specKey = `team_member_${memberId}_specialization_text`;
  const specRaw = t(specKey as any);
  const specializations =
    !specRaw || specRaw === specKey ? [] : specRaw.split("\n").filter(Boolean);

  // 🟢 أإضافة قراءة قسم النبذة التعريفية لمحمد عجلان
  const speechKey = `team_member_${memberId}_speech_text`;
  const speechRaw = t(speechKey as any);
  const speechParagraphs =
    !speechRaw || speechRaw === speechKey
      ? []
      : speechRaw.split("\n").filter(Boolean);

  // 🟢 إضافة قراءة قسم العضويات المهنية لمحمد عجلان
  const achKey = `team_member_${memberId}_achievements_text`;
  const achRaw = t(achKey as any);
  const achievements =
    !achRaw || achRaw === achKey ? [] : achRaw.split("\n").filter(Boolean);

  // 🟢 إضافة قراءة قسم القيم والالتزام لمحمد عجلان
  const valuesKey = `team_member_${memberId}_values_text`;
  const valuesRaw = t(valuesKey as any);
  const valuesParagraphs =
    !valuesRaw || valuesRaw === valuesKey
      ? []
      : valuesRaw.split("\n").filter(Boolean);

  // 4. اللغات
  const langKey = `team_member_${memberId}_languages_text`;
  const langRaw = t(langKey as any);
  const languages =
    !langRaw || langRaw === langKey ? [] : langRaw.split("\n").filter(Boolean);

  return (
    <div className="w-full text-cream pt-32 pb-20 bg-background" dir={dir}>
      <div className="container mx-auto px-4 max-w-5xl space-y-12">
        {/* ================= قسم العنوان: الاسم والمنصب مباشرة تحته ================= */}
        <div className="flex flex-col items-center justify-center text-center space-y-3 pt-6">
          <div className="w-10 h-[2px] bg-gold opacity-80" />
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-cream font-display">
            {memberName}
          </h1>
          {/* المنصب تحت الاسم مباشرة باللون الذهبي الفخم */}
          <p className="text-base md:text-lg text-gold font-medium uppercase tracking-widest font-display pt-1">
            {memberRole}
          </p>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-12 mt-2" />

        {/* ================= هندسة الـ Grid: البيانات والصورة بجانب بعضهما بالكامل ================= */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start pt-2">
          {/* 📜 العمود الأيمن (7 أعمدة): يحتوي على الأقسام الأربعة مسرودة بجانب الصورة */}
          {/* 📜 العمود الأيمن (7 أعمدة): يحتوي على الأقسام مسرودة بجانب الصورة */}
          <div className="md:col-span-7 space-y-10 text-justify ltr:text-left rtl:text-right order-2 md:order-1">
            {/* 🟢 1. قسم النبذة التعريفية (يظهر فقط لمن يمتلك هذا الكي في الـ JSON) */}
            {speechParagraphs.length > 0 && (
              <div className="bg-gold/[0.02] p-6 rounded-sm border-l-2 rtl:border-l-0 rtl:border-r-2 border-gold/40 my-4">
                <h3 className="text-xl font-medium text-gold font-display mb-3">
                  {t(`team_member_${memberId}_speech_title` as any)}
                </h3>
                <div className="space-y-3 text-cream/90 text-[15px] leading-relaxed font-light">
                  {speechParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* 1. المؤهلات العلمية */}
            {qualifications.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-gold font-display border-b border-white/5 pb-2">
                  {t("member_section_qualifications" as any)}
                </h3>
                <ul className="space-y-3 text-cream/80 text-[15px] md:text-base leading-relaxed list-none ltr:pl-1 rtl:pr-1">
                  {qualifications.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 group">
                      <ChevronRight
                        size={16}
                        className="text-gold mt-1 shrink-0 transition-transform duration-300 ltr:rotate-0 rtl:rotate-180 opacity-60"
                      />
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* 2. الخبرة المهنية */}
            {experiences.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-gold font-display border-b border-white/5 pb-2">
                  {t("member_section_experience" as any)}
                </h3>
                <ul className="space-y-3 text-cream/80 text-[15px] md:text-base leading-relaxed list-none ltr:pl-1 rtl:pr-1">
                  {experiences.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 group">
                      <ChevronRight
                        size={16}
                        className="text-gold mt-1 shrink-0 transition-transform duration-300 ltr:rotate-0 rtl:rotate-180 opacity-60"
                      />
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 3. مجالات التخصص */}
            {specializations.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-gold font-display border-b border-white/5 pb-2">
                  {t("member_section_specialization" as any)}
                </h3>
                <ul className="space-y-3 text-cream/80 text-[15px] md:text-base leading-relaxed list-none ltr:pl-1 rtl:pr-1">
                  {specializations.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 group">
                      <ChevronRight
                        size={16}
                        className="text-gold mt-1 shrink-0 transition-transform duration-300 ltr:rotate-0 rtl:rotate-180 opacity-60"
                      />
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 🟢 2. قسم العضويات المهنية لمحمد عجلان */}
            {achievements.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-gold font-display border-b border-white/5 pb-2">
                  {t(`team_member_${memberId}_achievements_title` as any)}
                </h3>
                <ul className="space-y-3 text-cream/80 text-[15px] md:text-base leading-relaxed list-none ltr:pl-1 rtl:pr-1">
                  {achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 group">
                      <ChevronRight
                        size={16}
                        className="text-gold mt-1 shrink-0 transition-transform duration-300 ltr:rotate-0 rtl:rotate-180 opacity-60"
                      />
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 🟢 3. قسم القيم والالتزام المهني لمحمد عجلان */}
            {valuesParagraphs.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-gold font-display border-b border-white/5 pb-2">
                  {t(`team_member_${memberId}_values_title` as any)}
                </h3>
                <div className="space-y-3 text-cream/80 text-[15px] md:text-base leading-relaxed font-light">
                  {valuesParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* 4. اللغات */}
            {languages.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-gold font-display border-b border-white/5 pb-2">
                  {t("member_section_languages" as any)}
                </h3>
                <ul className="space-y-3 text-cream/80 text-[15px] md:text-base leading-relaxed list-none ltr:pl-1 rtl:pr-1">
                  {" "}
                  {languages.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 group">
                      <ChevronRight
                        size={16}
                        className="text-gold mt-1 shrink-0 transition-transform duration-300 ltr:rotate-0 rtl:rotate-180 opacity-60"
                      />
                      <span className="text-justify">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 🖼️ العمود الأيسر (5 أعمدة): يحتوي على كود الصورة الأصلي الخاص بك (مستطيلة فخمة) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center order-1 md:order-2 relative">
            <div className="relative w-full max-w-[320px] bg-navy border border-white/5 shadow-2xl overflow-hidden group rounded-sm">
              <img
                src={memberImage}
                alt={memberName}
                // {/* 👈 رجعنا كود الصورة الأصلي حقك بالملي h-[320px] md:h-[400px] والمحاذاة الفخمة للأعلى object-cover */}
                className="w-full h-[320px] md:h-[400px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <a
              href={`mailto:${memberEmail}`}
              className="mt-6 text-xs text-gold/60 hover:text-gold tracking-widest uppercase border-b border-gold/10 hover:border-gold pb-1 transition-all duration-300 font-medium"
            >
              {memberEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
