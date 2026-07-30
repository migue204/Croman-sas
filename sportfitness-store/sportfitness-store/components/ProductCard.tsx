import Link from "next/link";
import Image from "next/image";
import { Product, formatCOP } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const hasDiscount =
    product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group block overflow-hidden rounded-sm border border-croman-dark/10 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square bg-croman-lightgray/10">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform group-hover:scale-105"
        />
        {hasDiscount && (
          <span className="absolute left-3 top-3 bg-croman-red px-2 py-1 font-display text-xs font-700 tracking-wide text-croman-white">
            DESCUENTO
          </span>
        )}
        {!product.inStock && (
          <span className="absolute right-3 top-3 bg-croman-dark/80 px-2 py-1 text-xs text-croman-white">
            Agotado
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-croman-gray">
          {product.category}
        </p>
        <h3 className="mt-1 font-display text-xl font-700 leading-tight text-croman-dark">
          {product.name}
        </h3>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-display text-lg font-700 text-croman-dark">
            {formatCOP(product.price)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-croman-lightgray line-through">
              {formatCOP(product.compareAtPrice!)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
