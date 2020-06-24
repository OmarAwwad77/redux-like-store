import authStore, { AuthState, AuthActions } from './auth-store';
import counterStore, { CounterState, CounterActions } from './counter-store';
import { combineStores } from '../hooks/useStore';

export type GlobalState = AuthState & CounterState;
export type Actions = CounterActions & AuthActions;

export const initStores = () => combineStores(authStore(), counterStore());
