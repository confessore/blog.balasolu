import Image from "next/image";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center gap-3 py-10 text-slate-950 opacity-90 dark:text-slate-50 lg:py-0 lg:pb-10">
      <div className="fixed inset-0 -z-10 h-[100vh] w-[100vw]">
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
