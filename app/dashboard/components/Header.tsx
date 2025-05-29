import { CircleUser, MenuIcon } from "lucide-react";
import { DashboardNavigation } from "./DashboardNavigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full  sticky top-0 z-50">
      <div
        className={
          "w-full transform transition-transform duration-300 ease-in-out border-b bg-background "
        }
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between p-4 gap-6">
          <nav className="hidden font-medium md:flex md:items-center md:gap-4 md:text-sm lg:gap-24">
            <DashboardNavigation />
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="shrink-0 md:hidden" variant={"outline"}>
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-xl">Menu</SheetTitle>
              </SheetHeader>
              <nav className="grid p-4 font-medium justify-items-start gap-6 text-xl md:hidden">
                <DashboardNavigation />
              </nav>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <LogoutLink>Logout</LogoutLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
