import Link from "next/link";

export function Header() {
  return (
    <nav className="bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 text-primary dark:text-primary-fixed font-body-md text-body-md fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline transition-all duration-300">
      <div className="flex justify-between items-center h-[72px] px-gutter max-w-container-max mx-auto">
        <Link href="/" className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface-variant">
          The Insightful
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-primary dark:text-primary-fixed font-bold border-b-2 border-primary dark:border-primary-fixed pb-1">
            Home
          </Link>
          <Link href="/posts" className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors">
            Posts
          </Link>
          <Link href="/about" className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors">
            About
          </Link>
          <Link href="#" className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors">
            Newsletter
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/search" className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-secondary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
            search
          </Link>
          <button className="hidden md:inline-flex bg-primary text-on-primary font-label-sm text-label-sm px-4 py-2 rounded-DEFAULT hover:bg-primary/90 transition-colors active:scale-95">
            Subscribe
          </button>
          <span className="material-symbols-outlined cursor-pointer md:hidden text-secondary" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>
            menu
          </span>
        </div>
      </div>
    </nav>
  );
}
