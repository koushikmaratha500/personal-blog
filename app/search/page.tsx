import Link from "next/link";

export default function SearchPage() {
  return (
    <main className="flex-grow pt-[104px] pb-stack-xl px-gutter max-w-container-max mx-auto w-full">
      {/* Search Header & Input */}
      <div className="mb-stack-xl max-w-reading-width mx-auto text-center">
        <h1 className="font-display text-display mb-stack-md text-primary">Search</h1>
        <div className="relative max-w-xl mx-auto">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>search</span>
          <input className="w-full bg-surface-container-lowest border border-outline-variant rounded pl-12 pr-4 py-3 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search essays, articles, and thoughts..." type="text" defaultValue="design patterns"/>
        </div>
        <p className="font-body-md text-body-md text-secondary mt-4">Showing 12 results for "design patterns"</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-gutter">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 shrink-0 mb-stack-md lg:mb-0">
          <div className="sticky top-[104px]">
            <h2 className="font-label-sm text-label-sm text-secondary mb-4 uppercase tracking-widest border-b border-outline-variant pb-2">Filter By</h2>
            <div className="mb-6">
              <h3 className="font-label-sm text-label-sm text-on-surface mb-3">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input defaultChecked className="rounded-sm border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
                  <span className="font-body-md text-body-md text-secondary group-hover:text-primary transition-colors">Technology (8)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input defaultChecked className="rounded-sm border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
                  <span className="font-body-md text-body-md text-secondary group-hover:text-primary transition-colors">Design (4)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="rounded-sm border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
                  <span className="font-body-md text-body-md text-secondary group-hover:text-primary transition-colors">Culture (0)</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="font-label-sm text-label-sm text-on-surface mb-3">Date</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" name="date" type="radio"/>
                  <span className="font-body-md text-body-md text-secondary group-hover:text-primary transition-colors">Any time</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" name="date" type="radio"/>
                  <span className="font-body-md text-body-md text-secondary group-hover:text-primary transition-colors">Past week</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input defaultChecked className="border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" name="date" type="radio"/>
                  <span className="font-body-md text-body-md text-secondary group-hover:text-primary transition-colors">Past month</span>
                </label>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Search Results */}
        <div className="flex-grow space-y-8">
          {/* Result Card 1 */}
          <article className="group flex flex-col sm:flex-row gap-6 bg-surface-container-lowest border border-outline-variant p-4 rounded hover:border-outline hover:bg-surface transition-all duration-200">
            <div className="sm:w-48 shrink-0">
              <Link href="/post/digital-design-patterns">
                <img className="w-full h-32 object-cover rounded border border-outline-variant" alt="Minimalist architectural photograph" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5JoF4Kr5IMg8U43CSkvgkl6XkGx_DLWo9_86W-MiQPeOzbpMKMO9WJYVIVSsicDJwTN0aNs0E900UzKc4SuSXZRLEjtIdtCGtz7HLjrYWk2y0MZeAedgId9znr5MCYabBBNwY55ABz8h1ti29LRo1vXIyenTfQuawyxDi14JR5Ok4Pd5rVA45S2hwhzFLocbvc2GEcZTiynrul7-fZk06yiqUeEtW-7j5L9R-PrkqWXWgK1fB_lux"/>
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-label-sm text-label-sm text-tertiary">Design</span>
                <span className="text-secondary text-sm">•</span>
                <span className="font-label-sm text-label-sm text-secondary">Oct 12, 2023</span>
              </div>
              <Link href="/post/digital-design-patterns">
                <h2 className="font-headline-md text-headline-md text-primary mb-2 group-hover:underline decoration-1 underline-offset-4">The Evolution of Digital Design Patterns</h2>
              </Link>
              <p className="font-body-md text-body-md text-secondary line-clamp-2">An exploration into how fundamental UI structures have shifted over the past decade, moving towards a unified language that prioritizes cognitive ease over decorative elements.</p>
            </div>
          </article>
          
          {/* Result Card 2 */}
          <article className="group flex flex-col sm:flex-row gap-6 bg-surface-container-lowest border border-outline-variant p-4 rounded hover:border-outline hover:bg-surface transition-all duration-200">
            <div className="sm:w-48 shrink-0">
              <Link href="/post/systems-thinking">
                <img className="w-full h-32 object-cover rounded border border-outline-variant" alt="Vintage typography specimen sheet" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmmR0hkHVc-3yR6uCFCE-T_Ru1Q_xPTWG7Ljn5znNG51x7HJmI6qo2d4zLNrOVkc6eiU3--8FNJ1KnPeb7fY9j9CTeTjYpDl5Ovfpbl_7P6bUDX4AgBW2bB1LEc3TVI4mnDy_J5KudLlVls0McZqhoPwe2x0roW97yzsh8Ww-1a6k0Nk5G4rJAk4EH5b5RnNpt5zfurPfffpNpgPJZePUvAHcj1UUy9oTB8JRFfLG7mj6lp-xNhwDu"/>
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-label-sm text-label-sm text-tertiary">Technology</span>
                <span className="text-secondary text-sm">•</span>
                <span className="font-label-sm text-label-sm text-secondary">Sep 28, 2023</span>
              </div>
              <Link href="/post/systems-thinking">
                <h2 className="font-headline-md text-headline-md text-primary mb-2 group-hover:underline decoration-1 underline-offset-4">Systems Thinking in Interface Construction</h2>
              </Link>
              <p className="font-body-md text-body-md text-secondary line-clamp-2">Why viewing discrete components as part of a larger ecosystem changes the way we architect front-end codebases. A look at the unseen connections in our daily workflows.</p>
            </div>
          </article>
          
          {/* Result Card 3 */}
          <article className="group flex flex-col sm:flex-row gap-6 bg-surface-container-lowest border border-outline-variant p-4 rounded hover:border-outline hover:bg-surface transition-all duration-200">
            <div className="sm:w-48 shrink-0">
              <Link href="/post/anti-patterns-minimalism">
                <img className="w-full h-32 object-cover rounded border border-outline-variant" alt="Abstract geometric shapes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4gUBAJndbe1v_T0ZEG9idbPs3yRDXlUV-AqsE9IQHV6pjduqMTR4NOyaRTruGNBhoc6juKA5c2Pllt8rwjDchB4-GYeJ7WTTVG6u_GlpzC8jWInzmLLqh6a0aRN1pCVOBFXCpWLxCvj8aB_wd9oRwIBnVdCZ0D171yn8W1xEIyQLMku1B7s3D6aOmkuxg3sKgIPAuuquBQmAZBhxhJF9mXHTHbI21Pq5oqvzWknUcnoo0MIhiEut_"/>
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-label-sm text-label-sm text-tertiary">Design</span>
                <span className="text-secondary text-sm">•</span>
                <span className="font-label-sm text-label-sm text-secondary">Sep 15, 2023</span>
              </div>
              <Link href="/post/anti-patterns-minimalism">
                <h2 className="font-headline-md text-headline-md text-primary mb-2 group-hover:underline decoration-1 underline-offset-4">Anti-Patterns in Modern Minimalism</h2>
              </Link>
              <p className="font-body-md text-body-md text-secondary line-clamp-2">When reducing noise accidentally removes signal. We dissect common pitfalls where the pursuit of a clean aesthetic damages actual usability and user comprehension.</p>
            </div>
          </article>
          
          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 pt-stack-md mt-stack-md border-t border-outline-variant">
            <button className="p-2 border border-outline-variant rounded text-secondary hover:bg-surface-container-low hover:text-primary transition-colors disabled:opacity-50" disabled={true}>
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_back</span>
            </button>
            <span className="font-label-sm text-label-sm text-primary">Page 1 of 4</span>
            <button className="p-2 border border-outline-variant rounded text-secondary hover:bg-surface-container-low hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
