import ContactHero from "../../components/contact/ContactHero";
import ContactCards from "../../components/contact/ContactCards";
import BusinessHours from "../../components/contact/BusinessHours";
import ContactForm from "../../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactCards />
      <BusinessHours />
      <ContactForm />
    </main>
  );
}