import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

export default function Hero() {
  useGSAP(() => {
    const titleSplit = new SplitText('.title', { type: 'chars' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });

    titleSplit.chars.forEach((char) =>
      char.classList.add(
        'bg-linear-to-b',
        'from-zinc-200',
        'to-zinc-400',
        'bg-clip-text',
        'text-transparent'
      )
    );

    gsap.from(titleSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      delay: 1.0,
      yPercent: 100,
      stagger: 0.06,
      opacity: 0,
      ease: 'expo.out',
    });
  }, []);

  return (
    <>
      <section className="hero my-10 flex min-h-[30vh] flex-col justify-center gap-y-20 px-30">
        <h1 className="font-amethysta title text-center text-6xl font-bold sm:text-5xl">
          MOJITO
        </h1>
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-full flex-col gap-y-5 md:max-w-[40vw]">
            <h1 className="font-galindo text-2xl font-bold">
              Handcrafted Spirits & Botanical Elixirs
            </h1>
            <p className="subtitle max-w-full text-zinc-400">
              Step into a realm where mixology meets artistry. Every cocktail in
              our collection is precision-crafted using small-batch spirits,
              house-infused botanicals, and fresh pressed juices. Designed to
              elevate your evening, our menu balances bold classic foundations
              with inventive, modern twists—delivering a refined tasting
              experience in every sip.
            </p>
          </div>
          <div className="flex max-w-full flex-col gap-y-5 md:max-w-[30vw]">
            <h1 className="font-galindo text-2xl font-bold">
              Vibrant & Refreshing
            </h1>
            <p className="subtitle max-w-full text-zinc-400">
              Experience the vibrant burst of sun-ripened lime, wild garden
              mint, and premium aged rum. Our signature cocktails are crushed,
              shaken, and poured with pure passion, creating clean, invigorating
              flavor profiles that linger long after the glass is empty. Welcome
              to the ultimate refresh.
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex min-h-screen overflow-hidden">
        <img
          src="mockup-graphics-75AiRF5xm0U-unsplash-removebg-preview.png"
          alt=""
          className="left-leaf absolute -left-45 -scale-x-100"
        />

        <img
          src="mockup-graphics-75AiRF5xm0U-unsplash-removebg-preview.png"
          alt=""
          className="right-leaf absolute -right-45 -scale-y-100"
        />
      </section>
    </>
  );
}
