import { Action, createReducer } from "@ngrx/store"
import { PostState, initialState } from "../../posts/state/post.state"

const _postReducer = createReducer(initialState);


export function postReducer(state: PostState | undefined , action: Action<string>){
  return _postReducer(state , action)
}