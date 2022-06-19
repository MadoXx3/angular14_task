import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar-bottom-dropdowns',
  templateUrl: './navbar-bottom-dropdowns.component.html',
  styleUrls: ['./navbar-bottom-dropdowns.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarBottomDropdownsComponent implements OnInit {
  categories: string[] = [
    'Bakery',
    'Fruit and vegetables',
    'Meat and fish',
    'Drinks',
    'Kitchen',
    'Special nutrition',
    'Baby',
    'Pharmacy',
  ];
  constructor() {}

  ngOnInit(): void {}
}
