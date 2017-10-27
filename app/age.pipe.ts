import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "age",
  pure: false
})

export class AgePipe implements PipeTransform {

  transform(input: Animal[], desiredAge) {
    var output: Animal[] = [];
    // refactor var to let once confirmed this works
    if(desiredAge === "young") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "mature") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
