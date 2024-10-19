import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";
import { consumerAfterComputation } from "@angular/core/primitives/signals";

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState , (state) => {
  return state.counter
})

export const getChannelName = createSelector(getCounterState , (state) => {
  return state.channelName
})

