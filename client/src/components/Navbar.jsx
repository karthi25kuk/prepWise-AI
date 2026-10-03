function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 shadow-md">
            <span className="text-xl sm:text-2xl">🧠</span>
          </div>

          <div>
            <h1 className="text-lg sm:text-xl font-bold text-white">
              PrepWise <span className="text-blue-400">AI</span>
            </h1>

            <p className="hidden sm:block text-xs text-slate-300">
              Smart Interview Preparation
            </p>
          </div>
        </div>

        {/* AI Badge */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-medium">
            ✨ AI Powered
          </span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

