import {Facet} from "./facet.model";
export const FACETS: Facet[] = [
  {
    name: 'Autorius',
    items: [
      {
        name: 'Petras Petraitis',
        count: 12,
        selected: false
      },
      {
        name: 'Jonas Jonaitis',
        count: 5,
        selected: false
      }
    ]
  },
  {
    name: 'Muziejus',
    items: [
      {
        name: 'Lietuvos dailės muziejus',
        count: 21,
        selected: false
      },
      {
        name: 'Akmenės krašto muziejus',
        count: 5,
        selected: false
      },
      {
        name: 'Alytaus kraštotyros muziejus',
        count: 4,
        selected: false
      },
      {
        name: 'Labai ilgas muziejaus pavadinimas skirtas išsibandyti wrapą',
        count: 2,
        selected: false
      }
    ]
  },
  {
    name: 'Sukūrimo data',
    items: [
      {
        name: 'Prieš mėnesį',
        count: 3,
        selected: false
      },
      {
        name: 'Prieš metus',
        count: 3,
        selected: false
      },
      {
        name: 'Daugiau nei prieš metus',
        count: 5,
        selected: false
      }
    ]
  },
];
