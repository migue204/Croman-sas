import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-graphite text-chalk">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="plate-notch flex h-9 w-9 items-center justify-center bg-volt text-graphite font-display text-lg font-800">
            SF
          </span>
          <span className="font-display text-2xl font-700 tracking-wide">
            DISTRIBUIDOR OFICIAL
          </span>
        </Link>
        <nav className="hidden gap-8 font-display text-lg tracking-wide sm:flex">
          <Link href="/" className="hover:text-volt transition-colors">
            Catálogo
          </Link>
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-volt transition-colors"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
