"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  exact,
}: {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <li>
      <Link
        href={href}
        className={`px-3 py-1 rounded-md text-gray-700 hover:text-orange-500
              ${isActive ? "text-orange-400" : "text-gray-700"}`}
      >
        {children}
      </Link>
    </li>
  );
}
