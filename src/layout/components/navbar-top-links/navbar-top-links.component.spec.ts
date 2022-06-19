import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTopLinksComponent } from './navbar-top-links.component';

describe('NavbarTopLinksComponent', () => {
  let component: NavbarTopLinksComponent;
  let fixture: ComponentFixture<NavbarTopLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarTopLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarTopLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
