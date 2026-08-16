import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-high text-on-surface dark:text-on-surface-variant font-body-md text-body-md w-full py-stack-xl border-t border-outline-variant dark:border-outline mt-auto">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md">
        <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
          The Insightful
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="#" className="text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
            Twitter
          </Link>
          <Link href="#" className="text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
            LinkedIn
          </Link>
          <Link href="#" className="text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
            RSS Feed
          </Link>
          <Link href="#" className="text-secondary dark:text-secondary-fixed-dim hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
            Privacy Policy
          </Link>
        </div>
        <div className="text-secondary font-label-sm text-label-sm">
          © 2024 The Insightful. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
