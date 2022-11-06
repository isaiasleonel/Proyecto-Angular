import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = [
    {
      name: 'Negra Juerte',
      type: 'Porter',
      price: 123,
      stock: 5,
      image: 'assets/image/porter.jpeg',
      clearance: false,
      quantify: 0,
    },
    {
      name: 'Red Red Wine',
      type: 'Barley Wine',
      price: 200,
      stock: 3,
      image: 'assets/image/porter.jpeg',
      clearance: true,
      quantify: 0,
    },
    {
      name: 'Yellow Submarine',
      type: 'Golden Ale',
      price: 180,
      stock: 0,
      image: 'assets/image/porter.jpeg',
      clearance: false,
      quantify: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  upQuantify(beer: Beer): void {
    if (beer.quantify < beer.stock) beer.quantify++;
  }

  downQuantify(beer: Beer): void {
    if (beer.quantify > 0) beer.quantify--;
  }

  onChangeQuantify(beer: Beer): void {
    console.log(beer);
  }
}
