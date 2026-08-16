import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-display text-display text-primary">The Insightful</h1>
          <h2 className="mt-6 font-headline-md text-headline-md text-on-surface">Admin Portal</h2>
          <p className="mt-2 text-on-surface-variant font-body-md text-body-md">
            Sign in to manage content and settings.
          </p>
        </div>
        
        {/* Login Form Card */}
        <div className="bg-surface-container-lowest border border-surface-variant rounded-lg p-8">
          <form action="#" className="space-y-6" method="POST">
            {/* Email Input */}
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1" htmlFor="email">Email address</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>mail</span>
                </div>
                <input autoComplete="email" className="appearance-none block w-full pl-10 pr-3 py-2 border border-surface-variant rounded-md bg-surface-container-lowest text-on-surface placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm font-body-md" id="email" name="email" placeholder="admin@theinsightful.com" required={true} type="email"/>
              </div>
            </div>
            
            {/* Password Input */}
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface mb-1" htmlFor="password">Password</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>lock</span>
                </div>
                <input autoComplete="current-password" className="appearance-none block w-full pl-10 pr-3 py-2 border border-surface-variant rounded-md bg-surface-container-lowest text-on-surface placeholder-outline focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm font-body-md" id="password" name="password" placeholder="••••••••" required={true} type="password"/>
              </div>
            </div>
            
            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input className="h-4 w-4 text-primary focus:ring-primary border-outline rounded bg-surface-container-lowest" id="remember-me" name="remember-me" type="checkbox"/>
                <label className="ml-2 block font-body-md text-body-md text-on-surface-variant" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <div className="font-label-sm text-label-sm">
                <Link className="text-primary hover:underline transition-colors" href="#">
                  Forgot password?
                </Link>
              </div>
            </div>
            
            {/* Submit Button */}
            <div>
              <Link href="/admin/posts" className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm font-label-sm text-label-sm text-on-primary bg-primary hover:bg-inverse-surface focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                Sign in
              </Link>
            </div>
          </form>
        </div>
        
        {/* Footer */}
        <div className="text-center text-on-surface-variant font-label-sm text-label-sm mt-8">
          <p>© 2024 The Insightful. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
