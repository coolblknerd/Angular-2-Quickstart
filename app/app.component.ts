/* This is the root component */

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1><p>{{ name }}</p>`
})

/* This class is exported so that it can be imported into the app */
export class AppComponent {
  name = "Reggie";
}
