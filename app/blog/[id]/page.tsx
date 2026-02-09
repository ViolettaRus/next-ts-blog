import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Post = {
  id: number;
  title: string;
  body: string;
};

async function fetchPost(id: string): Promise<Post | null> {
  // Небольшая задержка для демонстрации loading
  await new Promise((resolve) => setTimeout(resolve, 800));

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Не удалось загрузить статью");
  }

  const post: Post = await res.json();
  return post;
}

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata(
  { params }: PageProps,
): Promise<Metadata> {
  const post = await fetchPost(params.id);

  if (!post) {
    notFound();
  }

  const title = `${post.title} | Blog | Demo App`;
  const description =
    post.body.length > 140 ? `${post.body.slice(0, 137)}...` : post.body;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await fetchPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-4 rounded-md border border-zinc-200 bg-white p-4 shadow-sm">
      <h2 className="text-2xl font-semibold">{post.title}</h2>
      <p className="whitespace-pre-wrap text-zinc-700">{post.body}</p>
    </article>
  );
}

