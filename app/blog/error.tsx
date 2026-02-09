'use client';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function BlogError({ error, reset }: ErrorProps) {
  return (
    <div className="space-y-3 rounded-md border border-red-200 bg-red-50 p-4 text-red-900">
      <h2 className="text-lg font-semibold">
        Произошла ошибка при загрузке блога
      </h2>
      <p className="text-sm">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700"
      >
        Попробовать снова
      </button>
    </div>
  );
}

