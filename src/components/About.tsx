import { galleryImages } from '../constants/images';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

export default function About() {
  useGSAP(() => {
    const textSplit = new SplitText('.about-one p', {
      type: 'lines',
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
      },
    });

    timeline
      .from(textSplit.lines, {
        yPercent: 100,
        duration: 1,
        stagger: 0.06,
        ease: 'expo.out',
        opacity: 0,
      })
      .from('.about-two div', {
        yPercent: 100,
        duration: 1.5,
        ease: 'expo.out',
        opacity: 0,
        stagger: 0.06,
      });
  }, []);

  return (
    <>
      <section className="about about-one relative flex w-full items-center justify-center overflow-hidden px-6 py-20 text-white md:px-12 lg:px-24">
        <div className="pointer-events-none absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-20">
          <div className="js-gsap-about-left flex w-full flex-col items-start lg:w-1/2">
            <span className="mb-6 rounded-full border border-emerald-500/20 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold tracking-[0.3em] text-emerald-400 uppercase backdrop-blur-md">
              Our Legacy & Craft
            </span>
            <h2 className="gray-text font-vidaloka bg-linear-to-b from-zinc-100 via-zinc-200 to-zinc-500 bg-clip-text text-center text-5xl leading-[1.1] font-bold text-transparent drop-shadow-sm sm:text-4xl md:text-5xl xl:text-6xl">
              ELEVATING EVERY SINGLE SIP.
            </h2>
          </div>

          <div className="js-gsap-about-right flex w-full flex-col gap-y-8 lg:w-1/2 lg:gap-y-10">
            <div className="js-gsap-about-row flex flex-col gap-y-3 rounded-3xl border-2 border-white/15 bg-zinc-950 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <span className="font-mono text-sm tracking-wider text-emerald-400">
                WHY CHOOSE US
              </span>
              <p className="w-full text-base leading-relaxed font-light text-zinc-300 sm:text-lg lg:text-xl">
                We don't just pour drinks; we curate immersive sensory moments.
                By blending rare small-batch spirits with hand-foraged
                botanicals and cold-pressed citrus, every cocktail is balanced
                to perfection—turning casual evenings into extraordinary
                memories.
              </p>
            </div>

            <div className="js-gsap-about-row flex items-center justify-between rounded-3xl border-2 border-white/15 bg-zinc-950 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="flex flex-col">
                <span className="mb-1 font-mono text-sm tracking-wider text-emerald-400">
                  EXCELLENCE RATING
                </span>
                <div className="flex items-baseline gap-x-2">
                  <span className="font-galindo text-4xl font-bold text-zinc-100 sm:text-5xl">
                    4.9
                  </span>
                  <span className="font-mono text-xl text-zinc-500">/ 5.0</span>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="flex gap-x-1 text-xl text-amber-400 sm:text-2xl">
                  ★ ★ ★ ★ ★
                </div>
                <span className="mt-1 font-mono text-xs text-zinc-400">
                  Based on 12,000+ reviews
                </span>
              </div>
            </div>

            <div className="js-gsap-about-row flex items-center gap-x-6 rounded-3xl border-2 border-white/15 bg-zinc-950 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="flex flex-col">
                <span className="font-mono text-sm tracking-wider text-emerald-400">
                  GLOBAL COMMUNITY
                </span>
                <p className="font-amethysta mt-1 text-lg font-semibold text-zinc-100 sm:text-xl">
                  Trusted by over 1,000,000+ cocktail enthusiasts worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about about-two relative flex min-h-screen w-full flex-col items-center px-6 py-20 text-white md:px-12 lg:px-24">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold tracking-[0.3em] text-emerald-400 uppercase backdrop-blur-md">
            Visual Journey
          </span>
          <h2 className="font-vidaloka mt-4 bg-linear-to-b from-zinc-100 to-zinc-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            CRAFTED IN MOTION
          </h2>
        </div>

        <div className="flex w-full max-w-7xl flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="js-gsap-gallery-item group relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 shadow-2xl md:h-80 lg:col-span-2 lg:h-96">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="h-full w-full transform object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-zinc-950/80 via-transparent to-transparent p-6">
              <span className="font-galindo text-xl tracking-wide text-zinc-100">
                {galleryImages[0].title}
              </span>
            </div>
          </div>

          <div className="js-gsap-gallery-item group relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 shadow-2xl md:h-80 lg:col-span-1 lg:h-96">
            <img
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              className="h-full w-full transform object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-zinc-950/80 via-transparent to-transparent p-6">
              <span className="font-galindo text-xl tracking-wide text-zinc-100">
                {galleryImages[1].title}
              </span>
            </div>
          </div>

          <div className="js-gsap-gallery-item group relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 shadow-2xl md:h-80 lg:col-span-1 lg:h-96">
            <img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className="h-full w-full transform object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-zinc-950/80 via-transparent to-transparent p-6">
              <span className="font-galindo text-xl tracking-wide text-zinc-100">
                {galleryImages[2].title}
              </span>
            </div>
          </div>

          <div className="js-gsap-gallery-item group relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 shadow-2xl md:h-80 lg:col-span-2 lg:h-96">
            <img
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              className="h-full w-full transform object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-zinc-950/80 via-transparent to-transparent p-6">
              <span className="font-galindo text-xl tracking-wide text-zinc-100">
                {galleryImages[3].title}
              </span>
            </div>
          </div>

          <div className="js-gsap-gallery-item group relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 shadow-2xl md:h-80 lg:col-span-1 lg:h-96">
            <img
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              className="h-full w-full transform object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-zinc-950/80 via-transparent to-transparent p-6">
              <span className="font-galindo text-xl tracking-wide text-zinc-100">
                {galleryImages[4].title}
              </span>
            </div>
          </div>

          {/* IMAGE 6: Row 3 Right */}
          <div className="js-gsap-gallery-item group relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 shadow-2xl md:h-80 lg:col-span-2 lg:h-96">
            <img
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              className="h-full w-full transform object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-zinc-950/80 via-transparent to-transparent p-6">
              <span className="font-galindo text-xl tracking-wide text-zinc-100">
                {galleryImages[5].title}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
