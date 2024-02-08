import {
  AnyAction,
  CombinedState,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';


import { ScrollSaveSchema } from '@/features/ScrollSave';


import { createReduxStore } from './store';

export interface StateSchema {

  scrollSave: ScrollSaveSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends ToolkitStore {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
