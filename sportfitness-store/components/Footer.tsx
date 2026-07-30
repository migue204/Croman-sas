export default function Footer() {
  return (
    <footer className="mt-24 bg-croman-dark text-croman-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <p className="font-display text-lg tracking-wide text-croman-red">
          CROMAN S.A.S — DISTRIBUIDOR OFICIAL SPORTFITNESS
        </p>
        <p className="mt-2 text-croman-white/70">
          Equipos y soluciones tecnológicas. Garantía de fábrica en todos los productos.
        </p>
        <p className="mt-4">
          <a
            href="https://wa.me/573203449249"
            target="_blank"
            rel="noopener noreferrer"
            className="text-croman-white/70 hover:text-croman-red transition-colors"
          >
            WhatsApp: +57 320 3449249
          </a>
        </p>
        <p className="mt-6 text-croman-white/50">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}