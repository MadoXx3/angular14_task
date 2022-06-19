import { createAction, props } from '@ngrx/store';
import { PaginatedProducts } from 'src/models/product';

export const enter = createAction('Enter Website');
export const loadFail = createAction('Enter Website', props<any>());
export const loadedPage = createAction(
  'Load First Page',
  props<PaginatedProducts>()
);
export const paginate = createAction(
  'Append Another Page ',
  props<PaginatedProducts>()
);
