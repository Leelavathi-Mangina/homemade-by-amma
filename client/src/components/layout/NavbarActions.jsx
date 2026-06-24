import { ShoppingCart } from "lucide-react";

import Button from "../ui/Button";

export default function NavbarActions() {
  return (
    <div className="hidden items-center gap-4 md:flex">
      <button
        className="rounded-full p-2 transition-colors hover:bg-gray-100"
        aria-label="Cart"
      >
        <ShoppingCart size={22} />
      </button>

      <Button>Login</Button>
    </div>
  );
}