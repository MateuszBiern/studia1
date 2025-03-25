import { Component } from '@angular/core';

@Component({
  selector: 'app-app-number-example',
  imports: [],
  template: `
    <p>
     wychodzi {{liczenie}}
    </p>
  `,
  styleUrl: './app-number-example.component.css'
})
export class AppNumberExampleComponent {
liczenie= 10 + 5 * 2;
}
