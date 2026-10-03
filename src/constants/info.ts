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

export { navLinks, cocktailLists, mocktailLists };
