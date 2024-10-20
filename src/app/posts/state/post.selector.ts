import { state } from "@angular/animations";
import { PostState } from "./post.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getPostsState = createFeatureSelector<PostState>('posts');


export const getPost = createSelector(getPostsState , (state) => {
  return state.posts
})