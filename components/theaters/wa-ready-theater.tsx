export function WaReadyTheater() {
  return (
    <div className="theater-stage min-h-[360px] p-5 sm:min-h-[420px] sm:p-8">
      <div className="mb-5 flex items-center justify-between text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
        <span>Product theater</span>
        <span className="text-flavor">WaReady</span>
      </div>

      <div className="grid items-center gap-5 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-white/10 bg-[#0b0d12] p-5">
          <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
            Template
          </p>
          <div
            className="relative mt-4 max-w-[280px] rounded-2xl rounded-bl-md bg-[#103226] px-4 py-3 text-sm leading-relaxed"
            style={{ animation: "send-flight 7.6s ease-in-out infinite" }}
          >
            Your table is ready at{" "}
            <span className="text-flavor">8:15</span>. Reply{" "}
            <span className="font-semibold">1</span> to confirm.
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-flavor-soft px-2 py-0.5 text-flavor">
              approved
            </span>
            Variables: time, house
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-black p-3 shadow-2xl">
          <div className="rounded-[22px] bg-[#0c1110] p-4">
            <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-white/15" />
            <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
              Inbox
            </p>
            <div
              className="mt-3 rounded-2xl border border-white/8 bg-[#101613] p-3"
              style={{ animation: "inbox-ping 7.6s ease-in-out infinite" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">WaReady</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Your table is ready at 8:15…
                  </p>
                </div>
                <span className="grid size-5 place-items-center rounded-full bg-flavor text-[10px] font-semibold text-primary-foreground">
                  1
                </span>
              </div>
            </div>
            <p className="mt-4 text-center text-[11px] text-muted-foreground">
              Just now · mock ping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
