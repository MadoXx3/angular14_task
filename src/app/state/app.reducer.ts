import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/models/product';
import * as AppActions from './app.actions';
export interface ProductsState {
  products: Product[];
}

export const initialState: ProductsState = {
  products: [],
};

export const reducer = createReducer(
  initialState,
  on(AppActions.enter, () => initialState),
  on(AppActions.loadedPage, (state, action): ProductsState => action)
);
