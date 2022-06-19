import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProducts } from 'src/app/state/app.selectors';
import { AppState } from 'src/app/state/app.state';
import * as AppActions from '../../state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'angular14_task';
  products$ = this.store.select(selectProducts);
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.dispatch(AppActions.enter());
  }
}
