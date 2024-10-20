import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { getPost } from '../state/post.selector';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postlists',
  standalone: true,
  imports: [SharedModule , CommonModule],
  templateUrl: './postlists.component.html',
  styleUrl: './postlists.component.scss'
})
export class PostlistsComponent  implements OnInit{
  posts! : Observable<Post[]>;

  constructor(private store: Store<AppState>)
  {

  }

  ngOnInit(): void {
    this.posts = this.store.select(getPost);
  }

}
