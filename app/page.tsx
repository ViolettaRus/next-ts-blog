export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">
        Next.js App Router Demo
      </h1>
      <p className="text-zinc-600">
        Эта небольшая демо-проект показывает:
        динамические маршруты блога, metadata API, обработчики состояний и
        параллельные маршруты в разделе dashboard.
      </p>
      <p className="text-zinc-600">
        Используйте навигацию сверху, чтобы перейти в разделы{" "}
        <span className="font-medium">Blog</span> и{" "}
        <span className="font-medium">Dashboard</span>.
      </p>
    </div>
  );
}
