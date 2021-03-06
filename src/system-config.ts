"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map:any = {
  '@angular2-material': 'vendor/@angular2-material'
};

/** User packages configuration. */
const materialPackages:string[] = [
  'core',
  'toolbar',
  'icon',
  'button',
  'sidenav',
  'list',
  'card',
  'input',
  'radio',
  'checkbox',
  'progress-circle',
  'menu'
];

const packages:any = {};

materialPackages.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});


// packages['ng2-file-upload'] = {
//   format: 'cjs',
//   defaultExtension: 'js',
//   main: 'ng2-file-upload.js'
// };


// packages['@ng-bootstrap/ng-bootstrap'] = {
//   defaultExtension: 'js',
//   main: 'index.js'
// };

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels:string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/tours/tours-search',
  'app/tours/tours-search/tours-facets',
  'app/tours/tours-search/tours-list',
  'app/tours/tours-search/tours-facets/shared',
  'app/expos-list',
  'app/expos/expos-list',
  'app/journeys/journey-list',
  /** @cli-barrel */
];

const cliSystemConfigPackages:any = {};
barrels.forEach((barrelName:string) => {
  cliSystemConfigPackages[barrelName] = {main: 'index'};
});

/** Type declaration for ambient System. */
declare var System:any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    '@angular2-material': 'vendor/@angular2-material',
    // 'ng2-file-upload': 'vendor/ng2-file-upload',
    'rxjs': 'vendor/rxjs',
    'pannellum': 'vendor/pannellum/build/pannellum.js',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({map, packages});
