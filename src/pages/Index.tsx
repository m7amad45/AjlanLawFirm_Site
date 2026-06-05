import { LanguageProvider } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/law/Navbar";
import { Hero } from "@/components/law/Hero";
import { About } from "@/components/law/About";
import { Practice } from "@/components/law/Practice";
import { Team } from "@/components/law/Team";
import { Contact } from "@/components/law/Contact";
import { Footer } from "@/components/law/Footer";
import { Outlet, useLocation } from "react-router-dom"; // سطر جديد مستورد

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {useLocation().pathname === "/" ? (
            <>
              <Hero />
              <About />
              <Practice />
              <Team />
              <Contact />
            </>
          ) : (
            <Outlet />
          )}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
