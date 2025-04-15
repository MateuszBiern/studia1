import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-synchro',
  imports: [FormsModule,CommonModule ],
  templateUrl: './synchro.component.html',
  styleUrl: './synchro.component.css'
})
export class SynchroComponent {
  isChecked: boolean = false;

}
