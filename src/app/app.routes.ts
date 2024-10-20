import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostlistsComponent } from './posts/postlists/postlists.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: "posts",
    component: PostlistsComponent
  }
];
