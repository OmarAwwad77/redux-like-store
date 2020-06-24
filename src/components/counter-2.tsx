import React from 'react';
import useStore from '../hooks/useStore';
import { GlobalState, Actions } from '../store/index';

const Counter2 = () => {
	const [storeState, dispatch] = useStore<GlobalState, Actions>(true);

	return (
		<div className='counter'>
			<span>{storeState.counter}</span>
			<span>{storeState.auth ? 'Authenticated' : 'Guest'}</span>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button>
		</div>
	);
};

export default Counter2;
