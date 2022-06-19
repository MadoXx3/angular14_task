import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './app-dropdown.component.html',
  styleUrls: ['./app-dropdown.component.scss'],
})
export class AppDropdownComponent implements OnInit {
  @Input() currentCategory: string = 'All categories';
  @Input() categories: string[] = ['All categories'];
  @ViewChild('dropdown') dropdown!: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  updateCurrent(value: string) {
    this.currentCategory = value;
    this.dropdown.nativeElement.removeAttribute('open');
  }
}
