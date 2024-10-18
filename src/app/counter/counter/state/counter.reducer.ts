import { state } from "@angular/animations";
import { increment , decrement, reset, customIncrement, changeChannelName } from "./counter.action";
import { initialState } from "./counter.state";
import { createReducer , on } from "@ngrx/store";

export const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter : state.counter + 1
    }
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter : state.counter -1
    }
  }),
  on(reset , (state) => {
    return{
      ...state,
      counter : 0
    }
  }),
  on(customIncrement,(state , action) =>{
    return {
      ...state,
      counter: state.counter + action.count
    }
  }),
  on(changeChannelName , state => {
    return {
      ...state,
      channelName:'Modified Channel'
    }
  })
)
