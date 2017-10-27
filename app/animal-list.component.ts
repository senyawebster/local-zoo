import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">All Ages</option>
    <option value="young">Young Animals</option>
    <option value="mature">Mature Animals</option>
  </select>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
      {{currentAnimal.species}} // {{currentAnimal.name}} // {{currentAnimal.age}} // {{currentAnimal.diet}} // {{currentAnimal.location}} // {{currentAnimal.caretakers}} // {{currentAnimal.sex}} // {{currentAnimal.likes}} // {{currentAnimal.dislikes}}
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
    <li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "mature";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
