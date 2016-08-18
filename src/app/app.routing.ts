import {Routes, RouterModule} from '@angular/router';
import {ExposSearchComponent} from './expos/expos-search/index';
import {JourneysSearchComponent} from './journeys/journeys-search/index';

import {toursRoutes}        from './tours/tours.routing';
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  ...toursRoutes,
  {path: 'expos', component: ExposSearchComponent},
  {path: 'journeys', component: JourneysSearchComponent},
  {path: 'settings', component: SettingsComponent},
];


export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
