export default function Footer() {
  return (
    <footer className="mt-24 bg-graphite text-chalk">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <p className="font-display text-lg tracking-wide text-volt">
          DISTRIBUIDOR OFICIAL SPORTFITNESS
        </p>
        <p className="mt-2 text-chalk/70">
          Equipos de gimnasio y fitness. Garantía de fábrica en todos los productos.
        </p>
        <p className="mt-6 text-chalk/50">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
