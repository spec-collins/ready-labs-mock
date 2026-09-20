"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MockCta({
  children,
  className,
  variant = "flavor",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "flavor" | "ghost";
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        type="button"
        onClick={() => {
          setOpen(true);
          window.setTimeout(() => setOpen(false), 2800);
        }}
        className={cn(
          "h-11 rounded-full px-5 text-[13px] font-medium",
          variant === "flavor"
            ? "bg-flavor text-primary-foreground hover:bg-flavor/90"
            : "border border-white/10 bg-transparent text-foreground hover:bg-white/5",
          className
        )}
      >
        {children}
      </Button>
      {open ? (
        <p
          role="status"
          className="absolute top-[calc(100%+10px)] left-0 z-20 w-max max-w-[16rem] rounded-xl border border-white/10 bg-[#111318] px-3 py-2 text-xs text-muted-foreground shadow-xl"
        >
          Mock only — no Stripe, no WhatsApp, no intake.
        </p>
      ) : null}
    </div>
  );
}
