import ContactForm from "../../../components/contactForm/ContactForm";
import TranslationServices from "../../../components/services/TranslationServices";
import TranslateTeam from "../../../components/team/TranslateTeam";
import WhyCosmos from "../../../components/why/WhyCosmos";
import { Locale } from "../../../config/i18n";
import Image from "next/image";

interface HomePageProps {
  lang: Locale;
}

const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  return (
    <div>
      <Image
        src="/assets/hero.png"
        alt="Hero Image"
        width={1500}
        height={900}
        layout="responsive"
      />
      <TranslationServices lang={lang} />
      <WhyCosmos lang={lang} />
      <TranslateTeam lang={lang} />
      <ContactForm lang={lang} />
    </div>
  );
};

export default HomePage;
