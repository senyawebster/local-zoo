import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Local Zoo</h1>

      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editTask($event)"></animal-list>

      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>

  </div>
  `
})



export class AppComponent {




}
