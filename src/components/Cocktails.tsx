import { cocktailLists, mocktailLists } from '../constants/info';

export default function DrinkMenu() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center px-6 py-16 text-white md:px-12 lg:px-20">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="rounded-full border border-emerald-500/20 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold tracking-[0.3em] text-emerald-400 uppercase backdrop-blur-md">
          Curated Menu
        </span>
        <h2 className="font-galindo mt-4 bg-linear-to-b from-zinc-100 to-zinc-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
          Spirits & Zero-Proof
        </h2>
      </div>

      <div className="flex w-full max-w-7xl flex-col items-start justify-center gap-8 md:flex-row lg:gap-12">
        <div className="js-gsap-column w-full rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl backdrop-blur-xl md:w-1/2 lg:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-6">
            <h3 className="font-galindo text-2xl font-semibold text-zinc-100 lg:text-3xl">
              Signature Cocktails
            </h3>
            <span className="font-mono text-xs tracking-wider text-emerald-400">
              ALCOHOLIC
            </span>
          </div>

          <ul className="flex flex-col gap-y-6">
            {cocktailLists.map((item, idx) => (
              <li
                key={idx}
                className="js-gsap-item flex flex-col gap-y-2 border-b border-white/5 pb-6 last:border-0 last:pb-0"
              >
                <div className="flex items-baseline justify-between gap-x-4">
                  <div className="flex items-baseline gap-x-2">
                    <span className="font-galindo text-lg text-zinc-100">
                      {item.name}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      ({item.country})
                    </span>
                  </div>
                  <span className="font-amethysta text-lg font-bold text-emerald-400">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-zinc-400 lg:text-sm">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="js-gsap-column w-full rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl backdrop-blur-xl md:w-1/2 lg:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-6">
            <h3 className="font-galindo text-2xl font-semibold text-zinc-100 lg:text-3xl">
              Zero-Proof Elixirs
            </h3>
            <span className="font-mono text-xs tracking-wider text-emerald-400">
              NON-ALCOHOLIC
            </span>
          </div>

          <ul className="flex flex-col gap-y-6">
            {mocktailLists.map((item, idx) => (
              <li
                key={idx}
                className="js-gsap-item flex flex-col gap-y-2 border-b border-white/5 pb-6 last:border-0 last:pb-0"
              >
                <div className="flex items-baseline justify-between gap-x-4">
                  <div className="flex items-baseline gap-x-2">
                    <span className="font-galindo text-lg text-zinc-100">
                      {item.name}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      ({item.country})
                    </span>
                  </div>
                  <span className="font-amethysta text-lg font-bold text-emerald-400">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-zinc-400 lg:text-sm">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
