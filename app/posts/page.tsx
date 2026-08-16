import Link from "next/link";

export default function PostsPage() {
  return (
    <main className="flex-grow pt-[120px] pb-stack-xl max-w-container-max mx-auto px-gutter w-full">
      {/* Page Header & Filter */}
      <div className="mb-stack-xl flex flex-col md:flex-row md:items-end justify-between gap-stack-md">
        <div>
          <h1 className="font-display text-display text-on-surface mb-stack-xs">All Posts</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">A collection of thoughts, analyses, and deep dives into the mechanics of modern design and technology.</p>
        </div>
        <div className="w-full md:w-auto relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>search</span>
          <input className="w-full md:w-64 pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded focus:border-primary focus:ring-0 font-body-md text-body-md text-on-surface placeholder-on-surface-variant transition-colors" placeholder="Search articles..." type="text"/>
        </div>
      </div>
      
      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">
        {/* Post Card 1 */}
        <article className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col group transition-colors hover:border-outline">
          <Link className="block overflow-hidden rounded-t aspect-video bg-surface-container" href="/post/architecture-of-clarity">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAl-VSM8hvROlYHMv4I0tAQmgBb_c-I1u763iQwktpy3MzJvTQC4oYXAvWTd_2YzqKJFwTnii50vNdqu66l1EGdvS2o52Y_afrN8looPEMvYDFgrXr7-VxjsxbF-PoSxNFrkzVCYpa24imzI85IhLLxQBbFQFeftOLV11mL81mm-0GzCzkbL6pNAJUVHO7KdpegVw9qhe---3fa50qIlkxgi0nTb_nZl9mkh5YsPqhOHOxjiJUB48Z"/>
          </Link>
          <div className="p-stack-md flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-stack-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Design Systems</span>
              <time className="font-label-sm text-label-sm text-outline">Oct 24, 2024</time>
            </div>
            <Link className="block mb-stack-xs group-hover:text-primary transition-colors" href="/post/architecture-of-clarity">
              <h2 className="font-headline-md text-headline-md text-on-surface line-clamp-2">The Architecture of Clarity: Building Resilient Design Systems</h2>
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-stack-md flex-grow">Exploring the foundational principles required to construct design systems that not only scale but maintain their integrity across diverse platforms and teams.</p>
            <div className="mt-auto pt-stack-xs border-t border-outline-variant/50">
              <Link className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:text-on-surface-variant transition-colors" href="/post/architecture-of-clarity">
                Read Article <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
              </Link>
            </div>
          </div>
        </article>
        
        {/* Post Card 2 */}
        <article className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col group transition-colors hover:border-outline">
          <Link className="block overflow-hidden rounded-t aspect-video bg-surface-container" href="/post/whispers-in-the-margins">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Typewriter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDestoBlsJRKx6cGBkvHBWNQ2NbSxsKWKeq2tOrVzXhSHLVSvLPC4bwn8pcREMsG1GTlISGIAJEez3XxQx39DaIQ1axNCRSLfo0uBH1eZZkbFQx8fC18rcy6VLnIUDTpvF2piECSavZumJVWcfKwh5ur1GeSEnoExPcizp8PY7yP2u4siXTZd3X2Q8dwauioliTLlI9dc7l2Pa_6YRFL849CHBPDSgbTKzkeHZB0k6Cvv8IATkBT9Xx"/>
          </Link>
          <div className="p-stack-md flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-stack-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Typography</span>
              <time className="font-label-sm text-label-sm text-outline">Oct 18, 2024</time>
            </div>
            <Link className="block mb-stack-xs group-hover:text-primary transition-colors" href="/post/whispers-in-the-margins">
              <h2 className="font-headline-md text-headline-md text-on-surface line-clamp-2">Whispers in the Margins: The Subtle Art of Micro-Typography</h2>
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-stack-md flex-grow">How minute adjustments to tracking, leading, and kerning can profoundly alter the reader's subconscious perception of authority and trust.</p>
            <div className="mt-auto pt-stack-xs border-t border-outline-variant/50">
              <Link className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:text-on-surface-variant transition-colors" href="/post/whispers-in-the-margins">
                Read Article <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
              </Link>
            </div>
          </div>
        </article>
        
        {/* Post Card 3 */}
        <article className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col group transition-colors hover:border-outline">
          <Link className="block overflow-hidden rounded-t aspect-video bg-surface-container" href="/post/signal-and-noise">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Abstract" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTlRpsmd5NONKQuFUIU_HZ2fVX8uZH6KR8yzveNjd72zWawDvEfDlVmyZ41cDthnIOxiHE5iy_9PUqUZVo1xWwQGO-5qiyf8xy-bc10FVKjF-37JcTujLMWl3ruLwE2O3goB4A2Hb7zlpOfZD9Ex6D3m4k9rJCI64yK0c0eEXdh53uybtl0dYL-yHRQ6VHOJ9_dmvL5kCLpe5kA82qhtgCT7R4HtpHv4BuwENVrqHUqJbpVBoFyU_V"/>
          </Link>
          <div className="p-stack-md flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-stack-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Technology</span>
              <time className="font-label-sm text-label-sm text-outline">Oct 12, 2024</time>
            </div>
            <Link className="block mb-stack-xs group-hover:text-primary transition-colors" href="/post/signal-and-noise">
              <h2 className="font-headline-md text-headline-md text-on-surface line-clamp-2">The Signal and the Noise: Information Architecture in Web3</h2>
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-stack-md flex-grow">Navigating the complex landscape of decentralized applications requires a return to fundamental information architecture principles. A critical look at current UX paradigms.</p>
            <div className="mt-auto pt-stack-xs border-t border-outline-variant/50">
              <Link className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:text-on-surface-variant transition-colors" href="/post/signal-and-noise">
                Read Article <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
      
      {/* Pagination */}
      <div className="mt-stack-xl flex justify-center items-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-outline hover:border-primary hover:text-primary transition-colors disabled:opacity-50" disabled={true}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>chevron_left</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded border border-primary bg-primary text-on-primary font-label-sm text-label-sm transition-colors">1</button>
        <button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-on-surface hover:border-primary hover:text-primary font-label-sm text-label-sm transition-colors">2</button>
        <button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-on-surface hover:border-primary hover:text-primary font-label-sm text-label-sm transition-colors">3</button>
        <span className="text-on-surface-variant px-2">...</span>
        <button className="w-10 h-10 flex items-center justify-center rounded border border-outline-variant text-outline hover:border-primary hover:text-primary transition-colors">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>chevron_right</span>
        </button>
      </div>
    </main>
  );
}
