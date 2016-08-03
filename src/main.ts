import {bootstrap} from "@angular/platform-browser-dynamic";
import {HTTP_PROVIDERS} from "@angular/http";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {enableProdMode} from "@angular/core";
import {AppComponent, environment} from "./app/";
import {appRouterProviders} from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [appRouterProviders, HTTP_PROVIDERS, disableDeprecatedForms(), provideForms()]);
