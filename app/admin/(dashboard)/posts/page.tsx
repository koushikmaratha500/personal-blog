import Link from "next/link";

export default function AdminPostsPage() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-stack-xl mt-[72px]">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-stack-md gap-4">
        <div>
          <h1 className="font-display text-display text-on-surface mb-2">Post Management</h1>
          <p className="font-body-md text-body-md text-secondary">Manage, edit, and publish your editorial content.</p>
        </div>
        <Link href="/admin/posts/edit" className="flex items-center gap-2 font-label-sm text-label-sm px-5 py-3 bg-primary text-on-primary rounded hover:bg-primary/90 transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>add</span>
          Create New Post
        </Link>
      </div>
      
      {/* Controls Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 bg-surface-container-lowest p-4 border border-outline-variant rounded">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>search</span>
          <input className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface placeholder-outline transition-all" placeholder="Search posts..." type="text"/>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low transition-colors w-full md:w-auto justify-center">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>filter_list</span>
            Filter
          </button>
        </div>
      </div>
      
      {/* Post List / Table View */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
        {/* Header Row */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container-low border-b border-outline-variant font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
          <div className="col-span-5">Title</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Date Modified</div>
          <div className="col-span-3 text-right">Actions</div>
        </div>
        
        {/* List Items */}
        <div className="divide-y divide-outline-variant">
          {/* Item 1: Published */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-surface-container-low transition-colors duration-150">
            <div className="col-span-1 md:col-span-5 flex flex-col">
              <Link className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors line-clamp-1 mb-1" href="/post/architecture-of-modern-thought">
                The Architecture of Modern Thought
              </Link>
              <span className="font-label-sm text-label-sm text-secondary">By The Insightful Staff</span>
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-outline-variant bg-surface font-label-sm text-label-sm text-on-surface">
                <span className="w-2 h-2 rounded-full bg-primary block"></span>
                Published
              </span>
            </div>
            <div className="col-span-1 md:col-span-2 font-body-md text-body-md text-secondary">
              Oct 24, 2024
            </div>
            <div className="col-span-1 md:col-span-3 flex items-center justify-start md:justify-end gap-2 mt-3 md:mt-0">
              <Link href="/post/architecture-of-modern-thought" className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded transition-colors" title="View">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>visibility</span>
              </Link>
              <Link href="/admin/posts/edit" className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded transition-colors" title="Edit">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>edit</span>
              </Link>
              <button className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded transition-colors" title="Unpublish">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>unpublished</span>
              </button>
              <button className="p-2 text-secondary hover:text-error hover:bg-error-container rounded transition-colors" title="Delete">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>delete</span>
              </button>
            </div>
          </div>
          
          {/* Item 2: Draft */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-surface-container-low transition-colors duration-150">
            <div className="col-span-1 md:col-span-5 flex flex-col">
              <Link className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors line-clamp-1 mb-1" href="/admin/posts/edit">
                Silence as a Design Principle
              </Link>
              <span className="font-label-sm text-label-sm text-secondary">By Jane Doe</span>
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-outline-variant bg-surface-variant font-label-sm text-label-sm text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-outline block"></span>
                Draft
              </span>
            </div>
            <div className="col-span-1 md:col-span-2 font-body-md text-body-md text-secondary">
              Oct 22, 2024
            </div>
            <div className="col-span-1 md:col-span-3 flex items-center justify-start md:justify-end gap-2 mt-3 md:mt-0">
              <Link href="#" className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded transition-colors" title="View Preview">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>visibility</span>
              </Link>
              <Link href="/admin/posts/edit" className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded transition-colors" title="Edit">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>edit</span>
              </Link>
              <button className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded transition-colors" title="Publish">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>publish</span>
              </button>
              <button className="p-2 text-secondary hover:text-error hover:bg-error-container rounded transition-colors" title="Delete">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>delete</span>
              </button>
            </div>
          </div>
          
          {/* Item 3: Published */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-surface-container-low transition-colors duration-150">
            <div className="col-span-1 md:col-span-5 flex flex-col">
              <Link className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors line-clamp-1 mb-1" href="/post/decline-of-digital-ornament">
                The Decline of the Digital Ornament
              </Link>
              <span className="font-label-sm text-label-sm text-secondary">By The Insightful Staff</span>
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-outline-variant bg-surface font-label-sm text-label-sm text-on-surface">
                <span className="w-2 h-2 rounded-full bg-primary block"></span>
                Published
              </span>
            </div>
            <div className="col-span-1 md:col-span-2 font-body-md text-body-md text-secondary">
              Oct 18, 2024
            </div>
            <div className="col-span-1 md:col-span-3 flex items-center justify-start md:justify-end gap-2 mt-3 md:mt-0">
              <Link href="/post/decline-of-digital-ornament" className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded transition-colors" title="View">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>visibility</span>
              </Link>
              <Link href="/admin/posts/edit" className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded transition-colors" title="Edit">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>edit</span>
              </Link>
              <button className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded transition-colors" title="Unpublish">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>unpublished</span>
              </button>
              <button className="p-2 text-secondary hover:text-error hover:bg-error-container rounded transition-colors" title="Delete">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>delete</span>
              </button>
            </div>
          </div>
          
          {/* Item 4: Draft */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-surface-container-low transition-colors duration-150">
            <div className="col-span-1 md:col-span-5 flex flex-col">
              <Link className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors line-clamp-1 mb-1" href="/admin/posts/edit">
                Typographic Scales for the Modern Web
              </Link>
              <span className="font-label-sm text-label-sm text-secondary">By John Smith</span>
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-outline-variant bg-surface-variant font-label-sm text-label-sm text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-outline block"></span>
                Draft
              </span>
            </div>
            <div className="col-span-1 md:col-span-2 font-body-md text-body-md text-secondary">
              Oct 15, 2024
            </div>
            <div className="col-span-1 md:col-span-3 flex items-center justify-start md:justify-end gap-2 mt-3 md:mt-0">
              <Link href="#" className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded transition-colors" title="View Preview">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>visibility</span>
              </Link>
              <Link href="/admin/posts/edit" className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded transition-colors" title="Edit">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>edit</span>
              </Link>
              <button className="p-2 text-secondary hover:text-primary hover:bg-surface-container rounded transition-colors" title="Publish">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>publish</span>
              </button>
              <button className="p-2 text-secondary hover:text-error hover:bg-error-container rounded transition-colors" title="Delete">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>delete</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Pagination Footer */}
        <div className="px-6 py-4 bg-surface-container-lowest border-t border-outline-variant flex justify-between items-center">
          <span className="font-label-sm text-label-sm text-secondary">Showing 1 to 4 of 24 posts</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-outline-variant rounded font-label-sm text-label-sm text-secondary hover:bg-surface-container-low transition-colors disabled:opacity-50" disabled={true}>Previous</button>
            <button className="px-3 py-1.5 border border-outline-variant rounded font-label-sm text-label-sm text-on-surface hover:bg-surface-container-low transition-colors">Next</button>
          </div>
        </div>
      </div>
    </main>
  );
}
