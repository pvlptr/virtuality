import {provideRouter, RouterConfig} from '@angular/router';
import {ExposSearchComponent} from './expos/expos-search/index';
import {JourneysSearchComponent} from './journeys/journeys-search/index';

import { toursRoutes }        from './tours/tours.routes';
import {SettingsComponent} from "./settings/settings.component";

const routes:RouterConfig = [
  ...toursRoutes,
  {path: 'expos', component: ExposSearchComponent},
  {path: 'journeys', component: JourneysSearchComponent},
  {path: 'settings', component: SettingsComponent},
];


export const appRouterProviders = [
  provideRouter(routes)
];
