export function AfterHoursTheater() {
  return (
    <div className="theater-stage min-h-[360px] p-5 sm:min-h-[420px] sm:p-8">
      <div className="mb-5 flex items-center justify-between text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
        <span>Product theater</span>
        <span className="text-flavor">AfterHours</span>
      </div>

      <div className="grid items-stretch gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#0b0d12] p-5">
          <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
            After-hours intake
          </p>
          <h3 className="mt-2 text-lg font-semibold tracking-tight">
            Table after close
          </h3>
          <div className="mt-5 space-y-3">
            {[
              ["Name", "Mara Chen"],
              ["Party", "4"],
              ["Time", "10:30 p.m."],
            ].map(([label, value], index) => (
              <label key={label} className="block">
                <span className="text-[11px] text-muted-foreground">{label}</span>
                <span className="mt-1 flex h-10 items-center overflow-hidden rounded-xl border border-white/8 bg-white/3 px-3 font-medium">
                  <span
                    className="overflow-hidden whitespace-nowrap"
                    style={{
                      animation: "type-fill 7.4s ease-in-out infinite",
                      animationDelay: `${index * 0.28}s`,
                    }}
                  >
                    {value}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#120e08] p-5"
          style={{ animation: "confirm-slide 7.4s ease-in-out infinite" }}
        >
          <div>
            <p className="text-[11px] tracking-[0.16em] text-flavor uppercase">
              Confirmed booking
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Table 12
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Mara Chen · party of 4 · 10:30 p.m.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-white/8 pt-4 text-sm">
            <span className="text-muted-foreground">House</span>
            <span>North room, last seating</span>
          </div>
          <div className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-flavor-soft px-3 py-1 text-xs text-flavor">
            <span className="size-1.5 rounded-full bg-flavor" />
            Locked before morning
          </div>
        </div>
      </div>
    </div>
  );
}
