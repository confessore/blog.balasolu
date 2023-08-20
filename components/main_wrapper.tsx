import Image from "next/image";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full min-h-screen min-w-full flex-col items-center justify-between gap-3 text-slate-950 dark:text-slate-50">
      <div className="fixed inset-0 -z-10 h-full w-full">
        <Image
          src={"https://balasolu.com/jwt.webp"}
          alt={"jwt"}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      {children}
    </main>
  );
}
