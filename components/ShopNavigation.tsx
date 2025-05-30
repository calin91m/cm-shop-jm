"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "All-Products" },
  { href: "/products/women", label: "Women" },
  { href: "/products/men", label: "Men" },
];
export function ShopNavigation() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(link.href === pathname ? "text-foreground " : "text-muted-foreground hover:text-foreground")}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
