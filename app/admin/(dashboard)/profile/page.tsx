import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="flex-1 max-w-container-max mx-auto w-full px-gutter pt-[104px] pb-stack-xl flex flex-col md:flex-row gap-stack-md">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-[104px] flex flex-col gap-2">
          <h2 className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-2 px-3">Settings Menu</h2>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-primary bg-surface-container-low font-medium border border-outline-variant" href="/admin/profile">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>person</span>
            Profile Management
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container-lowest transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>palette</span>
            Site Appearance
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container-lowest transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>group</span>
            Team Access
          </Link>
          <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-secondary hover:text-primary hover:bg-surface-container-lowest transition-colors mt-4" href="/admin/login">
            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>logout</span>
            Sign Out
          </Link>
        </div>
      </aside>
      
      {/* Main Form Area */}
      <main className="flex-1 max-w-reading-width">
        <header className="mb-stack-md">
          <h1 className="font-display text-display md:text-headline-lg text-on-surface mb-2">Profile Management</h1>
          <p className="font-body-md text-body-md text-secondary">Update your personal information and security preferences.</p>
        </header>
        
        <div className="flex flex-col gap-stack-xl">
          {/* Profile Information Section */}
          <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface border-b border-outline-variant pb-4 mb-6">Profile Information</h2>
            <div className="flex flex-col md:flex-row gap-8 mb-8 items-start">
              {/* Avatar Upload */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative group cursor-pointer">
                  <img className="w-32 h-32 rounded-full object-cover border-2 border-outline-variant group-hover:border-primary transition-colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZpgsOpFbN1-v8ahFl8w1WM8boudKZW0qWJQ40DzJ86KO9W0--T4NnhaumkeWPGJyvvBwlyt1nCk08mdYUWZ4S6Wr719keS2XVsTfDsDfQPMPoHBjjgATmimyx2bGMEub2rwfxXKPTAZzUQUe_yGwamqtkb0-HGBjd3mllav2Q9FfvXUwuf3BMJ_YKBH6cPn7-0r_HzoEZ2sbrfIhVY4yai80c1bejJCwSDvhzKbca93rf_Fees450" alt="Avatar"/>
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>photo_camera</span>
                  </div>
                </div>
                <button className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors">Change Picture</button>
              </div>
              
              {/* Form Fields */}
              <div className="flex-1 flex flex-col gap-5 w-full">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface mb-1.5" htmlFor="fullName">Full Name</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" id="fullName" placeholder="Jane Doe" type="text" defaultValue="Admin User"/>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface mb-1.5" htmlFor="emailAddress">Email Address</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" id="emailAddress" placeholder="jane@example.com" type="email" defaultValue="admin@theinsightful.com"/>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1.5" htmlFor="bio">Short Bio</label>
              <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow resize-y" id="bio" placeholder="A brief description of your role or background..." rows={4} defaultValue="A brief description of your role or background..."></textarea>
              <p className="font-label-sm text-label-sm text-secondary mt-2">This may be displayed publicly on articles you author.</p>
            </div>
          </section>
          
          {/* Security Section */}
          <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 md:p-8">
            <h2 className="font-headline-md text-headline-md text-on-surface border-b border-outline-variant pb-4 mb-6">Security</h2>
            <div className="flex flex-col gap-5">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1.5" htmlFor="currentPassword">Current Password</label>
                <input className="w-full md:w-2/3 bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" id="currentPassword" type="password"/>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1.5" htmlFor="newPassword">New Password</label>
                <input className="w-full md:w-2/3 bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" id="newPassword" type="password"/>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-1.5" htmlFor="confirmPassword">Confirm New Password</label>
                <input className="w-full md:w-2/3 bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-shadow" id="confirmPassword" type="password"/>
              </div>
            </div>
          </section>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-4 border-t border-outline-variant">
            <button className="font-label-sm text-label-sm px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors">Cancel</button>
            <button className="font-label-sm text-label-sm px-6 py-2.5 rounded-lg bg-primary text-on-primary hover:bg-inverse-surface transition-colors">Save Changes</button>
          </div>
        </div>
      </main>
    </div>
  );
}
