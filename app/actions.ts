"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { parseWithZod } from "@conform-to/zod";
import { bannerSchema, productSchema } from "./lib/zodSchemas";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createProduct(currentState: unknown, formData: FormData) {
    
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user || user.email !== "calynutz112@gmail.com") {
        return redirect("/");
    }
    const submission = parseWithZod(formData, {
        schema: productSchema
    });
   
    if (submission.status !== "success") {
        return submission.reply();
    }
    await prisma.product.create({
        data: {
            name: submission.value.name,
            description: submission.value.description,
            status: submission.value.status,
            price: submission.value.price,
            images: submission.value.images,
            category: submission.value.category,
            isFeatured: submission.value.isFeatured === true ? true : false,
        }
    });

    // Return a SubmissionResult with status 'success' for useActionState compatibility
    return { status: "success" } as const;
}



export async function editProduct(currentState: unknown, formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user || user.email !== "calynutz112@gmail.com") {
        return redirect("/");
    }
    const submission = parseWithZod(formData, {
        schema: productSchema
    });

    if (submission.status !== "success") {
        return submission.reply();
    }

    const productID = formData.get("productId") as string;
    await prisma.product.update({
        where: {
            id: productID
        },
        data: {
            name: submission.value.name,
            description: submission.value.description,
            status: submission.value.status,
            price: submission.value.price,
            images: submission.value.images,
            category: submission.value.category,
            isFeatured: submission.value.isFeatured === true ? true : false,
        }
    });

    // Return a SubmissionResult with status 'success' for useActionState compatibility
    return { status: "success" } as const;
}


export async function deleteProduct(currentState: unknown, formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user || user.email !== "calynutz112@gmail.com") {
        return redirect("/");
    }

    const productID = formData.get("productId") as string;
    await prisma.product.delete({
        where: {
            id: productID
        }
    });

    // Return a SubmissionResult with status 'success' for useActionState compatibility
    return { status: "success" } as const;
}



export async function createBanner(currentState: unknown, formData: FormData) {
    
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user || user.email !== "calynutz112@gmail.com") {
        return redirect("/");
    }
    const submission = parseWithZod(formData, {
        schema: bannerSchema
    });
   if (submission.status !== "success") {
        return submission.reply();
    }
    await prisma.banner.create({
        data: {
            title: submission.value.title,
            image: submission.value.image,
        }
    });

    // Return a SubmissionResult with status 'success' for useActionState compatibility
    return { status: "success" } as const;
}


export async function deleteBanner(currentState: unknown, formData: FormData) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user || user.email !== "calynutz112@gmail.com") {
        return redirect("/");
    }

    const bannerID = formData.get("bannerId") as string;
    await prisma.banner.delete({
        where: {
            id: bannerID
        }
    });

    // Return a SubmissionResult with status 'success' for useActionState compatibility
    return { status: "success" } as const;
}