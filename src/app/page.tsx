"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Link 
        href="/profile"
        className="rounded-lg bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90"
      >
        hi
      </Link>
    </div>
  );
}
