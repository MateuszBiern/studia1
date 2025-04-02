import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-zad1',
  imports: [CommonModule],
  templateUrl: './zad1.component.html',
  styleUrl: './zad1.component.css'
})
export class Zad1Component {

  days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
}
