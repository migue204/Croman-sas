import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-croman-dark text-croman-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="plate-notch flex h-9 w-9 items-center justify-center bg-croman-red text-croman-white font-display text-lg font-800">
            CS
          </span>
          <span className="font-display text-2xl font-700 tracking-wide">
            DISTRIBUIDOR OFICIAL SPORTFITNESS
          </span>
        </Link>
        <nav className="hidden gap-8 font-display text-lg tracking-wide sm:flex">
          <Link href="/" className="hover:text-croman-red transition-colors">
            Catálogo
          </Link>
          <a
            href="https://wa.me/573203449249"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-croman-red transition-colors"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
