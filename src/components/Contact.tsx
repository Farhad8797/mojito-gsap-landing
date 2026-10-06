import { socialLinks } from '../constants/socialLinks';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Contact() {
  useGSAP(() => {
    const parallaxTime = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 20%',
        end: 'bottom bottom',
        scrub: true,
        markers: true,
      },
    });

    parallaxTime
      .from('.left-leaf', {
        x: -50,
        y: 50,
      })
      .from('.right-leaf', {
        x: 50,
        y: -50,
      });
  }, []);
  return (
    <section
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-white sm:px-12 md:px-16 lg:px-24"
    >
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
      <div className="relative z-10 my-auto flex w-full flex-col items-center justify-center">
        <div className="flex w-full max-w-2xl flex-col items-center gap-y-8 sm:gap-y-10 lg:gap-y-12">
          {/* Section Header */}
          <div className="js-gsap-contact-header flex flex-col items-center">
            <span className="font-mono text-xs tracking-[0.25em] text-emerald-400 uppercase sm:text-sm">
              Get In Touch
            </span>
            <h2 className="font-vidaloka mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
              Where to find us
            </h2>
          </div>
          <div className="js-gsap-contact-block flex flex-col items-center">
            <p className="font-mono text-xs tracking-wider text-emerald-400 uppercase sm:text-sm">
              Visit Our Bar
            </p>
            <h3 className="font-vidaloka mt-1 text-lg font-medium text-zinc-200 sm:text-2xl">
              742 Evergreen Terrace, Botanical District, NY 10001
            </h3>
          </div>
          <div className="js-gsap-contact-block flex flex-col items-center gap-y-1">
            <p className="font-mono text-xs tracking-wider text-emerald-400 uppercase sm:text-sm">
              Contact Us
            </p>
            <a
              href="tel:+15550192834"
              className="text-base text-zinc-300 transition-colors duration-300 hover:text-emerald-400 sm:text-xl"
            >
              +1 (555) 019-2834
            </a>
            <a
              href="mailto:hello@mojitocraft.com"
              className="text-base text-zinc-300 transition-colors duration-300 hover:text-emerald-400 sm:text-xl"
            >
              hello@mojitocraft.com
            </a>
          </div>
          <div className="js-gsap-contact-block flex flex-col items-center">
            <p className="font-mono text-xs tracking-wider text-emerald-400 uppercase sm:text-sm">
              Open Everyday At
            </p>
            <p className="mt-1 text-base font-medium text-zinc-200 sm:text-xl">
              4:00 PM – 2:00 AM
            </p>
          </div>
          <div className="js-gsap-contact-block flex flex-col items-center gap-y-3">
            <p className="font-mono text-xs tracking-wider text-emerald-400 uppercase sm:text-sm">
              Socials
            </p>
            <div className="flex flex-row items-center gap-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.mediaName}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-zinc-900/60 text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500 hover:text-zinc-950 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
