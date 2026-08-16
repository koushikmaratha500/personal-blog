import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-container-max mx-auto px-gutter py-stack-xl">
      {/*  Hero Section  */}
      <section className="max-w-reading-width mx-auto text-center space-y-6 mb-stack-xl pt-12 md:pt-24">
        <h1 className="font-display text-display text-on-surface md:font-display md:text-display font-headline-lg-mobile text-headline-lg-mobile">Essays on Design, Technology, and Human Behavior.</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Exploring the intersections of digital interfaces and psychological patterns. I write deep dives intended to provoke thought and inspire better product decisions.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <button className="bg-primary text-on-primary font-label-sm text-label-sm px-6 py-3 rounded-DEFAULT hover:bg-primary/90 transition-colors">Read Latest</button>
          <button className="border border-outline-variant bg-surface-container-lowest text-on-surface font-label-sm text-label-sm px-6 py-3 rounded-DEFAULT hover:border-outline hover:bg-surface-container-low transition-colors">Subscribe via Email</button>
        </div>
      </section>
      
      <hr className="border-outline-variant/30 mb-stack-xl max-w-reading-width mx-auto" />
      
      {/*  Latest Posts Section (Bento-ish asymmetric layout)  */}
      <section className="mb-stack-xl">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Latest Writing</h2>
          <Link href="/posts" className="font-label-sm text-label-sm text-secondary hover:text-primary flex items-center gap-1 transition-colors">
            View All <span className="material-symbols-outlined text-sm" data-icon="arrow_forward" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/*  Featured Post (Spans 8 cols)  */}
          <Link href="/post/tyranny-of-consistency" className="md:col-span-8 group border border-outline-variant bg-surface-container-lowest p-6 flex flex-col justify-between hover:border-outline hover:bg-surface-container-low transition-all duration-300">
            <div>
              <div className="mb-4 aspect-[16/9] w-full overflow-hidden bg-surface-container-highest">
                <img className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" alt="A striking digital installation art piece" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCluZrGFNzu3oxcNgOGbnwRaE6kXD6xr4Nm-VDSFe4ajxoCnAxC1emv-z8cg9PRKLADykvWU8d5tvL64vOtjebnaHkFGBvHohJyozSf3Qazo83tRbvFNxrwFp6d1XMgKg_jq2lXv1DkVL-Nw7Dh2R1diBZ9xkRrYcSQ3vTzqFDaZyEmbBJHq64HchwNLlQRLFCOk_rlx8PeWcmhwH5db6QY62oPffIhZ81l51on1rX4ZKFgEz37adep"/>
              </div>
              <div className="flex gap-2 items-center mb-3">
                <span className="font-label-sm text-label-sm text-tertiary px-2 py-1 bg-surface-variant rounded-sm">Design Systems</span>
                <span className="font-label-sm text-label-sm text-secondary">Oct 12, 2024</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-3 group-hover:text-tertiary-container transition-colors">The Tyranny of Consistency in UI</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Why strict adherence to design guidelines often results in soulless products, and how to introduce intentional friction to create memorable user experiences without sacrificing usability.</p>
            </div>
          </Link>
          
          {/*  Secondary Posts Container  */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {/*  Post 2  */}
            <Link href="/post/cognitive-load" className="flex-1 group border border-outline-variant bg-surface-container-lowest p-6 hover:border-outline hover:bg-surface-container-low transition-all duration-300">
              <div className="flex gap-2 items-center mb-3">
                <span className="font-label-sm text-label-sm text-tertiary px-2 py-1 bg-surface-variant rounded-sm">Psychology</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-tertiary-container transition-colors">Cognitive Load and Empty States</h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">Designing for the moment a user first logs in. How the absence of data shapes initial perceptions.</p>
            </Link>
            
            {/*  Post 3  */}
            <Link href="/post/state-management" className="flex-1 group border border-outline-variant bg-surface-container-lowest p-6 hover:border-outline hover:bg-surface-container-low transition-all duration-300">
              <div className="flex gap-2 items-center mb-3">
                <span className="font-label-sm text-label-sm text-tertiary px-2 py-1 bg-surface-variant rounded-sm">Code</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 group-hover:text-tertiary-container transition-colors">Re-thinking State Management</h3>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">A minimalist approach to handling complex data flows in modern web applications.</p>
            </Link>
          </div>
        </div>
      </section>
      
      {/*  About Teaser (Quote block style)  */}
      <section className="max-w-reading-width mx-auto bg-surface-container-low p-8 md:p-12 mb-stack-xl border-l-4 border-tertiary-container">
        <h2 className="font-headline-md text-headline-md mb-4 text-on-surface">About the Author</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant italic mb-6">
          &quot;I believe that the best software feels like a quiet conversation with an expert. My goal is to decode the principles that make those conversations possible.&quot;
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
            <img className="w-full h-full object-cover" alt="Jane Doe Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYfwr--zbHir3DcsT4DrP_p37AMxVVGyc3bTVgvG1slz7ZEME_bOyFRMpxoXsOIcKpaXewXOu7SF1ZDNOuRYLZuVxWSFdGfZetZYp4IQaXtEWTbrrg-6JGbanC4VzqndKDwkO7lxhHMTppjiZ0zsTRs8R_M7k_2VL_Wos2DVIKZKFmnfJ_0n-c9D_TRc_4SUb5Y70WOE2eEiiNa18GPOZpvD3fNrIOYWtCMZy5tp52iUvUpkoqKEsN"/>
          </div>
          <div>
            <div className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Jane Doe</div>
            <div className="font-body-md text-body-md text-secondary">Lead Designer at TechCorp</div>
          </div>
        </div>
      </section>
    </main>
  );
}
