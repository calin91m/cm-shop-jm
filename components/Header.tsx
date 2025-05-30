import { MenuIcon, SearchIcon, ShoppingBagIcon } from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShopNavigation } from "./ShopNavigation";
import { UserNavigation } from "./UserNavigation";
import Link from "next/link";

export function Header() {
  return (
    <header className="w-full  sticky top-0 z-50">
      <div className={"w-full transform transition-transform duration-300 ease-in-out border-b bg-background "}>
        <div
          className="
            max-w-[1440px] mx-auto
            flex flex-wrap justify-between p-4 gap-6
            md:grid md:grid-cols-[1fr_auto_1fr] md:items-center
          "
        >
          {/* Mobile: Sheet button and logo aligned horizontally */}
          <div className="flex items-center gap-2 md:hidden flex-1">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="shrink-0" variant={"outline"}>
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="text-xl">Menu</SheetTitle>
                </SheetHeader>
                <nav className="grid p-4 font-medium justify-items-start gap-6 text-xl md:hidden">
                  <ShopNavigation />
                </nav>
              </SheetContent>
            </Sheet>
            <div className="flex items-center text-2xl font-bold">
              <Link href="/">
                <span className="text-blue-500">Shop</span>
                <span>LOGO</span>
              </Link>
            </div>
          </div>
          {/* Desktop: Navigation */}
          <nav className="hidden font-medium md:flex md:items-center md:gap-4 md:text-lg lg:gap-4 md:col-start-1">
            <ShopNavigation />
          </nav>
          {/* Desktop: Centered logo */}
          <div className="hidden md:flex items-center justify-center text-2xl font-bold md:col-start-2">
            <Link href="/">
              <span className="text-blue-500">Shop</span>
              <span>LOGO</span>
            </Link>
          </div>
          {/* Desktop: Icons */}
          <div className="flex items-center gap-4 md:justify-end md:col-start-3">
            <SearchIcon />
            <ShoppingBagIcon />
            <UserNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
