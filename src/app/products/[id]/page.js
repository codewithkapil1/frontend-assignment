import SingleProduct from "@/components/SingleProduct";
import { notFound } from "next/navigation";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

export default Product = async ({ params }) => {
  const data = await getProduct(params.id);

  return (
    <div className="flex gap-12 px-12 py-5 w-[90%] mx-auto product">
      <SingleProduct data={data} />
    </div>
  );
};

export async function generateStaticParams() {
  const data = await getProduct(params.id);
  return data.map((data) => ({
    id: data.id.toString(),
  }));
}
