import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { EPostsActions, GetPostsDataStart, GetPostsDataSuccess, GetPostsDataFailure } from '../actions/posts.action';
import { AlgoliaService } from '../../services/algolia.service';


@Injectable()
export class PostsEffects {
    @Effect() getPosts$;

    constructor(
        private _actions$: Actions,
        private _algoliaService: AlgoliaService
    ) {
        this.getPosts$ = this._actions$
            .pipe(
                ofType(EPostsActions.GetPostsDataStart),
                switchMap((action: GetPostsDataStart) => {
                    return this._algoliaService.getPosts()
                        .pipe(
                            map(response => new GetPostsDataSuccess({ data: response })),
                            catchError(error => of(new GetPostsDataFailure({ error })))
                        )
                })
            )
    }
}