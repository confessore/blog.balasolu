import React from "react";

export default function Backdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col flex-wrap items-center justify-around bg-slate-200 p-8 opacity-90 dark:bg-slate-900">
      {children}
    </div>
  );
}
