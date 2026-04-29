import { useLanguage } from "@/i18n/LanguageContext";
import SaudiLogo from "@/assets/sa-logo.svg";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const Footer = () => {
  const { t, dir } = useLanguage();

  return (
    <footer className="bg-navy-deep text-cream/70 pt-0 pb-8 relative" dir={dir}>
      {/* الخط الذهبي الفاصل */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-12" />

      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* العمود الأول: الهوية (ترتيب عمودي موحد في المنتصف) */}
          <div className="flex flex-col items-center md:items-start w-full">
            {/* الحاوية المركزية: تجمع كل العناصر المرتبطة ببعضها في المنتصف */}
            <div className="flex flex-col items-center w-fit">
              {/* 1. اللوقو */}
              <img
                src={SaudiLogo}
                alt="Saudi Logo"
                className="h-14 w-14 object-contain mb-3"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(84%) sepia(21%) saturate(996%) hue-rotate(352deg) brightness(97%) contrast(92%)",
                }}
              />

              {/* 2. اسم المكتب */}
              <h2 className="font-display text-xl md:text-2xl font-semibold text-cream leading-tight whitespace-nowrap">
                {t("brand_name")}
              </h2>

              {/* 3. السلوقان (للاستشارات القانونية والتحكيم) */}
              <p className="text-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-display not-italic mt-1 whitespace-nowrap text-center">
                {t("brand_tagline")}
              </p>

              {/* 4. جملة التميز (ثلاثة عقود من الإتقان...) - تم ضمها لكتلة التوسط */}
              <p className="mt-4 text-[11px] font-sans text-cream/30 max-w-[240px] leading-relaxed text-center">
                {t("footer_tagline")}
              </p>
            </div>
          </div>

          {/* العمود الثاني: التواصل (ملموم ومقسم بالعرض) */}
          <div className="flex flex-col gap-6">
            <h4 className="text-gold uppercase tracking-wider text-[11px] font-bold border-b border-gold/10 pb-2 w-fit">
              {t("nav_contact")}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-sm">
              {/* العنوان */}
              <div className="flex gap-3">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gold/50 uppercase tracking-widest mb-1">
                    {t("contact_info_address")}
                  </span>
                  <span className="text-cream/90">
                    {t("contact_address_value")}
                  </span>
                </div>
              </div>

              {/* البريد */}
              <div className="flex gap-3">
                <Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gold/50 uppercase tracking-widest mb-1">
                    {t("contact_info_email")}
                  </span>
                  <a
                    href="mailto:legal@ajlanlawexperts.com"
                    className="text-cream/90 hover:text-gold transition-colors break-all"
                  >
                    legal@ajlanlawexperts.com
                  </a>
                </div>
              </div>

              {/* الهاتف - عرض الأرقام بشكل ملموم */}
              <div className="flex gap-3 sm:col-span-1">
                <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5 rtl:-scale-x-100" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gold/50 uppercase tracking-widest mb-1">
                    {t("contact_info_phone")}
                  </span>
                  <div
                    className="flex flex-col text-cream/90 font-medium space-y-1"
                    dir="ltr"
                  >
                    <a
                      href="tel:+966505626810"
                      className="hover:text-gold transition-colors"
                    >
                      +966 50 562 6810
                    </a>
                    <a
                      href="tel:+966550092012"
                      className="hover:text-gold transition-colors"
                    >
                      +966 55 009 2012
                    </a>
                    <a
                      href="tel:+966126596999"
                      className="hover:text-gold transition-colors"
                    >
                      +966 12 659 6999
                    </a>
                  </div>
                </div>
              </div>

              {/* الواتساب */}
              <div className="flex gap-3">
                <MessageCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gold/50 uppercase tracking-widest mb-1">
                    {t("contact_info_Whatsapp")}
                  </span>
                  <div className="flex flex-col text-cream/90 font-medium space-y-1">
                    <a
                      href="https://wa.me/966126596999"
                      target="_blank"
                      rel="noreferrer"
                      dir="ltr"
                      className="text-cream/90 hover:text-gold transition-colors font-medium"
                    >
                      +966 12 659 6999
                    </a>
                    <a
                      href="https://wa.me/966505626810"
                      target="_blank"
                      rel="noreferrer"
                      dir="ltr"
                      className="text-cream/90 hover:text-gold transition-colors font-medium"
                    >
                      +966 50 562 6810
                    </a>
                    <a
                      href="https://wa.me/966550092012"
                      target="_blank"
                      rel="noreferrer"
                      dir="ltr"
                      className="text-cream/90 hover:text-gold transition-colors font-medium"
                    >
                      +966 55 009 2012
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* سطر الحقوق السفلي */}
        <div className="mt-12 pt-8 border-t border-gold/5 text-[9px] uppercase tracking-[0.4em] text-cream/20 text-center">
          © {new Date().getFullYear()} {t("brand_name")}. {t("footer_rights")}
        </div>
      </div>
    </footer>
  );
};
