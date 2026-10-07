# Mojito Craft — Interactive Landing Page

A high-end, responsive landing page crafted for a premium cocktail brand. This project showcases immersive scroll-driven animations, custom SVG vector layouts, and robust component architecture built with **React**, **TypeScript**, **Tailwind CSS** and **GSAP**.

---

## Features

- **ScrollTrigger Mask Animations:** Dynamic clip-path expansions and scroll-synchronized scrubbing powered by GSAP's `useGSAP` hook and `ScrollTrigger`.
- **Stateful Cocktail Slider:** Interactive drink selector with layout-safe state management preventing unwanted flexbox/grid layout reflows.
- **Lightweight Vector Integration:** Clean, strongly-typed inline SVG path datasets without heavy third-party icon packages.
- **Responsive Layouts:** Mobile-first design tailored with Tailwind CSS, featuring mobile offset trigger hooks for smooth animations across all screen sizes.
- **Type-Safe Architecture:** Stricter TypeScript definitions separating static social datasets and cocktail items into modular configuration files.

---

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation Engine:** GSAP (GreenSock Animation Platform)
  - `@gsap/react` (`useGSAP`)
  - `ScrollTrigger`
  - `SplitText`

---

## Getting statrted

**1. Clone the repo:**

```bash
git clone https://github.com/Farhad8797/mojito-gsap-landing.git
```

**2. Install necessary dependencies:**

```bash
npm install
```

**3. Turn on the server:**

```bash
npm run dev
```

---

## Acknowledgements:

Thanks to [JavaScript Mastery](https://youtu.be/ATdaYQw0ptk?si=pIpVPrzS2pN2nkRh) for this amazing course: [Creative frontend Course](https://youtu.be/ATdaYQw0ptk?si=pIpVPrzS2pN2nkRh)
