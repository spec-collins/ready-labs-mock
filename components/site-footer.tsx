import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-medium">Ready Labs</p>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Design-system preview. Shared tokens, four flavor accents. No live
            Stripe, WhatsApp, or bookings.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Family
          </Link>
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="hover:text-foreground"
            >
              {product.name}
            </Link>
          ))}
          <Link href="/tokens" className="hover:text-foreground">
            Tokens
          </Link>
        </div>
      </div>
    </footer>
  );
}
