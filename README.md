# GR1D UI

## Overview

[GR1D UI](https://firebase.google.com) provides the style and components
you need to develop your app or site.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.


## Compatibility

- Angular 7
- Material 7

## Installation

```bash
npm install --save gr1d-ui
```

## Quickstart

Import **GR1D UI** module in Angular app.

```typescript
import { Gr1dUiModule } from 'gr1d-ui';

(...)

@NgModule({
  (...)
  imports: [
    Gr1dUiModule
  ]
  (...)
})

```

Import **GR1D UI** style in `styles.scss`.
```scss
@import '~bootstrap/dist/css/bootstrap-reboot';
@import '~bootstrap/dist/css/bootstrap-grid';
@import '~gr1d-ui/styles';
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```text
node_modules/
└── gr1d-ui/
    ├─ bundles/
    ├─ esm5/
    ├─ esm2015/
    ├─ fesm5/
    ├─ fesm2015/
    ├─ lib/
    ├─ style/
    ├─ gr1d-ui.d.ts
    ├─ gr1d-ui.metadata.json
    ├─ package.json
    ├─ public_api.d.ts
    └── styles.scss
```

## Examples

Check the [demo](https://stackblitz.com/edit/gr1d-ui).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contributing

Please refer to the [CONTRIBUTING page](./CONTRIBUTING.md) for more information
about how you can contribute to this project. We welcome bug reports, feature
requests, code review feedback, and also pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
