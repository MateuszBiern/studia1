import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-twoway',
  imports: [ FormsModule],
  templateUrl: './twoway.component.html',
  styleUrl: './twoway.component.css'
})
export class TwowayComponent {
  textValue: string = '';
}
