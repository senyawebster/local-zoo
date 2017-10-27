import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Placeholder Info</h1>
  `
})

export class AppComponent {

    masterAnimalList: Animal[] = [
     new Animal('Jaguar', 'Spots', 4, 'carnivore', 'Oregon Zoo', 2, 'female', 'a nice perch', 'missing shadow'),
     new Animal('Elephant', 'Groot', 9, 'herbivore', 'Oregon Zoo', 4, 'male', 'big mud puddles', 'mice'),
     new Animal('Harbor Seal', 'Jake', 2, 'carnivore', 'Oregon Zoo', 3, 'male', 'ice toys', 'murky water')
    ];
    selectedAnimal = null;


}
