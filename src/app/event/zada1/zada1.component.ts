import { Component } from '@angular/core';

@Component({
  selector: 'app-zada1',
  imports: [],
  templateUrl: './zada1.component.html',
  styleUrl: './zada1.component.css'
})
export class Zada1Component {
  // h1HeadText = 'Witaj w mojej aplikacji';
  // selectedColor= "red";
  // elementClass = 'normal';

  // onFocus() {
  //     this.elementClass = 'focused';
  // }
  // onClick(event: MouseEvent) {
  //   console.log('Element:', event.target);
  //   console.log('Event details:', event);
  // }
//----------------------------------------------

 text123: boolean = false;  // Początkowa wartość false

  // Metoda wywoływana po kliknięciu
  onClick2(): void {
    this.text123 = !this.text123;  // Przełączamy wartość zmiennej boolean
  }


}
