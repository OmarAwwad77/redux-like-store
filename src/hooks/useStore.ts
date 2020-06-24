import { useState, useEffect } from 'react';

let globalState = {};

let actions: any = {};

let listeners: Function[] = [];

type ActionTypes<Actions> = keyof Actions;

type Dispatch<Actions> = (object: {
	type: ActionTypes<Actions>;
	payload?: any;
}) => void;

const useStore = <State, Actions>(
	receiveUpdates = true
): [State, Dispatch<Actions>] => {
	const [, update] = useState(globalState);

	useEffect(() => {
		if (!receiveUpdates) return;
		console.log('old listener: ', listeners);
		listeners.push(update);
		console.log('new listener: ', listeners);
		return () => {
			console.log('old listener: ', listeners);
			listeners = listeners.filter((listener) => listener !== update);
			console.log('new listener: ', listeners);
		};
	}, []);

	const dispatch: Dispatch<Actions> = ({ type, payload }) => {
		const newState = actions[type](globalState);
		globalState = newState;
		// update(globalState) //only updates the current component(since each component gets a copy of the logic inside the hook)
		listeners.forEach((listener) => listener(globalState));
	};

	return [globalState as State, dispatch];
};

export default useStore;

const createStore = <State, Actions>(
	initActions: Actions,
	initState: State
): [Actions, State] => {
	return [initActions, initState];
};

const combineStores = (...args: {}[][]) => {
	args.forEach((store) =>
		store.forEach((val, i) => {
			if (i === 0) {
				// actions
				actions = { ...actions, ...val };
			} else {
				// state
				globalState = { ...globalState, ...val };
			}
		})
	);
};

export { createStore, combineStores };

// https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
	k: infer I
) => void
	? I
	: never;
