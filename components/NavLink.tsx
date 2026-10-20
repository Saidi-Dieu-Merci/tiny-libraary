"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  exact,
  className, // ← 1. accept it here
}: {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
  className?: string; // ← 2. declare it in the type
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <li>
      <Link
        href={href}
        className={`px-3 py-1 rounded-md text-gray-700 hover:text-orange-500
              ${isActive ? "text-orange-400" : "text-gray-700"} ${className ?? ""}`}
      >
        {" "}
        {/* ↑ 3. merge it into the existing classes */}
        {children}
      </Link>
    </li>
  );
}
