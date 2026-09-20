import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FAMILY, PRODUCTS } from "@/lib/products";
import { Badge } from "@/components/ui/badge";

export function FamilyOverview() {
  return (
    <div data-flavor="family" className="relative">
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 sm:px-8 sm:pt-24">
        <p className="type-kicker">Ready Labs · {FAMILY.legal}</p>
        <h1 className="display mt-4 max-w-4xl text-[2.5rem] font-semibold sm:text-6xl lg:text-7xl">
          One dark system.
          <br />
          Four flavor accents.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {FAMILY.pitch}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/tokens"
            className="inline-flex h-11 items-center rounded-full bg-foreground px-5 text-[13px] font-medium text-background"
          >
            Open token panel
          </Link>
          <p className="text-sm text-muted-foreground">
            Near-black canvas, hairline glass, purposeful motion.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Product mocks</h2>
          <Badge variant="outline" className="border-white/10 text-muted-foreground">
            Shared skeleton
          </Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              data-flavor={product.id}
              className="group glass relative overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-0.5 sm:p-8"
            >
              <div
                className="ambient-orb -top-16 -right-10 size-40 opacity-30"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] text-flavor uppercase">
                    <span className="size-1.5 rounded-full bg-flavor" />
                    {product.accentName} · {product.hex}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {product.name}
                  </h3>
                </div>
                <span className="grid size-9 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors group-hover:border-flavor/40 group-hover:text-flavor">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                {product.lede}
              </p>
              <p className="mt-6 text-[13px] text-flavor">{product.theaterCaption}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
