import { MenuIcon, SearchIcon, ShoppingBagIcon, User2 } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShopNavigation } from "./ShopNavigation";
import { UserNavigation } from "./UserNavigation";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";

export async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <header className="w-full  sticky top-0 z-50">
      <div
        className={
          "w-full transform transition-transform duration-300 ease-in-out border-b bg-background "
        }
      >
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
                <span className="text-gray-800">LOGO</span>
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
              <span className="text-gray-800">LOGO</span>
            </Link>
          </div>
          {/* Desktop: Icons */}
          <div className="flex items-center gap-4 md:justify-end md:col-start-3">
            {user ? (
              <>
                <SearchIcon />
                <Link href="/cart" className="group flex items-center relative">
                  <ShoppingBagIcon className="text-gray-800 group-hover:text-primary" />
                  <span className="absolute -top-1 -right-2 bg-primary text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                    5
                  </span>
                </Link>
                <UserNavigation
                  userImage={
                    user.picture ??
                    `https://avatar.vercel.sh/${user.given_name}`
                  }
                  email={user.email as string}
                  name={user.given_name as string}
                />
              </>
            ) : (
              <>
                <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
                  <SearchIcon />
                  <Button asChild variant="outline">
                    <LoginLink>Sign In</LoginLink>
                  </Button>
                  <span className="h-6 w-px bg-gray-200"></span>
                  <Button asChild variant="outline">
                    <RegisterLink>Create Account</RegisterLink>
                  </Button>
                  <Link
                    href="/cart"
                    className="group flex items-center relative"
                  >
                    <ShoppingBagIcon className="text-gray-800 group-hover:text-primary" />
                    <span className="absolute -top-1 -right-2 bg-primary text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                      5
                    </span>
                  </Link>
                </div>
                <div className="md:hidden flex items-center gap-4">
                  <SearchIcon />
                  <Link
                    href="/cart"
                    className="group flex items-center relative "
                  >
                    <ShoppingBagIcon className="text-gray-800 group-hover:text-primary" />
                    <span className="absolute -top-1 -right-2 bg-primary text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                      5
                    </span>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="rounded-full relative w-10 h-10"
                      >
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>
                            <User2 className="w-10 h-10" />
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-56"
                      forceMount
                    >
                      <DropdownMenuLabel>Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <LoginLink>Sign In</LoginLink>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <RegisterLink>Create Account</RegisterLink>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
