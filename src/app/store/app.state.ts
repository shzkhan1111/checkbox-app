import { _counterReducer } from "../counter/counter/state/counter.reducer";
import { CounterState } from "../counter/counter/state/counter.state";
import { postReducer } from "../posts/state/post.reducer";
import { PostState } from "../posts/state/post.state";

export interface AppState{
  counter: CounterState,
  posts : PostState
}

export const appReducer = {
  counter : _counterReducer,
  posts : postReducer
}