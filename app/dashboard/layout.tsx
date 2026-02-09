import type { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
  stats: ReactNode;
  activity: ReactNode;
};

export default function DashboardLayout({
  children,
  stats,
  activity,
}: DashboardLayoutProps) {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-zinc-600">
          Пример вложенных и параллельных маршрутов. Основное содержимое,
          статистика и активность отображаются одновременно.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          {children}
        </div>
        <div className="space-y-4">
          {stats}
          {activity}
        </div>
      </div>
    </section>
  );
}

