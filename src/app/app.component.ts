import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WydaneComponent } from "./wydane/wydane.component";
import { AppNumberExampleComponent } from "./wydane/app-number-example/app-number-example.component";



@Component({
  selector: 'app-root', 
  imports: [WydaneComponent, AppNumberExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projekcik';
}
 