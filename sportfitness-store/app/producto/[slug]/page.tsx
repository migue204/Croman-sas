import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug, formatCOP } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative aspect-square bg-steel/5">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain p-10"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-graphite/50">
            {product.category}
          </p>
          <h1 className="mt-2 font-display text-4xl font-800 leading-tight">
            {product.name}
          </h1>
          <p className="mt-4 font-display text-3xl font-700">
            {formatCOP(product.price)}
          </p>
          <p className="mt-6 text-graphite/70">{product.description}</p>

          {/* Este botón hoy no hace nada. Cuando conectemos Wompi,
              aquí va la lógica de agregar al carrito / pagar. */}
          <button
            disabled={!product.inStock}
            className="mt-8 w-full bg-graphite py-4 font-display text-lg font-700 tracking-wide text-chalk transition-colors hover:bg-rust disabled:cursor-not-allowed disabled:bg-graphite/30"
          >
            {product.inStock ? "Agregar al carrito" : "Agotado"}
          </button>
        </div>
      </div>
    </div>
  );
}
