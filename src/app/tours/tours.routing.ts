import {ToursSearchComponent} from "./tours-search/tours-search.component";
import {TourPreviewComponent} from "./tour-preview/tour-preview.component";
import {TourEditComponent} from "./tour-edit/tour-edit.component";
import {Routes, RouterModule} from "@angular/router";

export const toursRoutes: Routes = [
  {
    path: '',
    redirectTo: '/tours',
    pathMatch: 'full'
  },
  {path: 'tours', component: ToursSearchComponent},
  {path: 'tour/preview/:id', component: TourPreviewComponent},
  {path: 'tour/edit/:id', component: TourEditComponent},
  {path: 'tour/edit', component: TourEditComponent}
];

export const toursRouting = RouterModule.forChild(toursRoutes);


