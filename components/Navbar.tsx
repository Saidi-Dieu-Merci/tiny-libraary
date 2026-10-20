import NavLink from "@/components/NavLink";
export default function Navbar() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-20">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/tinylibrary-logo.png" // replace with your actual logo file
            alt="Tiny Library Logo"
            className="h-15 w-15"
          />
          <span className="text-2xl font-cursive text-green-700">
            Tiny Library
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold">
          <NavLink
            href="/"
            className="px-3 py-1 rounded-md text-gray-700 hover:text-orange-500"
          >
            HOME
          </NavLink>
          <NavLink
            href="/books"
            className="px-3 py-1 rounded-md text-gray-700 hover:text-orange-500"
          >
            BOOKS
          </NavLink>
          <NavLink
            href="/about"
            className="px-3 py-1 rounded-md text-gray-700 hover:text-orange-500"
          >
            ABOUT
          </NavLink>
        </ul>

        {/* Mobile Nav (hamburger with <details>) */}
        <details className="md:hidden relative">
          <summary className="list-none cursor-pointer text-gray-700">
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>

          <ul className="absolute right-0 mt-2 w-40 bg-white shadow-md flex flex-col items-center space-y-4 py-4 text-lg font-semibold animate-slide-down">
            <NavLink
              href="/"
              className="px-3 py-1 rounded-md bg-orange-500 text-white"
            >
              HOME
            </NavLink>
            <NavLink
              href="/books"
              className="px-3 py-1 rounded-md text-gray-700 hover:text-orange-500"
            >
              BOOKS
            </NavLink>
            <NavLink
              href="/about"
              className="px-3 py-1 rounded-md text-gray-700 hover:text-orange-500"
            >
              ABOUT
            </NavLink>
          </ul>
        </details>
      </nav>
    </header>
  );
}
