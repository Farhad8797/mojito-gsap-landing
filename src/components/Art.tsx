import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { leftFeatures, rightFeatures } from '../constants/info';
import { useMediaQuery } from 'react-responsive';

export default function Art() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const start = isMobile ? 'top center' : 'top top';

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        scrub: 1.5,
        pin: true,
        end: 'top bottom',
      },
    });

    timeline
      .to('#art .js-gsap-art-item, #art .js-gsap-art-title', {
        duration: 2.0,
        opacity: isMobile ? 1 : 0,
        stagger: 0.5,
        ease: 'power2.inOut',
      })
      .to('#art .js-gsap-art-center', {
        duration: 2.0,
        scaleY: isMobile ? 1 : 1.3,
        scaleX: isMobile ? 1 : 2,
        ease: 'power1.inOut',
        onComplete: () => {
          gsap.set('#art .js-gsap-art-center', {
            maskImage: 'none',
            WebkitMaskImage: 'none',
          });
        },
        onReverseComplete: () => {
          gsap.set('#art .js-gsap-art-center', {
            maskImage:
              'url("anil-sharma-fE3uYk0Ri1U-unsplash-removebg-preview.png")',
            WebkitMaskImage:
              'url("anil-sharma-fE3uYk0Ri1U-unsplash-removebg-preview.png")',
          });
        },
      })
      .to('#art .js-gsap-caption', {
        duration: 1.0,
        yPercent: 225,
        ease: 'power2.inOut',
      });
  }, []);

  return (
    <>
      <section
        id="work"
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-white md:px-12 lg:px-20"
      >
        <div className="relative mb-12 text-center lg:mb-16">
          <div className="pointer-events-none absolute top-1/4 left-1/2 h-36 w-72 -translate-x-1/2 -translate-y-5 rounded-full bg-emerald-500/20 blur-[60px] md:h-48 md:w-96" />

          <span className="relative z-10 rounded-full border border-emerald-500/20 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold tracking-[0.3em] text-emerald-400 uppercase backdrop-blur-md">
            Craft & Philosophy
          </span>

          <h2 className="js-gsap-art-title font-vidaloka relative z-10 mt-4 bg-linear-to-b from-zinc-100 via-zinc-200 to-zinc-500 bg-clip-text text-6xl font-bold text-transparent drop-shadow-lg sm:text-7xl md:text-8xl lg:text-9xl">
            The Art
          </h2>
        </div>

        <div className="flex w-full max-w-7xl flex-col items-center justify-evenly gap-10 lg:flex-row lg:gap-8">
          <div className="flex w-full justify-center lg:w-1/3 lg:justify-end">
            <ul className="flex w-full max-w-md flex-col gap-y-4">
              {leftFeatures.map((feature, id) => (
                <li
                  key={id}
                  className="js-gsap-art-item flex items-center gap-x-3 rounded-2xl p-4 shadow-lg backdrop-blur-xl"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  <span className="text-sm font-medium text-zinc-200 md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-y-4 lg:w-1/3">
            <div
              className="js-gsap-art-center relative overflow-hidden p-2 shadow-2xl transition-transform duration-700 hover:scale-105 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-100 lg:w-100"
              style={{
                WebkitMaskImage:
                  'url("anil-sharma-fE3uYk0Ri1U-unsplash-removebg-preview.png")',
                maskImage:
                  'url("anil-sharma-fE3uYk0Ri1U-unsplash-removebg-preview.png")',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            >
              <div className="relative h-full w-full">
                <img
                  src="rebeca-alvidrez-4K4vhzZGJOc-unsplash.jpg"
                  alt="Sip-worthy perfection cocktail pour"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/60 via-transparent to-transparent" />
              </div>
            </div>
            <span className="js-gsap-caption font-galindo text-sm tracking-widest text-emerald-400 uppercase md:text-base">
              Sip-Worthy Perfection
            </span>
          </div>
          <div className="flex w-full justify-center lg:w-1/3 lg:justify-start">
            <ul className="flex w-full max-w-md flex-col gap-y-4">
              {rightFeatures.map((feature, id) => (
                <li
                  key={id}
                  className="js-gsap-art-item flex items-center gap-x-3 rounded-2xl p-4 shadow-lg backdrop-blur-xl"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  <span className="text-sm font-medium text-zinc-200 md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="js-gsap-art-bottom mx-auto mt-16 flex max-w-3xl flex-col items-center px-4 text-center sm:mt-20 lg:mt-24">
          <span className="js-gsap-art-reveal mb-4 rounded-full border border-emerald-500/20 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold tracking-[0.3em] text-emerald-400 uppercase backdrop-blur-md">
            The Grand Finish
          </span>
          <h3 className="js-gsap-art-reveal font-vidaloka text-3xl leading-tight font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
            Liquid Mastery in Every Drop.
          </h3>
          <p className="js-gsap-art-reveal mt-4 text-sm leading-relaxed font-light text-zinc-400 sm:text-base md:text-lg">
            Where precise liquid chemistry meets unyielding craft. From the
            hand-chipped crystal ice to the final citrus oils sprayed over cold
            glass, we don&apos;t just serve drinks—we construct unforgettable
            sensory experiences designed to leave a lasting impression.
          </p>
        </div>
      </section>
    </>
  );
}
