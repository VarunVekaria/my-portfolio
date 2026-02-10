export default function Achievements() {
  return (
    <div id="achievements" className="py-12 md:py-16" style={{ backgroundColor: "#1A1B26" }}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-semibold text-white mb-2">Achievements</h2>
        <div
          className="h-0.5 w-16 mb-8 rounded-full"
          style={{ background: "linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)" }}
        />
        <div className="space-y-4">
          <div className="rounded-lg border border-white/10 p-6 bg-white/5 hover:border-white/20 transition-colors">
            <p className="text-base font-semibold text-white mb-1">
              2nd Place — MemMachine AI Agents Cross-Coast Hackathon (NYC–SF)
            </p>
            <p className="text-neutral-400 text-sm">October 2025</p>
          </div>

          <div className="rounded-lg border border-white/10 p-6 bg-white/5 hover:border-white/20 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-white/10 text-white font-bold text-sm">
                JPM
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">SDE College to Corporate Program</h3>
                <p className="text-neutral-400 text-sm">J.P. Morgan · Apprenticeship · Jan 2022 – Feb 2023 · Mumbai, India</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1 mt-2">
              <li>Hands-on Python, Django, and Linux training in backend development.</li>
              <li>Built and deployed a live backend project; presented to J.P. Morgan professionals and received feedback on code quality and implementation.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
