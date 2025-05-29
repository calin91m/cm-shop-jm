import Link from "next/link";

export function DashboardNavigation() {
  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/dashboard/products", label: "Products" },
    { href: "/dashboard/orders", label: "Orders" },
    { href: "/dashboard/productsMen", label: "Categories" },
  ];

  return (
    <>
      {navItems.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </>
  );
}
