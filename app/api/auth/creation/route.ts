import { prisma } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        let dbUser = await prisma.user.findUnique({ where: { id: user.id } });
        if (!dbUser) {
            dbUser = await prisma.user.create({
                data: {
                    id: user.id,
                    email: user.email ?? "",
                    firstName: user.given_name ?? "",
                    lastName: user.family_name ?? "",
                    profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
                },
            });
        }
        // Use an absolute URL for NextResponse.redirect as required by Next.js
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
        return NextResponse.redirect(baseUrl + '/');
    } catch (error) {
        console.error("API /api/auth/creation error:", error);
        return NextResponse.json({ error: "Internal Server Error", details: String(error) }, { status: 500 });
    }
}