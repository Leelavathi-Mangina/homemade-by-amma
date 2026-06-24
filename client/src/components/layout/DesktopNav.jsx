import { NAV_LINKS } from "../../constants/navigation";
import NavLink from "../common/NavLink";

export default function DesktopNav() {
  return (
    <div className="hidden items-center gap-8 md:flex">
      {NAV_LINKS.map(({ href, label }) => (
        <NavLink key={href} href={href}>
          {label}
        </NavLink>
      ))}
    </div>
  );
}