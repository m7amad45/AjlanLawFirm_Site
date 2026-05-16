import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Mail,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Briefcase,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const TeamMember = () => {
  const { id } = useParams();
  const { t, dir } = useLanguage();
  const navigate = useNavigate();

  // هنا نقوم بجلب بيانات العضو بناءً على الـ ID من الرابط
  // ملاحظة: يمكنك وضع هذه البيانات في مصفوفة مستقلة أو استخدام الـ translations مباشرة
  const memberName = t(`team_member_${id}_name` as any);
  const memberRole = t(`team_member_${id}_role` as any);
  const memberBio = t(`team_member_${id}_bio` as any);

  return (
    <div className="min-h-screen bg-navy-deep pt-32 pb-20" dir={dir}>
      <div className="container">
        <Button
          variant="ghost"
          className="text-gold hover:text-white mb-8"
          onClick={() => navigate(-1)}
        >
          {dir === "rtl" ? (
            <ArrowRight className="ml-2 h-4 w-4" />
          ) : (
            <ArrowLeft className="mr-2 h-4 w-4" />
          )}
          {dir === "rtl" ? "العودة للفريق" : "Back to Team"}
        </Button>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* عمود الصورة */}
          <div className="lg:col-span-4">
            <div className="border border-gold/20 p-2 bg-navy shadow-2xl">
              <img
                src={`/assets/team/${id}.jpeg`} // تأكد من تسمية صورك بأرقام 1, 2, 3...
                alt={memberName}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>

          {/* عمود البيانات */}
          <div className="lg:col-span-8 text-cream">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
              {memberName}
            </h1>
            <p className="text-xl text-cream/60 uppercase tracking-widest mb-8">
              {memberRole}
            </p>

            <div className="space-y-12">
              {/* النبذة الشخصية */}
              <section>
                <div className="flex items-center gap-3 mb-4 text-gold">
                  <User size={20} />
                  <h3 className="text-lg font-bold uppercase tracking-tighter">
                    {dir === "rtl" ? "النبذة المهنية" : "Professional Bio"}
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-cream/80 border-s-2 border-gold/20 ps-6">
                  {memberBio}
                </p>
              </section>

              {/* التعليم والخبرات */}
              <div className="grid md:grid-cols-2 gap-8">
                <section className="bg-navy/40 p-6 border border-white/5">
                  <GraduationCap className="text-gold mb-4" />
                  <h4 className="font-bold mb-2">
                    {dir === "rtl" ? "التعليم" : "Education"}
                  </h4>
                  <p className="text-sm text-cream/70">
                    {t(`team_member_${id}_education` as any)}
                  </p>
                </section>

                <section className="bg-navy/40 p-6 border border-white/5">
                  <Briefcase className="text-gold mb-4" />
                  <h4 className="font-bold mb-2">
                    {dir === "rtl" ? "مجالات الخبرة" : "Expertise"}
                  </h4>
                  <p className="text-sm text-cream/70">
                    {t(`team_member_${id}_exp` as any)}
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
