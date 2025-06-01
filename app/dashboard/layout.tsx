import { ReactNode } from "react";
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
      <main className="p-4 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
