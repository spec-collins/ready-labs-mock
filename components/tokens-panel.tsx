"use client";

import { useState } from "react";
import { FAMILY, PRODUCTS, type FlavorId } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const FLAVORS: { id: FlavorId; name: string; hex: string }[] = [
  { id: "family", name: FAMILY.name, hex: FAMILY.hex },
  ...PRODUCTS.map((product) => ({
    id: product.id,
    name: product.name,
    hex: product.hex,
  })),
];

const SHARED = [
  { token: "--background", value: "#07080B", swatch: "#07080B" },
  { token: "--surface", value: "#0E1015", swatch: "#0E1015" },
  { token: "--surface-elevated", value: "#151821", swatch: "#151821" },
  { token: "--border", value: "rgba(255,255,255,0.08)", swatch: "#2A2C32" },
  { token: "--foreground", value: "#F4F5F7", swatch: "#F4F5F7" },
  { token: "--text-muted", value: "#8B909C", swatch: "#8B909C" },
  { token: "--radius", value: "1rem", swatch: null },
];

const TYPE = [
  { name: "Display", sample: "Ready Labs", className: "text-4xl font-semibold tracking-tight" },
  { name: "Title", sample: "Shared skeleton", className: "text-2xl font-semibold tracking-tight" },
  { name: "Body", sample: "Layout and functionality should impress.", className: "text-base" },
  { name: "Muted", sample: "Devco Labs LLC stack", className: "text-sm text-muted-foreground" },
  { name: "Kicker", sample: "CYAN ACCENT", className: "type-kicker" },
];

export function TokensPanel() {
  const [flavor, setFlavor] = useState<FlavorId>("pageready");
  const active = FLAVORS.find((item) => item.id === flavor) ?? FLAVORS[1];

  return (
    <div data-flavor={flavor} className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <p className="type-kicker">Design tokens</p>
      <h1 className="display mt-3 max-w-3xl text-4xl font-semibold sm:text-6xl">
        Shared language. Swappable flavor.
      </h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        Background, surface, border, type, and radius stay put. Only{" "}
        <code className="text-foreground">--flavor</code> moves. Use the switcher
        to see PageReady cyan, AfterHours amber, WaReady green, and SponsorReady
        violet on the same components.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {FLAVORS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFlavor(item.id)}
            data-flavor={item.id}
            className={cn(
              "inline-flex h-10 items-center gap-2 rounded-full border px-3.5 text-[13px] transition-colors",
              flavor === item.id
                ? "border-flavor bg-flavor-soft text-foreground"
                : "border-white/10 text-muted-foreground hover:text-foreground"
            )}
          >
            <span className="size-2.5 rounded-full bg-flavor" />
            {item.name}
          </button>
        ))}
      </div>

      <Tabs defaultValue="shared" className="mt-10">
        <TabsList className="bg-white/5">
          <TabsTrigger value="shared">Shared</TabsTrigger>
          <TabsTrigger value="flavor">Flavor</TabsTrigger>
          <TabsTrigger value="type">Type</TabsTrigger>
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
        </TabsList>

        <TabsContent value="shared" className="mt-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SHARED.map((item) => (
              <Card key={item.token} className="border-white/6 bg-surface ring-white/8">
                <CardHeader>
                  <CardTitle className="font-mono text-xs text-muted-foreground">
                    {item.token}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-3">
                  {item.swatch ? (
                    <span
                      className="size-10 rounded-xl border border-white/10"
                      style={{ background: item.swatch }}
                    />
                  ) : (
                    <span className="size-10 rounded-[14px] border border-white/15 bg-white/5" />
                  )}
                  <span className="text-sm">{item.value}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="flavor" className="mt-6">
          <Card className="border-white/6 bg-surface ring-white/8">
            <CardHeader>
              <CardTitle>{active.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-3">
              <Swatch label="--flavor" value={active.hex} color={active.hex} />
              <Swatch label="--flavor-soft" value="12–14% wash" color="var(--flavor-soft)" />
              <Swatch label="--flavor-glow" value="soft bloom" color="var(--flavor-glow)" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="type" className="mt-6">
          <Card className="border-white/6 bg-surface ring-white/8">
            <CardContent className="space-y-5 pt-6">
              {TYPE.map((row) => (
                <div
                  key={row.name}
                  className="flex flex-col gap-1 border-b border-white/6 pb-4 last:border-0 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {row.name}
                  </span>
                  <p className={row.className}>{row.sample}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="buttons" className="mt-6">
          <Card className="border-white/6 bg-surface ring-white/8">
            <CardContent className="flex flex-wrap items-center gap-3 pt-6">
              <Button className="h-11 rounded-full bg-flavor px-5 text-primary-foreground hover:bg-flavor/90">
                Primary
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-full border-white/10 bg-transparent"
              >
                Outline
              </Button>
              <Button variant="ghost" className="h-11 rounded-full">
                Ghost
              </Button>
              <Button
                variant="secondary"
                className="h-11 rounded-full"
              >
                Secondary
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Swatch({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div>
      <span
        className="mb-3 block h-20 rounded-2xl border border-white/10"
        style={{ background: color }}
      />
      <p className="font-mono text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}
