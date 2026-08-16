export default function EditPostPage() {
  return (
    <main className="max-w-container-max mx-auto px-gutter py-stack-md flex flex-col lg:flex-row gap-stack-md items-start mt-[72px]">
      {/* Canvas/Editor Area (Left Column) */}
      <div className="flex-1 w-full min-w-0 flex flex-col gap-stack-md">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md shadow-sm shadow-black/5">
          {/* Header Inputs */}
          <div className="flex flex-col gap-2 mb-stack-md">
            <input className="w-full bg-transparent border-none focus:ring-0 font-headline-lg text-headline-lg md:font-display md:text-display text-on-surface placeholder:text-outline-variant p-0 m-0 focus:outline-none" placeholder="Post Title" type="text" defaultValue="The Architecture of Minimalist Interfaces"/>
            <input className="w-full bg-transparent border-none focus:ring-0 font-body-lg text-body-lg text-secondary placeholder:text-outline-variant p-0 m-0 focus:outline-none" placeholder="Optional subtitle or excerpt for summaries..." type="text" defaultValue="Exploring the functional aesthetic of quiet digital spaces."/>
          </div>
          
          {/* Rich Text Toolbar */}
          <div className="flex items-center gap-1 border-y border-outline-variant py-2 mb-stack-md overflow-x-auto">
            <button className="p-1.5 rounded hover:bg-surface-container-low text-on-surface transition-colors focus:outline-none" title="Bold">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>format_bold</span>
            </button>
            <button className="p-1.5 rounded hover:bg-surface-container-low text-on-surface transition-colors focus:outline-none" title="Italic">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>format_italic</span>
            </button>
            <button className="p-1.5 rounded bg-surface-container-low text-primary transition-colors focus:outline-none" title="Heading">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>title</span>
            </button>
            <div className="w-[1px] h-5 bg-outline-variant mx-1"></div>
            <button className="p-1.5 rounded hover:bg-surface-container-low text-on-surface transition-colors focus:outline-none" title="Link">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>link</span>
            </button>
            <button className="p-1.5 rounded hover:bg-surface-container-low text-on-surface transition-colors focus:outline-none" title="Quote">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>format_quote</span>
            </button>
            <button className="p-1.5 rounded hover:bg-surface-container-low text-on-surface transition-colors focus:outline-none" title="Code">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>code</span>
            </button>
            <div className="w-[1px] h-5 bg-outline-variant mx-1"></div>
            <button className="p-1.5 rounded hover:bg-surface-container-low text-on-surface transition-colors focus:outline-none" title="Bulleted List">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>format_list_bulleted</span>
            </button>
            <button className="p-1.5 rounded hover:bg-surface-container-low text-on-surface transition-colors focus:outline-none" title="Numbered List">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>format_list_numbered</span>
            </button>
            <div className="flex-grow"></div>
            <button className="p-1.5 rounded hover:bg-surface-container-low text-secondary transition-colors focus:outline-none" title="Add Media">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>image</span>
            </button>
          </div>
          
          {/* Editor Content Area */}
          <div className="w-full min-h-[500px] font-body-md text-body-md text-on-surface editor-content outline-none cursor-text whitespace-pre-wrap" contentEditable={true} suppressContentEditableWarning={true}>
            In the pursuit of modern digital design, less is often mistaken for lacking. However, true minimalism in user interfaces requires a rigorous editorial process—stripping away the decorative to reveal the essential structure.{"\n\n"}This approach not only reduces cognitive load for the reader but elevates the content itself to the position of primary authority. When we examine the foundational elements...
          </div>
        </div>
      </div>
      
      {/* Meta / Action Sidebar (Right Column) */}
      <aside className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-stack-md">
        {/* Publishing Actions */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md shadow-sm shadow-black/5">
          <h3 className="font-label-sm text-label-sm text-secondary mb-4 uppercase tracking-widest">Publishing</h3>
          <div className="flex flex-col gap-3">
            <button className="w-full bg-primary text-on-primary font-label-sm text-label-sm py-3 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Publish Post
            </button>
            <button className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-label-sm text-label-sm py-3 rounded-lg hover:bg-surface-container-low transition-colors focus:outline-none focus:ring-2 focus:ring-outline-variant focus:ring-offset-2">
              Save Draft
            </button>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-outline-variant">
            <span className="font-label-sm text-label-sm text-secondary">Status</span>
            <span className="font-label-sm text-label-sm text-on-surface bg-surface-container-low px-2 py-1 rounded-md">Draft</span>
          </div>
          <p className="font-label-sm text-label-sm text-outline mt-2 text-right">
            Last saved: 2 mins ago
          </p>
        </div>
        
        {/* Taxonomy & Media */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-md shadow-sm shadow-black/5">
          <h3 className="font-label-sm text-label-sm text-secondary mb-4 uppercase tracking-widest">Post Settings</h3>
          
          {/* Category */}
          <div className="mb-6">
            <label className="font-label-sm text-label-sm text-on-surface block mb-2">Category</label>
            <div className="relative">
              <select className="w-full bg-surface border border-outline-variant rounded-lg py-2.5 px-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer">
                <option>Design Theory</option>
                <option>Case Studies</option>
                <option>Typography</option>
                <option>Updates</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>expand_more</span>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="mb-6">
            <label className="font-label-sm text-label-sm text-on-surface block mb-2">Tags</label>
            <input className="w-full bg-surface border border-outline-variant rounded-lg py-2.5 px-3 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary mb-3" placeholder="Add tags separated by comma" type="text"/>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 bg-surface-container-low border border-outline-variant rounded-full pl-3 pr-2 py-1 font-label-sm text-label-sm text-on-surface">
                Minimalism
                <button className="text-secondary hover:text-on-surface focus:outline-none">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>close</span>
                </button>
              </span>
              <span className="inline-flex items-center gap-1 bg-surface-container-low border border-outline-variant rounded-full pl-3 pr-2 py-1 font-label-sm text-label-sm text-on-surface">
                UI/UX
                <button className="text-secondary hover:text-on-surface focus:outline-none">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>close</span>
                </button>
              </span>
            </div>
          </div>
          
          {/* Featured Image */}
          <div>
            <label className="font-label-sm text-label-sm text-on-surface block mb-2 flex justify-between items-center">
              Featured Image
              <button className="text-secondary hover:text-primary transition-colors focus:outline-none" title="Replace Image">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>sync</span>
              </button>
            </label>
            <div className="relative group cursor-pointer overflow-hidden rounded-lg border border-outline-variant">
              <div className="w-full aspect-[16/9] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzwKrGSkik19HMDxLASOjVGWHyvUOep2E3ZdZiTD5Fs2-U4qDFs7sQLeBLNou2nSJweUSQZrXVHDE8Rgj4BrPPNEeuo-Yvv6Kq6kfb4wjLiYYQww7Z_6nqbZHP7MiNNcMu5DDuVG01Ywwc0_rTQIXAM5iapBwBWkzU4HvzM1Fmhxl1G5dsOGEL33CoHquQh9Q-THdMrh0cGC6kAmj-aQwwuDSogOEUaKaqZneSAyeB-pZ3bWAivtis')" }}></div>
              <div className="absolute inset-0 bg-surface/0 group-hover:bg-surface/10 transition-colors flex items-center justify-center"></div>
            </div>
            <p className="font-label-sm text-label-sm text-outline mt-2">Recommended size: 1200 x 630px</p>
          </div>
        </div>
      </aside>
    </main>
  );
}
