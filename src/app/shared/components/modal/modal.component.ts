import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { IAppState } from 'src/app/core/store/state/app.state';
import { Post } from 'src/app/core/interfaces/post.interface';
import { ViewPostStop } from 'src/app/core/store/actions/posts.action';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  selectedPost: Post;
  subscription: Subscription;

  constructor(
    public _store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.subscription = this._store.select('postsData').subscribe(resp => {
      if (resp.selectedPost) {
        this.selectedPost = resp.selectedPost;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this._store.dispatch(new ViewPostStop());
  }
}
