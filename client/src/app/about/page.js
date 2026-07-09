import AboutHero from "../../components/about/AboutHero";
import OurStory from "../../components/about/OurStory";
import OurValues from "../../components/about/OurValues";
import PreparationProcess from "../../components/about/PreparationProcess";
import WhyTrustUs from "../../components/about/WhyTrustUs";
import AboutCTA from "../../components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <OurValues />
      <PreparationProcess />
      <WhyTrustUs />
      <AboutCTA />
    </main>
  );
}
