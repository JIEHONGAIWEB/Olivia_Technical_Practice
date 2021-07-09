# OneDay

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.

## Code scaffolding

Run `ng generate component component-name --project OneDay` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project OneDay`.
> Note: Don't forget to add `--project OneDay` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build OneDay` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build OneDay`, go to the dist folder `cd dist/one-day` and run `npm publish`.

## Running unit tests

Run `ng test OneDay` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

####  [1] index.ts
```
export * from './lib/one-day.module';
```

#### [2] tsconfig.json
```
  "one-day": [
        "projects/one-day/src/index.ts"
      ],
```

#### [3] tsconfig.app.json
```
   "include": [
    "src/**/*.d.ts",
    "./projects/page07022021/src/index.ts",
    "./projects/one-day/src/index.ts"
  ]
```


#### [4] name-routing.module.ts
```
  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameComponent } from './name.component';


const routes: Routes = [
  { path: '', component: NameComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NameRoutingModule { }
```

#### [5] name.module.ts
```
  import { OneDayRoutingModule } from './one-day-routing.module'

 imports: [
    OneDayRoutingModule
  ],
```

#### [6] app-routing.module.ts
```
 const routes: Routes = [
  { path: 'tt1', loadChildren: "page07022021#Page07022021Module" },
  { path: 'tt2', loadChildren: "one-day#OneDayModule" },
  { path: '', loadChildren: "page07022021#Page07022021Module" }
];
```

#### [7] 【 app.component.html】
```
   <router-outlet></router-outlet>
```

#### [8]  Common
```
    templateUrl: "./page07022021.component.html",
  styleUrls: [
    "./page07022021.component.scss"
  ]
```


