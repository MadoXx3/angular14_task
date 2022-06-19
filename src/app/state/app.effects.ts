import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as appActions from './app.actions';
import { ApiClientService } from 'src/services/api/api-client.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private appService: ApiClientService
  ) {}

  userLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.enter),
      mergeMap((action) =>
        this.appService.getProducts().pipe(
          map((response) => appActions.loadedPage(response)),
          catchError((error: any) => of(appActions.loadFail(error)))
        )
      )
    )
  );
}
