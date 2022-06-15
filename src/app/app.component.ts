import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ShowAllAction } from './store/actions/list.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list-app';
  data: Observable<any[]>;
  list: any[] = [];
  sub: any = null;

  constructor(private store: Store<{ list: any[] }>) {
    this.data = this.store.select('list');
  }

  ngOnInit() {
    this.store.dispatch(ShowAllAction());
    this.sub = this.data.subscribe(datas => {
      this.list = [ ...Object.values(datas) ];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
