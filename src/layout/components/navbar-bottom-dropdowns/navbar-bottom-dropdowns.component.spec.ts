import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBottomDropdownsComponent } from './navbar-bottom-dropdowns.component';

describe('NavbarBottomDropdownsComponent', () => {
  let component: NavbarBottomDropdownsComponent;
  let fixture: ComponentFixture<NavbarBottomDropdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBottomDropdownsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBottomDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
