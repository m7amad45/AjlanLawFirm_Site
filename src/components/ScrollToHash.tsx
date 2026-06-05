import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHash = () => {
  // 👈 لقط الهاشتاج الحالي من رابط المتصفح (مثل #about أو #services)
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // 👈 تأخير ذكي بمقدار 100 ملي ثانية لضمان أن الـ React بنى الصفحة الرئيسية أولاً
      const timer = setTimeout(() => {
        // تنظيف الاسم من علامة الـ # (ليتحول من "#about" إلى "about")
        const targetId = hash.replace("#", "");

        // البحث عن القسم المكتوب بداخل الصفحة الرئيسية
        const element = document.getElementById(targetId);

        if (element) {
          // 👈 سحب الشاشة بنعومة فائقة للقسم المكتشف
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      // تنظيف الذاكرة والمؤقت عند مغادرة الصفحة
      return () => clearTimeout(timer);
    }
  }, [hash]); // يشتغل برمجياً بشكل تلقائي في كل مرة يتغير فيها الهاشتاج

  return null; // مكون وظيفي يعمل خلف الكواليس ولا يطبع تصميماً مرئياً
};
