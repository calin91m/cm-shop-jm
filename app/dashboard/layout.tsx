import { ReactNode } from "react";
import { Header } from "../dashboard/components/Header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user.email !== "calynutz112@gmail.com") {
    return redirect("/");
  }
  return (
    <div>
      <Header />
      <main className="p-5">{children}</main>
    </div>
  );
}
