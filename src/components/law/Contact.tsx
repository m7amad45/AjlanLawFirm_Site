import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mjglbylo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // إذا نجح الإرسال
        toast({
          title: t("contact_toast_title"),
          description: t("contact_toast_desc"),
        });
        form.reset();
      } else {
        // إذا حدث خطأ من السيرفر
        toast({
          variant: "destructive",
          title: "Error",
          description: "عذراً، حدث خطأ أثناء إرسال طلبك.",
        });
      }
    } catch (error) {
      // إذا حدث خطأ في الاتصال
      toast({
        variant: "destructive",
        title: "Error",
        description: "فشل الاتصال، تأكد من إنترنت لديك.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const info = [
    {
      icon: MapPin,
      label: t("contact_info_address"),
      value: t("contact_address_value"),
    },
    {
      icon: Phone,
      label: t("contact_info_phone"),
      value: (
        <div className="flex flex-col gap-1">
          <span dir="ltr">+966 12 659 6999</span>
          <span dir="ltr">+966 50 562 6810</span>
          <span dir="ltr">+966 55 009 2012</span>
        </div>
      ),
    },
    {
      icon: Mail,
      label: t("contact_info_email"),
      value: "legal@ajlanlawexperts.com",
    },
    {
      icon: Clock,
      label: t("contact_info_hours"),
      value: t("contact_hours_value"),
    },
  ];

  return (
    <section
      id="contact"
      className="pt-10 pb-16 md:pt-12 md:pb-20 bg-navy-deep"
    >
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="flex items-center gap-3 justify-center mb-5">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
              {t("contact_eyebrow")}
            </span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-semibold mb-5 text-balance">
            {t("contact_title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("contact_subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-card p-8 md:p-10 shadow-luxury border border-gold/15"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label
                  htmlFor="name"
                  className="text-xs uppercase tracking-wider text-gold mb-2 block"
                >
                  {t("contact_name")}
                </Label>
                <Input
                  id="name"
                  name="Full Name"
                  required
                  className="rounded-none border-border h-12 focus-visible:ring-gold"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="text-xs uppercase tracking-wider text-gold mb-2 block"
                >
                  {t("contact_email")}
                </Label>
                <Input
                  id="email"
                  name="Email Address"
                  type="email"
                  required
                  className="rounded-none border-border h-12 focus-visible:ring-gold"
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-xs uppercase tracking-wider text-gold mb-2 block"
                >
                  {t("contact_phone")}
                </Label>
                <Input
                  id="phone"
                  name="Phone Number"
                  className="rounded-none border-border h-12 focus-visible:ring-gold"
                />
              </div>
              <div>
                <Label
                  htmlFor="subject"
                  className="text-xs uppercase tracking-wider text-gold mb-2 block"
                >
                  {t("contact_subject")}
                </Label>
                <Input
                  id="subject"
                  name="Legal Matter"
                  className="rounded-none border-border h-12 focus-visible:ring-gold"
                />
              </div>
            </div>
            <div className="mt-5">
              <Label
                htmlFor="message"
                className="text-xs uppercase tracking-wider text-gold mb-2 block"
              >
                {t("contact_message")}
              </Label>
              <Textarea
                id="message"
                name="Message Detail"
                rows={5}
                required
                className="rounded-none border-border focus-visible:ring-gold"
              />
            </div>
            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="mt-6 w-full sm:w-auto"
              disabled={submitting}
            >
              {t("contact_submit")}
            </Button>
          </form>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-gold/20 text-cream p-8">
              <ul className="space-y-6">
                {info.map((i) => (
                  <li key={i.label} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 border border-gold/40 text-gold flex items-center justify-center">
                      <i.icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-gold uppercase tracking-wider text-[10px] font-medium mb-1">
                        {i.label}
                      </div>
                      <div className="text-cream/90 text-sm">{i.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] bg-muted overflow-hidden border border-border">
              <iframe
                title="Mohammed Ajlan Law Firm Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927.2362752079639!2d39.15355310693214!3d21.627062822787945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d9ffe2a10a5f%3A0x193580f9567f8952!2z2YXZg9iq2Kgg2YXYrdmF2K8g2LnYqNiv2KfZhNmE2Ycg2LnYrNmE2KfZhiDZhNmE2YXYrdin2YXYp9ipINmI2KfZhNil2LPYqti02KfYsdin2Kog2KfZhNmC2KfZhtmI2YbZitipINmI2KfZhNiq2K3Zg9mK2YUg2Ygg2KfZhNiq2YjYq9mK2YI!5e0!3m2!1sen!2ssa!4v1776525868300!5m2!1sen!2ssa"
                className="w-full h-full contrast-110"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
