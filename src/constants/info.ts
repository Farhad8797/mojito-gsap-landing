interface NavLinks {
  id: string;
  title: string;
}

const navLinks: NavLinks[] = [
  {
    id: 'cocktails',
    title: 'Cocktails',
  },
  {
    id: 'about',
    title: 'About Us',
  },
  {
    id: 'work',
    title: 'The Craft',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

interface Cocktail {
  name: string;
  country: string;
  detail: string;
  price: number;
}

const cocktailLists: Cocktail[] = [
  {
    name: 'Classic Mint Mojito',
    country: 'Cuba',
    detail:
      'A refreshing blend of white rum, fresh lime juice, crushed garden mint, cane sugar, and sparkling soda water over crushed ice.',
    price: 14.5,
  },
  {
    name: 'Aperol Spritz',
    country: 'Italy',
    detail:
      'An iconic Italian aperitif featuring bittersweet Aperol, crisp Prosecco, and a splash of club soda, garnished with a fresh orange slice.',
    price: 13.0,
  },
  {
    name: 'Smoked Mezcalita',
    country: 'Mexico',
    detail:
      'Artisanal smoked mezcal combined with fresh lime juice, agave nectar, and Cointreau, served with a chili-lime salt rim.',
    price: 16.0,
  },
  {
    name: 'French 75',
    country: 'France',
    detail:
      'A sophisticated pairing of London dry gin, freshly squeezed lemon juice, and simple syrup, topped with chilled Champagne.',
    price: 15.5,
  },
  {
    name: 'Pisco Sour',
    country: 'Peru',
    detail:
      'Velvety smooth Peruvian Pisco shaken with fresh key lime juice, simple syrup, egg white foam, and finished with drops of Angostura bitters.',
    price: 15.0,
  },
];

const mocktailLists: Cocktail[] = [
  {
    name: 'Virgin Mojito',
    country: 'Cuba',
    detail:
      'A crisp blend of muddled fresh garden mint, raw cane sugar, and freshly squeezed lime juice, topped with chilled sparkling soda.',
    price: 9.5,
  },
  {
    name: 'Shirley Temple',
    country: 'United States',
    detail:
      'A nostalgic classic featuring ginger ale and a splash of sweet grenadine, served over crushed ice and garnished with a maraschino cherry.',
    price: 8.0,
  },
  {
    name: 'Zero-Proof Paloma',
    country: 'Mexico',
    detail:
      'Freshly squeezed pink grapefruit juice, agave syrup, and lime juice topped with sparkling water, served with a smoked sea salt rim.',
    price: 10.0,
  },
  {
    name: 'Virgin Piña Colada',
    country: 'Puerto Rico',
    detail:
      'A rich, tropical blend of sweet pineapple juice and creamy coconut cream, whipped with ice for a velvety island finish.',
    price: 10.5,
  },
  {
    name: 'No-Groni',
    country: 'Italy',
    detail:
      'A botanical mocktail pairing non-alcoholic dark spirit bitters with aromatic sweet vermouth alternatives and an orange peel twist.',
    price: 11.0,
  },
];

const leftFeatures = [
  '100% Organic Botanicals',
  'Cold-Pressed Citrus',
  'Small-Batch Craft Spirits',
  'Artisanal Ice Program',
];

const rightFeatures = [
  'Precision Molecular Mixology',
  'Zero Artificial Sweeteners',
  'Hand-Foraged Flavors',
  'Balanced Liquid Chemistry',
];

const menuCocktails = [
  {
    id: 'mojito',
    name: 'Classic Mint Mojito',
    tagline: 'Crisp Botanical Clarity',
    image: 'nikita-tikhomirov-vAkIPzXOSOc-unsplash-removebg-preview.png',
    recipeHeadline: 'Freshly Muddled Botanicals & Cuban Spirits',
    recipeDetails:
      'Crafted with hand-slapped fresh spearmint leaves, 2 oz artisanal white rum, 1 oz freshly squeezed key lime juice, and 0.75 oz organic raw cane syrup. Top with chilled sparkling mineral water over crushed ice.',
  },
  {
    id: 'mezcalita',
    name: 'Smoked Mezcalita',
    tagline: 'Earth & Smoked Citrus',
    image: 'clovis-wood-FT1PJqW0qtE-unsplash__1_-removebg-preview.png',
    recipeHeadline: 'Artisanal Agave & Smoked Sea Salt',
    recipeDetails:
      '2 oz artisanal Oaxaca mezcal paired with 0.75 oz Cointreau, 1 oz fresh lime juice, and a touch of agave nectar. Double strained into a rocks glass with a chili-lime sea salt rim.',
  },
  {
    id: 'spritz',
    name: 'Aperol Spritz',
    tagline: 'Bittersweet Italian Effervescence',
    image: 'santiago-vilchis-mhqCwnemNTI-unsplash-removebg-preview.png',
    recipeHeadline: 'Effervescent Prosecco & Bitter Orange',
    recipeDetails:
      'Built directly in a oversized wine glass filled with cubed ice: 3 parts crisp Prosecco, 2 parts vibrant Aperol, and 1 part splash of premium soda water. Garnished with an fresh orange slice.',
  },
  {
    id: 'pisco',
    name: 'Velvety Pisco Sour',
    tagline: 'Silky Creaminess & Andes Citrus',
    image: 'sk-MzsWrM8DSCU-unsplash-removebg-preview.png',
    recipeHeadline: 'Hand-Shaken Foam & Aromatic Bitters',
    recipeDetails:
      'Dry shaken with 2 oz Peruvian Pisco, 1 oz key lime juice, 0.75 oz simple syrup, and 1 fresh egg white. Shaken with ice, double strained, and crowned with 3 drops of Angostura bitters.',
  },
];

export {
  navLinks,
  cocktailLists,
  mocktailLists,
  leftFeatures,
  rightFeatures,
  menuCocktails,
};
