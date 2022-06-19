import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() currentCategory: string = 'All categories';
  @Input() categories: string[] = [
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
