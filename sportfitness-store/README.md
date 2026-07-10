# Distribuidor Oficial Sportfitness — Sitio web

Repo base del sitio. Catálogo de productos con precios propios, listo para crecer
hasta base de datos, panel de administración y pagos.

## Qué tiene este repo ahora mismo

- Página principal con catálogo de productos (grid con foto, precio, categoría)
- Página de detalle por producto
- 3 productos de ejemplo en `lib/products.ts` (para que veas la estructura)
- Diseño propio (no plantilla genérica): fondo grafito, acento verde volt,
  tipografía Barlow Condensed + Inter

## Qué falta (próximas fases, no lo necesitas hoy)

- Base de datos real (Supabase) en vez del archivo de ejemplo
- Panel para editar precios sin tocar código
- Botón "Agregar al carrito" conectado a Wompi
- Fotos reales de producto

## Paso 1: Subir esto a GitHub

Necesitas tener [Git](https://git-scm.com/downloads) instalado y una cuenta en GitHub.

```bash
cd sportfitness-store
git init
git add .
git commit -m "Primera versión del sitio"
```

Luego, en GitHub.com:
1. Click en el botón "+" arriba a la derecha → "New repository"
2. Nómbralo, por ejemplo, `sportfitness-store`
3. **No** marques "Add a README" (ya tienes uno)
4. Copia los comandos que te da GitHub bajo "…or push an existing repository", algo así:

```bash
git remote add origin https://github.com/TU-USUARIO/sportfitness-store.git
git branch -M main
git push -u origin main
```

## Paso 2: Publicar el sitio (Vercel)

1. Ve a [vercel.com](https://vercel.com) y entra con tu cuenta de GitHub
2. Click en "Add New" → "Project"
3. Selecciona el repo `sportfitness-store`
4. Click en "Deploy" (no necesitas cambiar nada más)

En 1-2 minutos tienes una URL pública tipo `sportfitness-store.vercel.app`.
Cada vez que hagas `git push`, Vercel actualiza el sitio solo.

## Paso 3: Verlo en tu computador antes de publicar (opcional)

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Cómo agregar o editar productos por ahora

Mientras no tengamos el panel ni la base de datos, edita directamente
`lib/products.ts`. Cada producto es un bloque como este:

```ts
{
  slug: "nombre-en-minusculas-sin-espacios",
  name: "Nombre del producto",
  category: "Categoría",
  price: 1000000,          // precio en COP, sin puntos ni comas
  compareAtPrice: 1200000, // opcional, para mostrar descuento
  description: "Descripción corta.",
  imageUrl: "/images/placeholder.svg", // luego se reemplaza por foto real
  inStock: true,
},
```

Guarda el archivo, haz `git add .`, `git commit -m "Agrego productos"`,
`git push`, y Vercel publica el cambio solo.
