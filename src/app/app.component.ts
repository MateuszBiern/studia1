import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WydaneComponent } from "./wydane/wydane.component";
import { AppNumberExampleComponent } from "./wydane/app-number-example/app-number-example.component";
import { Zad1Component } from "./ngfor/zad1/zad1.component";
import { Zada1Component } from "./event/zada1/zada1.component";
import { TwowayComponent } from './2way/twoway/twoway.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SynchroComponent } from "./synchro/synchro.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TwowayComponent, SynchroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projekcik';
}
