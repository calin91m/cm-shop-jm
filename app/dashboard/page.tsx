import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EuroIcon, PartyPopper, ShoppingBagIcon, User2 } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <EuroIcon />
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">€100.000</p>
            <p className="text-sm text-muted-foreground">
              Based on 100 Charges
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBagIcon />
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">1025</p>
            <p className="text-sm text-muted-foreground">
              Total sales in last 30 days
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Products</CardTitle>
            <PartyPopper />
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">768</p>
            <p className="text-sm text-muted-foreground">
              Total produts created
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Customers</CardTitle>
            <User2 />
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold">545</p>
            <p className="text-sm text-muted-foreground">Total customers</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
          <Card className="xl:col-span-2 ">
            <CardHeader className="pb-2">
              <CardTitle>Transactions</CardTitle>

              <CardDescription>
                Recent transaction from you store
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Recent sales</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden sm:flex h-9 w-9">
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Calin Morar</p>
                  <p className="text-sm text-muted-foreground">test@test.com</p>
                </div>
                <p className="ml-auto font-medium text-green-700">+€ 175,00</p>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden sm:flex h-9 w-9">
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Calin Morar</p>
                  <p className="text-sm text-muted-foreground">test@test.com</p>
                </div>
                <p className="ml-auto font-medium text-green-700">+€ 175,00</p>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden sm:flex h-9 w-9">
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Calin Morar</p>
                  <p className="text-sm text-muted-foreground">test@test.com</p>
                </div>
                <p className="ml-auto font-medium text-green-700">+€ 175,00</p>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden sm:flex h-9 w-9">
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium">Calin Morar</p>
                  <p className="text-sm text-muted-foreground">test@test.com</p>
                </div>
                <p className="ml-auto font-medium text-green-700">+€ 175,00</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div></div>
      </div>
    </>
  );
}
