import { createSelector } from '@ngrx/store';
import { ProductsState } from './app.reducer';
import { AppState } from './app.state';

export const selectApp = (state: AppState) => state.app;

export const selectProducts = createSelector(
  selectApp,
  (state: ProductsState) => {
    return [...state.products];
  }
);
