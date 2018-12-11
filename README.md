# GR1D UI

## Overview

[GR1D UI](https://firebase.google.com) provides the tools and infrastructure
you need to develop your app, grow your user base, and earn money. The Firebase
Admin Node.js SDK enables access to Firebase services from privileged environments
(such as servers or cloud) in Node.js.

For more information, visit the
[Firebase Admin SDK setup guide](https://firebase.google.com/docs/admin/setup/).

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

## References

https://medium.com/@tomsu/how-to-build-a-library-for-angular-apps-4f9b38b0ed11

https://angularfirebase.com/lessons/build-an-angular-library-with-ngpackagr/

https://medium.com/@Dor3nz/compiling-css-in-new-angular-6-libraries-26f80274d8e5

https://github.com/angular/angular-cli/issues/10869

### Build

```bash
ng build gr1d-ui
```

### Publish

```bash
npm run build
cd projects/gr1d-ui/dist
npm publish
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
