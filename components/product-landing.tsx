import Link from "next/link";
import type { Product } from "@/lib/products";
import { MockCta } from "@/components/mock-cta";
import { AfterHoursTheater } from "@/components/theaters/after-hours-theater";
import { PageReadyTheater } from "@/components/theaters/page-ready-theater";
import { SponsorReadyTheater } from "@/components/theaters/sponsor-ready-theater";
import { WaReadyTheater } from "@/components/theaters/wa-ready-theater";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const THEATERS = {
  pageready: PageReadyTheater,
  afterhours: AfterHoursTheater,
  waready: WaReadyTheater,
  sponsorready: SponsorReadyTheater,
};

export function ProductLanding({ product }: { product: Product }) {
  const Theater = THEATERS[product.id];

  return (
    <div data-flavor={product.id} className="relative">
      <div
        className="ambient-orb -top-24 left-1/2 size-[420px] -translate-x-1/2"
        aria-hidden="true"
      />

      <section className="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:px-8 sm:pt-20">
        <div className="max-w-3xl">
          <p className="type-kicker">{product.eyebrow}</p>
          <h1 className="display mt-4 text-[2.35rem] font-semibold sm:text-6xl">
            {product.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {product.lede}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MockCta>{product.cta}</MockCta>
            <a
              href="#theater"
              className="inline-flex h-11 items-center rounded-full border border-white/10 px-5 text-[13px] text-foreground hover:bg-white/5"
            >
              {product.secondaryCta}
            </a>
          </div>
        </div>

        <div id="theater" className="mt-12 scroll-mt-24">
          <Theater />
          <p className="mt-3 text-center text-sm text-muted-foreground">
            {product.theaterCaption}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="type-kicker">System</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Same skeleton. {product.accentName} flavor.
            </h2>
          </div>
          <Badge
            variant="outline"
            className="hidden border-white/10 text-muted-foreground sm:inline-flex"
          >
            {product.hex}
          </Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {product.features.map((feature) => (
            <Card
              key={feature.title}
              className="border-white/6 bg-surface/80 ring-white/8"
            >
              <CardHeader>
                <CardTitle className="text-[15px]">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <p className="type-kicker">Pricing stub</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Judge the system, not the numbers.
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          No Stripe. Cards exist so the layout can be reviewed at the same
          density as a real landing page.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {product.plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.featured
                  ? "border-transparent bg-surface flavor-ring"
                  : "border-white/6 bg-surface/80 ring-white/8"
              }
            >
              <CardHeader>
                <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {plan.name}
                </p>
                <CardTitle className="text-3xl font-semibold tracking-tight">
                  {plan.price}
                  {plan.price !== "Free" ? (
                    <span className="text-sm font-normal text-muted-foreground">
                      /mo
                    </span>
                  ) : null}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{plan.note}</p>
                <div className="mt-5">
                  <MockCta
                    variant={plan.featured ? "flavor" : "ghost"}
                    className="w-full"
                  >
                    {plan.featured ? "Use this shape" : "Review layout"}
                  </MockCta>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="glass flavor-ring relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10">
          <div
            className="ambient-orb -right-16 -bottom-20 size-56 opacity-25"
            aria-hidden="true"
          />
          <p className="type-kicker">Next</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight">
            {product.pitch}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <MockCta>{product.cta}</MockCta>
            <Link
              href="/"
              className="inline-flex h-11 items-center rounded-full border border-white/10 px-5 text-[13px] hover:bg-white/5"
            >
              Back to family
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
