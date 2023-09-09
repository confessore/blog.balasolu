import React from "react";

export default function Backdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col flex-wrap items-center justify-center bg-slate-200 p-3 opacity-90 dark:bg-slate-900">
      {children}
    </div>
  );
}
