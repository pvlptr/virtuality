import {NgModule}       from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {FormsModule} from "@angular/forms";
import {MdButtonModule} from "@angular2-material/button/button";
import {MdToolbarModule} from "@angular2-material/toolbar/toolbar";
import {MdCardModule} from "@angular2-material/card/card";
import {MdInputModule} from "@angular2-material/input/input";
import {routing, appRoutingProviders} from './app.routing';
import {MdIconRegistry} from "@angular2-material/icon";
import {TourService} from "./tours/shared/tour.service";
import {CurrentPageService} from "./shared/current-page.service";
import {SettingsService} from "./settings/shared/settings.service";
import {SlowMotionService} from "./settings/slow-motion.service";
import {HttpModule} from "@angular/http";
import {MdCheckbox, MdCheckboxModule} from "@angular2-material/checkbox";
import {TourEditComponent} from "./tours/tour-edit/tour-edit.component";
import {ToursSearchComponent} from "./tours/tours-search/tours-search.component";
import {ToursListComponent} from "./tours/tours-search/tours-list/tours-list.component";
import {ToursListItemComponent} from "./tours/tours-search/tours-list/tours-list-item.component";
import {ToursFacetsComponent} from "./tours/tours-search/tours-facets/tours-facets.component";
import {TourPreviewComponent} from "./tours/tour-preview/tour-preview.component";
import {JourneysSearchComponent} from "./journeys/journeys-search/journeys-search.component";
import {ExposSearchComponent} from "./expos/expos-search/expos-search.component";
import {SettingsComponent} from "./settings/settings.component";
import {MdMenuModule} from "@angular2-material/menu";
import {MdProgressCircleModule} from "@angular2-material/progress-circle";
import {MdRadioModule} from "@angular2-material/radio";
import {MdSidenavModule} from "@angular2-material/sidenav";
import {MdListModule} from "@angular2-material/list";

@NgModule({
  declarations: [AppComponent,
    ToursSearchComponent,
    ToursListComponent,
    ToursListItemComponent,
    ToursFacetsComponent,
    TourPreviewComponent,
    TourEditComponent,
    JourneysSearchComponent,
    ExposSearchComponent,
    SettingsComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    // Router
    routing,
    // Forms
    FormsModule,
    // Material Design
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdListModule,
    MdMenuModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdSidenavModule
  ],
  providers: [
    appRoutingProviders,
    MdIconRegistry,
    TourService,
    CurrentPageService,
    SettingsService,
    SlowMotionService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
