import {RouterConfig} from '@angular/router';
import {ToursSearchComponent} from "./tours-search/tours-search.component";
import {TourPreviewComponent} from "./tour-preview/tour-preview.component";
import {TourEditComponent} from "./tour-edit/tour-edit.component";

export const toursRoutes:RouterConfig = [
  {
    path: '',
    redirectTo: '/tours',
    pathMatch: 'full'
  },
  {path: 'tours', component: ToursSearchComponent},
  {path: 'tour/preview/:id', component: TourPreviewComponent},
  {path: 'tour/edit/:id', component: TourEditComponent}
];
