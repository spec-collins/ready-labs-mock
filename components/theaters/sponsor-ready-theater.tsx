const ITEMS = [
  "Brand one-sheet",
  "Talk track",
  "QR drop",
  "Follow-up sequence",
  "Compliance check",
];

export function SponsorReadyTheater() {
  return (
    <div className="theater-stage min-h-[360px] p-5 sm:min-h-[420px] sm:p-8">
      <div className="mb-5 flex items-center justify-between text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
        <span>Product theater</span>
        <span className="text-flavor">SponsorReady</span>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#0b0d12] p-5">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Agent kit
            </p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">
              Room walk-in
            </h3>
          </div>
          <span className="text-xs text-flavor">Lighting up</span>
        </div>

        <ul className="space-y-2">
          {ITEMS.map((item, index) => (
            <li
              key={item}
              className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3.5 py-3"
              style={{
                animation: "kit-row 8s ease-in-out infinite",
                animationDelay: `${index * 0.38}s`,
              }}
            >
              <span className="text-sm">{item}</span>
              <span
                className="grid size-5 place-items-center rounded-full bg-flavor text-[11px] font-bold text-primary-foreground"
                style={{
                  animation: "kit-check 8s ease-in-out infinite",
                  animationDelay: `${index * 0.38}s`,
                }}
              >
                ✓
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
