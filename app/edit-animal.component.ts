import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
        <h3>{{childSelectedAnimal.name}}</h3>
        <hr>
        <div>
          <label>Edit Animal's Name</label>
          <input [(ngModel)]="childSelectedAnimal.name">
        </div>
        <div>
          <label>Edit Animal's Age</label>
          <input [(ngModel)]="childSelectedAnimal.age">
        </div>
        <div>
          <label>Edit # Of Caretakers Needed</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers">
        </div>
        <button (click)="doneButtonClicked()">Done</button>
      <div>
    </div>
  `
})


export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }
}
