import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div>
      <section className="bg-croman-dark text-croman-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-croman-red">
            Distribuidor autorizado
          </p>
          <h1 className="mt-3 max-w-xl font-display text-5xl font-800 leading-[0.95]">
            EQUIPOS SPORTFITNESS AL PRECIO CORRECTO
          </h1>
          <p className="mt-4 max-w-md text-croman-white/70">
            Catálogo directo de fábrica, garantía oficial y despacho a toda Colombia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="font-display text-2xl font-700 text-croman-dark">
          Catálogo
        </h2>
        {products.length === 0 ? (
          <p className="mt-6 text-croman-lightgray">
            Todavía no hay productos cargados.
          </p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
