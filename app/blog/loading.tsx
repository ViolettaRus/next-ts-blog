'use client';

export default function BlogLoading() {
  return (
    <div className="space-y-3">
      <div className="h-6 w-40 animate-pulse rounded bg-zinc-200" />
      <div className="space-y-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-16 animate-pulse rounded-md bg-zinc-200"
          />
        ))}
      </div>
      <p className="text-sm text-zinc-500">
        Загрузка списка статей...
      </p>
    </div>
  );
}

