import DashboardCard from "./DashboardCard";

export default function DashboardGrid() {
  const cards = [
    {
      title: "Products",
      description:
        "Add, update and manage homemade products.",
      icon: "📦",
      href: "/admin/products",
    },
    {
      title: "Categories",
      description:
        "Manage sweets, pickles and snacks.",
      icon: "📂",
      href: "/admin/categories",
    },
    {
      title: "Orders",
      description:
        "View and update customer orders.",
      icon: "🛒",
      href: "/admin/orders",
    },
    {
      title: "Customers",
      description:
        "View registered customers.",
      icon: "👥",
      href: "/admin/customers",
    },
  ];

  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <DashboardCard
          key={card.title}
          {...card}
        />
      ))}
    </div>
  );
}