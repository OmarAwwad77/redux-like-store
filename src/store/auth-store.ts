import { createStore } from '../hooks/useStore';
import { GlobalState } from './index';
type ActionTypes = 'TOGGLE_AUTH_STATE';

export type AuthState = {
	auth: boolean;
};

export type AuthActions = {
	[key in ActionTypes]: (state: GlobalState) => Object;
};

export default () =>
	createStore<AuthState, AuthActions>(
		{
			TOGGLE_AUTH_STATE: (state) => ({ ...state, auth: !state.auth }),
		},
		{
			auth: false,
		}
	);
