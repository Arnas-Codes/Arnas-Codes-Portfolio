const BackgroundFX = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_55%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.10),transparent_60%)]" />

      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-blue-400/10 blur-[140px] dark:bg-blue-500/15" />

      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.10))] dark:bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.45))]" />
    </div>
  );
};

export default BackgroundFX;
