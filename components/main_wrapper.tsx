import Image from "next/image";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between gap-3 py-10 text-slate-950 opacity-90 dark:text-slate-50 lg:py-0 lg:pb-10">
      <div className="fixed inset-0 top-[0.5px] left-0 right-0 bottom-[0.5px] overflow-x-hidden overflow-y-auto -z-10 min-h-[100%] min-w-[100%]">
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
