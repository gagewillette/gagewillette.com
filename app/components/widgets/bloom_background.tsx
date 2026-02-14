export default function BloomBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-[#05030a]" />

      {/* strong blooms (less blur, higher opacity) */}
      <div className="absolute -top-48 -left-48 h-[700px] w-[700px] rounded-full bg-purple-500/55 blur-[110px]" />
      <div className="absolute top-10 -right-60 h-[760px] w-[760px] rounded-full bg-blue-500/50 blur-[120px]" />
      <div className="absolute bottom-[-260px] left-1/4 h-[820px] w-[820px] rounded-full bg-fuchsia-500/40 blur-[140px]" />
      <div className="absolute bottom-[-280px] -right-56 h-[760px] w-[760px] rounded-full bg-cyan-400/30 blur-[150px]" />

      {/* spotlight layer to keep color from dying */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(99,102,241,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(168,85,247,0.16),transparent_55%)]" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:96px_96px]" />

      {/* IMPORTANT: do NOT crush it with a heavy black gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/5 to-black/20" />
    </div>
  );
}
