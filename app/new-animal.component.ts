import { Component, Output, EventEmitter }  from '@angular/core';
import { Animal }  from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>New Animal</h1>
    <div class="form-group">
      <label>Animal Species</label>
      <input #newSpecies>
    </div>
    <div class="form-group">
      <label>Animal Name</label>
      <input #newName>
    </div>
    <div class="form-group">
      <label>Animal Age</label>
      <input #newAge>
    </div>
    <div class="form-group">
      <label>Animal Diet</label>
      <input #newDiet>
    </div>
    <div class="form-group">
      <label>Animal Location</label>
      <input #newLocation>
    </div>
    <div class="form-group">
      <label>Number of Caretakers Needed</label>
      <input #newCaretakers>
    </div>
    <div class="form-group">
      <label>Animal Sex</label>
      <input #newSex>
    </div>
    <div class="form-group">
      <label>Animal Likes</label>
      <input #newLikes>
    </div>
    <div class="form-group">
      <label>Animal Dislikes</label>
      <input #newDislikes>
    </div>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newName.value='';">Add Animal</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal
  }
}
