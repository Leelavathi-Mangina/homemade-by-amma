import { NAV_LINKS } from "../../constants/navigation";
import NavLink from "../common/NavLink";
import Button from "../ui/Button";

export default function MobileMenu() {
  return (
    <div className="border-t border-gray-200 bg-white shadow-md md:hidden">
      <div className="flex flex-col gap-5 px-6 py-6">
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}

        <div className="pt-2">
          <Button className="w-full">Login</Button>
        </div>
      </div>
    </div>
  );
}