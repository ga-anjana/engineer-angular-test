import { Action } from '@ngrx/store';

export enum EPostsActions {
    GetPostsDataStart = '[Posts] Get Posts Start',
    GetPostsDataSuccess = '[Posts] Get Posts Success',
    GetPostsDataFailure = '[Posts] Get Posts Failure',
    ViewPostStart = '[Posts] View Post Start',
    ViewPostStop = '[Posts] View Post Stop'
}

export class GetPostsDataStart implements Action {
    readonly type = EPostsActions.GetPostsDataStart;
}

export class GetPostsDataSuccess implements Action {
    readonly type = EPostsActions.GetPostsDataSuccess;
    constructor(public payload: { data: any }) { }
}

export class GetPostsDataFailure implements Action {
    readonly type = EPostsActions.GetPostsDataFailure;
    constructor(public payload: { error: any }) { }
}

export class ViewPostStart implements Action {
    readonly type = EPostsActions.ViewPostStart;
    constructor(public payload: { data: any }) { }
}

export class ViewPostStop implements Action {
    readonly type = EPostsActions.ViewPostStop;
}

export type PostsActions = GetPostsDataStart | GetPostsDataSuccess | GetPostsDataFailure | ViewPostStart | ViewPostStop;