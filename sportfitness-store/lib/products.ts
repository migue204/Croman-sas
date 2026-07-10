// Estructura de datos de productos.
//
// Por ahora los productos viven en este archivo como ejemplo.
// Cuando conectemos Supabase, esta misma forma de datos (Product)
// va a venir de una tabla "products" en la base de datos, y esta
// función getProducts() se va a reemplazar por una consulta real.
// El resto del sitio (page.tsx, ProductCard, etc.) no tiene que cambiar.

export interface Product {
  slug: string; // identificador único para la URL, ej: "caminadora-t500"
  name: string;
  category: string; // ej: "Caminadoras", "Bicicletas", "Fuerza", "Accesorios"
  price: number; // precio de venta en COP, ya con el margen del distribuidor
  compareAtPrice?: number; // precio "antes de descuento", opcional
  description: string;
  imageUrl: string;
  inStock: boolean;
}

// Productos de ejemplo. Reemplaza esto con tu primer lote real.
const sampleProducts: Product[] = [
  {
    slug: "caminadora-t500",
    name: "Caminadora T500",
    category: "Caminadoras",
    price: 2890000,
    compareAtPrice: 3290000,
    description:
      "Caminadora eléctrica para uso en el hogar, motor de 2.5 HP y superficie de trote amplia.",
    imageUrl: "/images/placeholder.svg",
    inStock: true,
  },
  {
    slug: "bicicleta-spinning-sf200",
    name: "Bicicleta de Spinning SF200",
    category: "Bicicletas",
    price: 1450000,
    description:
      "Bicicleta de spinning con resistencia magnética y volante de inercia de 18 kg.",
    imageUrl: "/images/placeholder.svg",
    inStock: true,
  },
  {
    slug: "banco-multiposicion-sub3001",
    name: "Banco Multiposición SUB3001A",
    category: "Fuerza",
    price: 690000,
    description:
      "Banco ajustable para entrenamiento de fuerza en casa, estructura reforzada.",
    imageUrl: "/images/placeholder.svg",
    inStock: true,
  },
];

export async function getProducts(): Promise<Product[]> {
  return sampleProducts;
}

export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug);
}

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}
