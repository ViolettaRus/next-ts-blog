export default function DashboardPage() {
  return (
    <div className="space-y-3 rounded-md border border-zinc-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-semibold">Обзор</h2>
      <p className="text-zinc-600">
        Это корневая страница dashboard. Она рендерится вместе с параллельными
        маршрутами <span className="font-mono">@stats</span> и{" "}
        <span className="font-mono">@activity</span>.
      </p>
      <p className="text-zinc-600">
        В реальном приложении здесь могли бы быть графики, фильтры и другие
        элементы управления.
      </p>
    </div>
  );
}

