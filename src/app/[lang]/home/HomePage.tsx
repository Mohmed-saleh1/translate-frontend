import ContactForm from "@/components/contactForm/ContactForm";
import NavigationBar from "@/components/navbar/Navbar";
import TranslationServices from "@/components/services/TranslationServices";
import { Locale } from "@/config/i18n";

interface HomePageProps {
  lang: Locale;
}

const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  return (
    <div>
      {/* <NavigationBar lang={lang} /> */}
      <TranslationServices lang={lang} />
      <ContactForm lang={lang} />
    </div>
  );
};

export default HomePage;
