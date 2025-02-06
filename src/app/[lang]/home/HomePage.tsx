import ContactForm from "@/components/contactForm/ContactForm";
import TranslationServices from "@/components/services/TranslationServices";
import WhyCosmos from "@/components/why/WhyCosmos";
import { Locale } from "@/config/i18n";

interface HomePageProps {
  lang: Locale;
}

const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  return (
    <div>
      <TranslationServices lang={lang} />
      <WhyCosmos lang={lang} />
      <ContactForm lang={lang} />
    </div>
  );
};

export default HomePage;
