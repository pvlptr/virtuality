import {provideRouter, RouterConfig} from '@angular/router';
import {ExposSearchComponent} from './expos/expos-search/index';
import {JourneysSearchComponent} from './journeys/journeys-search/index';

import { toursRoutes }        from './tours/tours.routes';

const routes:RouterConfig = [
  ...toursRoutes,
  {path: 'expos', component: ExposSearchComponent},
  {path: 'journeys', component: JourneysSearchComponent},
];


export const appRouterProviders = [
  provideRouter(routes)
];
