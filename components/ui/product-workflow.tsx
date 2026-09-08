/** An explanatory illustration, not a reconstruction of a client's interface. */
export function ProductWorkflow() {
  return (
    <figure className="workflow-panel relative overflow-hidden rounded-[20px] border border-teal/25 bg-navy-raised p-5 md:p-8">
      <div className="mb-8 flex items-center justify-between border-b border-ink/15 pb-4 text-xs font-semibold tracking-widest text-ink/65 uppercase">
        <span>From information to action</span>
        <span aria-hidden="true" className="size-2 rounded-full bg-teal" />
      </div>
      <div className="flex items-center gap-4">
        <div
          aria-hidden="true"
          className="relative flex h-24 w-20 shrink-0 items-center justify-center"
        >
          <div className="absolute inset-2 rotate-[-12deg] rounded-lg border border-teal/30 bg-navy" />
          <div className="relative flex h-20 w-16 flex-col justify-center gap-2 rounded-lg border border-teal/60 bg-navy p-3">
            <span className="h-1 w-5 bg-teal/70" />
            <span className="h-1 bg-ink/25" />
            <span className="h-1 bg-ink/25" />
            <span className="h-1 w-6 bg-ink/25" />
          </div>
        </div>
        <div>
          <p className="font-display text-xl font-semibold">Your documents</p>
          <p className="mt-1 text-sm text-ink/70">Knowledge your team already has.</p>
        </div>
      </div>
      <div aria-hidden="true" className="ml-10 h-8 border-l border-dashed border-teal/50" />
      <div className="rounded-xl border border-teal/35 bg-teal/8 p-5">
        <div className="mb-3 flex items-center gap-3">
          <span aria-hidden="true" className="font-display text-2xl text-teal">
            ✳
          </span>
          <p className="font-display text-xl font-semibold">Retrieve. Check. Respond.</p>
        </div>
        <p className="text-sm leading-relaxed text-ink/75">
          Connect relevant sources, evaluate answer quality, and put the result to work.
        </p>
      </div>
      <div aria-hidden="true" className="ml-10 h-8 border-l border-dashed border-teal/50" />
      <div className="flex flex-wrap gap-2">
        {["Answers with sources", "Drafts to review", "Actions to take"].map((label) => (
          <span
            key={label}
            className="rounded-lg border border-ink/15 bg-ink/5 px-3 py-2 text-xs font-semibold text-ink/85"
          >
            {label}
          </span>
        ))}
      </div>
      <figcaption className="mt-7 text-xs leading-relaxed text-ink/65">
        Illustrative AI workflow · Not a client product screenshot
      </figcaption>
    </figure>
  );
}
