import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WydaneComponent } from "./wydane/wydane.component";
import { AppNumberExampleComponent } from "./wydane/app-number-example/app-number-example.component";
import { Zad1Component } from "./ngfor/zad1/zad1.component";
import { Zada1Component } from "./event/zada1/zada1.component";



@Component({
  selector: 'app-root',
  imports: [Zad1Component, Zada1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projekcik';
}
