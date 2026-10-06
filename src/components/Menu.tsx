import { useState } from 'react';
import { menuCocktails } from '../constants/info';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentCocktail = menuCocktails[activeIndex];
  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? menuCocktails.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === menuCocktails.length - 1 ? 0 : prev + 1
    );
  };

  useGSAP(() => {
    gsap.fromTo(
      '#menu .js-gsap-menu-image',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        ease: 'power1.inOut',
      }
    );

    gsap.from('#menu .js-gsap-menu-recipe', {
      yPercent: 100,
      duration: 0.5,
      stagger: 0.05,
      opacity: 0,
    });
  }, [activeIndex]);

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-white md:px-12 lg:px-24"
      id="menu"
    >
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-y-10 lg:gap-y-14">
        {/* ROW 1: Sliding Navbar Menu */}
        <nav className="no-scrollbar w-full max-w-3xl overflow-x-auto rounded-full border border-white/10 bg-zinc-900/60 px-4 py-2 backdrop-blur-xl">
          <ul className="flex min-w-max items-center justify-between gap-x-2 md:min-w-0 md:gap-x-4">
            {menuCocktails.map((cocktail, id) => (
              <li key={cocktail.id}>
                <button
                  onClick={() => setActiveIndex(id)}
                  className={`rounded-full px-5 py-2.5 text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 md:text-sm ${
                    activeIndex === id
                      ? 'bg-emerald-500 font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20'
                      : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {cocktail.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="js-gsap-menu-title max-w-2xl px-4 text-center">
          <span className="font-mono text-xs tracking-[0.25em] text-emerald-400 uppercase">
            {currentCocktail.tagline}
          </span>
          <h2 className="font-vidaloka mt-2 bg-linear-to-b from-zinc-100 via-zinc-200 to-zinc-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            {currentCocktail.name}
          </h2>
        </div>

        <div className="flex w-full items-center justify-between gap-x-4 sm:justify-center sm:gap-x-10 lg:gap-x-16">
          <button
            onClick={handlePrev}
            aria-label="Previous Cocktail"
            className="shrink-0 rounded-full border border-white/10 bg-zinc-900/60 p-3 text-zinc-300 shadow-xl transition-all duration-300 hover:bg-zinc-800 hover:text-emerald-400 active:scale-95 sm:p-4"
          >
            <svg
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="group relative h-64 w-64 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-4 shadow-2xl backdrop-blur-xl sm:h-80 sm:w-80 md:h-96 md:w-96">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] bg-size-[16px_16px] opacity-15" />
            <div className="js-gsap-menu-image relative h-full w-full overflow-hidden rounded-2xl">
              <img
                src={currentCocktail.image}
                alt={currentCocktail.name}
                className="h-full w-full transform object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/70 via-transparent to-transparent" />
            </div>
          </div>
          <button
            onClick={handleNext}
            aria-label="Next Cocktail"
            className="shrink-0 rounded-full border border-white/10 bg-zinc-900/60 p-3 text-zinc-300 shadow-xl transition-all duration-300 hover:bg-zinc-800 hover:text-emerald-400 active:scale-95 sm:p-4"
          >
            <svg
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-zinc-900/40 p-6 text-center shadow-2xl backdrop-blur-xl sm:p-8 lg:flex-row lg:items-start lg:gap-12 lg:p-10 lg:text-left">
          <div className="flex w-full flex-col items-center justify-center lg:w-1/2 lg:items-start">
            <span className="mb-1 font-mono text-xs tracking-wider text-emerald-400 uppercase">
              Craft Recipe & Mixology
            </span>
            <h3 className="font-vidaloka font-bold text-zinc-100 sm:text-xl md:text-2xl lg:text-3xl">
              Recipe for :{' '}
              <span className="js-gsap-menu-recipe text-emerald-400">
                {currentCocktail.name}
              </span>
            </h3>
          </div>

          <div className="js-gsap-menu-recipe flex w-full flex-col items-center justify-center gap-y-3 lg:w-1/2 lg:items-start">
            <h4 className="text-base font-semibold text-zinc-200 sm:text-lg">
              {currentCocktail.recipeHeadline}
            </h4>
            <p className="text-xs leading-relaxed font-light text-zinc-400 sm:text-sm lg:text-base">
              {currentCocktail.recipeDetails}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
