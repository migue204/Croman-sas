import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug, formatCOP } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative aspect-square bg-croman-lightgray/10">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain p-10"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-croman-gray">
            {product.category}
          </p>
          <h1 className="mt-2 font-display text-4xl font-800 leading-tight text-croman-dark">
            {product.name}
          </h1>
          <p className="mt-4 font-display text-3xl font-700 text-croman-dark">
            {formatCOP(product.price)}
          </p>
          <p className="mt-6 text-croman-gray">{product.description}</p>

          {/* Este botón hoy no hace nada. Cuando conectemos Wompi,
              aquí va la lógica de agregar al carrito / pagar. */}
          <button
            disabled={!product.inStock}
            className="mt-8 w-full bg-croman-dark py-4 font-display text-lg font-700 tracking-wide text-croman-white transition-colors hover:bg-croman-red disabled:cursor-not-allowed disabled:bg-croman-lightgray"
          >
            {product.inStock ? "Agregar al carrito" : "Agotado"}
          </button>
        </div>
      </div>
    </div>
  );
}
