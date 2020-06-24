import { createStore } from '../hooks/useStore';
import { GlobalState } from './index';

type ActionTypes = 'INCREMENT';
export type CounterState = {
	counter: number;
};

export type CounterActions = {
	[key in ActionTypes]: (state: GlobalState) => Object;
};

export default () =>
	createStore<CounterState, CounterActions>(
		{
			INCREMENT: (state) => ({ ...state, counter: state.counter + 1 }),
		},
		{
			counter: 5,
		}
	);
