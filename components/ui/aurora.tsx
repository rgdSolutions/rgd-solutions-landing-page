/**
 * The aurora atmosphere behind the whole page: five blurred radial blobs, two of them
 * drifting. Positions match design/directions/Main.dc.html; on small screens they scale down
 * so they never widen the document. Parent must be `relative overflow-hidden`.
 */
export function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        className="blob animate-drift-a -top-[220px] -left-[160px] size-[420px] opacity-90 md:size-[820px]"
        style={{
          background: "radial-gradient(circle, rgba(63,210,199,0.42) 0%, rgba(63,210,199,0) 70%)",
        }}
      />
      <div
        className="blob animate-drift-b top-[120px] -right-[260px] size-[380px] opacity-90 md:size-[760px]"
        style={{
          background: "radial-gradient(circle, rgba(240,143,160,0.34) 0%, rgba(240,143,160,0) 70%)",
        }}
      />
      <div
        className="blob animate-drift-b top-[2600px] -left-[300px] size-[460px] md:size-[900px]"
        style={{
          background: "radial-gradient(circle, rgba(240,143,160,0.22) 0%, rgba(240,143,160,0) 70%)",
        }}
      />
      <div
        className="blob animate-drift-a top-[4200px] -right-[320px] size-[460px] md:size-[900px]"
        style={{
          background: "radial-gradient(circle, rgba(63,210,199,0.26) 0%, rgba(63,210,199,0) 70%)",
        }}
      />
      <div
        className="blob top-[6100px] left-[300px] h-[700px] w-[900px]"
        style={{
          background:
            "radial-gradient(circle, rgba(63,210,199,0.18) 0%, rgba(240,143,160,0.12) 45%, rgba(7,15,31,0) 72%)",
        }}
      />
    </div>
  );
}
