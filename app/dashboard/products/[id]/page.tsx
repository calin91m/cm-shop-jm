import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { EditForm } from "../../components/EditForm";

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function EditProducts(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;
  const data = await getData(id);
  return (
    <div className="">
      <EditForm data={data} />
    </div>
  );
}
