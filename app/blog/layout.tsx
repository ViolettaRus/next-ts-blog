import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="text-zinc-600">
          Статьи загружаются с публичного API
          <span className="font-mono"> jsonplaceholder.typicode.com</span>.
        </p>
      </header>
      {children}
    </section>
  );
}

