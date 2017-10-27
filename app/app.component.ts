import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Local Zoo</h1>

      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>

      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>

  </div>
  `
})



export class AppComponent {

  masterAnimalList: Animal[] = [
   new Animal('Jaguar', 'Spots', 4, 'carnivore', 'Oregon Zoo', 2, 'female', 'a nice perch', 'missing shadow'),
   new Animal('Elephant', 'Groot', 9, 'herbivore', 'Oregon Zoo', 4, 'male', 'big mud puddles', 'mice'),
   new Animal('Harbor Seal', 'Jake', 2, 'carnivore', 'Oregon Zoo', 3, 'male', 'ice toys', 'murky water')
  ];
  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
      this.masterAnimalList.push(newAnimalFromChild);
  }
}
