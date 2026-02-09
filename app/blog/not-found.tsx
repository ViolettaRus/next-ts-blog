import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold">Страница не найдена</h2>
      <p className="text-zinc-600">
        Такой статьи не существует. Возможно, она была удалена или вы ошиблись
        в адресе.
      </p>
      <Link
        href="/blog"
        prefetch
        className="inline-flex items-center rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-700"
      >
        Вернуться к списку статей
      </Link>
    </div>
  );
}

