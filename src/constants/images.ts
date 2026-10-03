interface galleryImagesInterface {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const galleryImages: galleryImagesInterface[] = [
  {
    id: 1,
    src: 'ash-edmonds-fsI-_MRsic0-unsplash.jpg',
    alt: 'Crafting fresh mojito with crushed ice and mint',
    title: 'Artisanal Preparation',
  },
  {
    id: 2,
    src: 'brian-jones-YBlcnXfv9OM-unsplash.jpg',
    alt: 'Fresh lime splash in sparkling water',
    title: 'Fresh Ingredients',
  },
  {
    id: 3,
    src: 'kobby-mendez-xBFTjrMIC0c-unsplash.jpg',
    alt: 'Fresh garden mint leaves',
    title: 'Organic Botanicals',
  },
  {
    id: 4,
    src: 'mae-mu-kbch-i63YTg-unsplash.jpg',
    alt: 'Luxury glassmorphic cocktail bar',
    title: 'High-End Ambiance',
  },
  {
    id: 5,
    src: 'olena-bohovyk-JjGLEN7T8xI-unsplash.jpg',
    alt: 'Smoked mezcal cocktail presentation',
    title: 'Signature Mixology',
  },
  {
    id: 6,
    src: 'stanislav-ivanitskiy-j5SwUbcgeyA-unsplash.jpg',
    alt: 'Guests clinking cocktail glasses',
    title: 'Unforgettable Moments',
  },
];

export { galleryImages };
