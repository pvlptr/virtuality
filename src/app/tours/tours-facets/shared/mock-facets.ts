import { Facet } from './facet.model';
export const FACETS: Facet[] = [
  {
    name: 'Autorius',
    items: [
      {
        name: 'Petras Petraitis',
        count: 12
      },
      {
        name: 'Jonas Jonaitis',
        count: 5
      }
    ]
  },
  {
    name: 'Muziejus',
    items: [
      {
        name: 'Lietuvos dailės muziejus',
        count: 21
      },
      {
        name: 'Akmenės krašto muziejus',
        count: 5
      },
      {
        name: 'Alytaus kraštotyros muziejus',
        count: 4
      }
    ]
  },
  {
    name: 'Sukūrimo data',
    items: [
      {
        name: 'Prieš mėnesį',
        count: 3
      },
      {
        name: 'Prieš metus',
        count: 3
      },
      {
        name: 'Daugiau nei prieš metus',
        count: 5
      }
    ]
  },
];