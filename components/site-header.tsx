"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/products";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

function flavorFromPath(pathname: string) {
  if (pathname.startsWith("/pageready")) return "pageready";
  if (pathname.startsWith("/afterhours")) return "afterhours";
  if (pathname.startsWith("/waready")) return "waready";
  if (pathname.startsWith("/sponsorready")) return "sponsorready";
  if (pathname.startsWith("/tokens")) return "family";
  return "family";
}

export function SiteHeader() {
  const pathname = usePathname();
  const flavor = flavorFromPath(pathname);

  return (
    <header
      data-flavor={flavor}
      className="sticky top-0 z-30 border-b border-white/6 bg-[#07080b]/72 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-lg bg-flavor-soft ring-1 ring-white/10">
            <span className="size-2 rotate-45 rounded-[1px] bg-flavor shadow-[0_0_12px_var(--flavor-glow)]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight">
              Ready Labs
            </span>
            <span className="mt-1 hidden text-[10px] tracking-[0.16em] text-muted-foreground uppercase sm:block">
              Devco Labs LLC
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[13px] transition-colors",
                  active
                    ? "bg-flavor-soft text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-9 rounded-full bg-flavor px-4 text-[13px] font-medium text-primary-foreground hover:bg-flavor/90 sm:inline-flex"
          >
            <Link href="/tokens">Review tokens</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-white/10 bg-white/3 lg:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-white/10 bg-[#0b0c10] sm:max-w-xs"
            >
              <SheetHeader>
                <SheetTitle>Ready Labs</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-xl px-3 py-3 text-sm text-foreground/90 hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
