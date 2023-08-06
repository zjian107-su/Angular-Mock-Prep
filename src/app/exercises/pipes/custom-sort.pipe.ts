import { Pipe, PipeTransform } from '@angular/core';

interface Student {
  name: string;
  age: number;
}

@Pipe({
  name: 'olderThan18',
})
export class OlderThan18Pipe implements PipeTransform {
  transform(
    items: Student[],
    lowerBound: number,
    upperBound: number
  ): Student[] {
    if (!items || !lowerBound || !upperBound) {
      return items;
    }
    return items.filter((student) => {
      let check = student.age;
      return check > 18 && check < upperBound;
    });
  }
}
