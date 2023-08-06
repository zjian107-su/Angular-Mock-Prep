import { Component } from '@angular/core';
import { interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-pipe-playground',
  templateUrl: './pipe-playground.component.html',
  styleUrls: ['./pipe-playground.component.css'],
})
export class PipePlaygroundComponent {
  products = of([
    {
      name: 'iPhone 12',
      price: 799,
      releaseDate: new Date(2020, 9, 23),
      description:
        'The latest iPhone, 5G speed, A14 Bionic, edge-to-edge OLED display, Ceramic Shield, and Night mode on every camera.',
    },
    {
      name: 'iPhone 12 Pro',
      price: 999,
      releaseDate: new Date(2020, 9, 23),
      description: 'awesome phone',
    },
  ]);

  myPromise = Promise.resolve('Daniel');

  myPromise01 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve('success');
    } else {
      reject('error');
    }
  });

  onClick() {
    console.log('clicked');
    return interval(1000).pipe(take(5)).subscribe(console.log);
  }
}
