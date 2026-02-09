export default function DashboardActivity() {
  return (
    <section className="space-y-2 rounded-md border border-zinc-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold">Последняя активность</h2>
      <ul className="space-y-1 text-sm text-zinc-700">
        <li>10:15 — Новый пользователь зарегистрировался</li>
        <li>10:10 — Опубликована новая статья в блоге</li>
        <li>09:55 — Обновлён тарифный план</li>
      </ul>
    </section>
  );
}

