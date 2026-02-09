import type { Metadata } from "next";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

export const metadata: Metadata = {
  title: "Blog | Demo App",
  description: "Список статей блога, загружаемых с сервера.",
  openGraph: {
    title: "Blog | Demo App",
    description: "Список статей блога, загружаемых с сервера.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog | Demo App",
    description: "Список статей блога, загружаемых с сервера.",
  },
};

async function fetchPosts(): Promise<Post[]> {
  // Небольшая искусственная задержка, чтобы увидеть состояние loading
  await new Promise((resolve) => setTimeout(resolve, 800));

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Не удалось загрузить список статей");
  }

  const posts: Post[] = await res.json();
  return posts.slice(0, 10); // ограничим список первыми 10 записями
}

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <ul className="space-y-3">
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={`/blog/${post.id}`}
            prefetch
            className="block rounded-md border border-zinc-200 bg-white px-4 py-3 shadow-sm transition hover:border-zinc-400 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="mt-1 line-clamp-2 text-sm text-zinc-600">
              {post.body}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

