// Estructura de datos de productos.
//
// Los productos vienen de Supabase (tabla "products"), no de un
// archivo fijo. El resto del sitio (page.tsx, ProductCard, etc.) no
// tiene que cambiar, porque sigue usando Product, getProducts() y
// getProductBySlug() con la misma forma de siempre.

import { supabase } from "./supabase";

export interface Product {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  imageUrl: string;
  inStock: boolean;
}

// La tabla en Supabase usa snake_case (price, compare_at_price, image_url,
// in_stock), esta función traduce esos nombres a la forma que usa el sitio.
function mapRowToProduct(row: any): Product {
  return {
    slug: row.slug,
    name: row.name,
    category: row.category,
    price: row.price,
    compareAtPrice: row.compare_at_price ?? undefined,
    description: row.description ?? "",
    imageUrl:
      row.image_url && row.image_url.trim() !== ""
        ? row.image_url
        : "/images/placeholder.svg",
    inStock: row.in_stock,
  };
}

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error cargando productos desde Supabase:", error.message);
    return [];
  }

  return (data ?? []).map(mapRowToProduct);
}

export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return undefined;
  }

  return mapRowToProduct(data);
}

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}
