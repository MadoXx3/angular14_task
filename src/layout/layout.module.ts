import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavbarTopLinksComponent } from './components/navbar-top-links/navbar-top-links.component';
import { NavbarBottomDropdownsComponent } from './components/navbar-bottom-dropdowns/navbar-bottom-dropdowns.component';
import { SharedModule } from 'src/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchBarComponent,
    NavbarTopLinksComponent,
    NavbarBottomDropdownsComponent,
    SidebarComponent,
    CardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [NavbarComponent, SidebarComponent, CardComponent],
})
export class LayoutModule {}
