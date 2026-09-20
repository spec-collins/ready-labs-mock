export function PageReadyTheater() {
  return (
    <div className="theater-stage min-h-[360px] p-5 sm:min-h-[420px] sm:p-8">
      <div className="mb-5 flex items-center justify-between text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
        <span>Product theater</span>
        <span className="text-flavor">PageReady</span>
      </div>

      <div className="grid items-center gap-6 md:grid-cols-[1fr_1.1fr]">
        <div className="relative h-48 sm:h-56">
          <div
            className="absolute top-2 left-1 w-36 rounded-xl bg-[#fff6bf] p-3 text-[#2a2410] shadow-xl"
            style={{ animation: "note-a 7.2s ease-in-out infinite" }}
          >
            <p className="text-[10px] font-semibold tracking-wide uppercase opacity-60">
              Voice memo
            </p>
            <p className="mt-1 text-[12px] leading-snug">
              Need a one-pager for the Thursday room — problem, offer, proof.
            </p>
          </div>
          <div
            className="absolute top-16 right-2 w-32 rounded-xl bg-[#cfe8ff] p-3 text-[#102033] shadow-xl"
            style={{ animation: "note-b 7.2s ease-in-out infinite" }}
          >
            <p className="text-[10px] font-semibold tracking-wide uppercase opacity-60">
              Slack
            </p>
            <p className="mt-1 text-[12px] leading-snug">
              Keep it to one page. No appendix.
            </p>
          </div>
          <div
            className="absolute bottom-2 left-10 w-36 rounded-xl bg-[#ffd8c2] p-3 text-[#2b160c] shadow-xl"
            style={{ animation: "note-c 7.2s ease-in-out infinite" }}
          >
            <p className="text-[10px] font-semibold tracking-wide uppercase opacity-60">
              Scrap
            </p>
            <p className="mt-1 text-[12px] leading-snug">
              Audience: operators who already said yes once.
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl border border-white/10 bg-[#0b0d12] p-5 shadow-2xl"
          style={{ animation: "pager-lock 7.2s ease-in-out infinite" }}
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[11px] tracking-[0.18em] text-flavor uppercase">
              One-pager
            </p>
            <span className="rounded-full bg-flavor-soft px-2 py-0.5 text-[10px] text-flavor">
              Locked
            </span>
          </div>
          <h3 className="text-lg font-semibold tracking-tight">
            Thursday room brief
          </h3>
          <div className="mt-4 grid gap-2.5 text-[13px]">
            {[
              ["Problem", "Decisions die in long docs."],
              ["Audience", "Operators who already said yes."],
              ["Offer", "One page. Four blocks. Ship."],
              ["Proof", "The room left with a yes."],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-start justify-between gap-4 border-t border-white/6 pt-2.5"
              >
                <span className="text-muted-foreground">{label}</span>
                <span className="text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
