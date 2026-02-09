export default function DashboardStats() {
  return (
    <section className="space-y-2 rounded-md border border-zinc-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold">Статистика</h2>
      <ul className="space-y-1 text-sm text-zinc-700">
        <li>Посетителей сегодня: 1 234</li>
        <li>Просмотров страниц: 3 567</li>
        <li>Конверсия: 4.2%</li>
      </ul>
    </section>
  );
}

