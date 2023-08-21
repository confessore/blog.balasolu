import Image from "next/image";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center gap-3 bg-slate-50 py-10 text-slate-950 opacity-90 dark:bg-slate-950 dark:text-slate-50 lg:py-0 lg:pb-10">
      {children}
    </main>
  );
}
