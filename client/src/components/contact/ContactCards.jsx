import ContactCard from "./ContactCard";
import { CONTACT_INFO } from "../../constants/contact";

export default function ContactCards() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">

        {CONTACT_INFO.map((item) => (
          <ContactCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            value={item.value}
            description={item.description}
          />
        ))}

      </div>
    </section>
  );
}