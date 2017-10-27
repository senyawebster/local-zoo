import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select>
  pipe stuff
    I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older).
  </select>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">
      {{currentAnimal.species}} // {{currentAnimal.name}} // {{currentAnimal.age}} // {{currentAnimal.diet}} // {{currentAnimal.location}} // {{currentAnimal.caretakers}} // {{currentAnimal.sex}} // {{currentAnimal.likes}} // {{currentAnimal.dislikes}}
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>
    <li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
