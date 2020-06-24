import React, { useState } from 'react';
import './App.css';
import Counter1 from './components/counter-1';
import Counter2 from './components/counter-2';

function App() {
	const [showCounter1, setShowCounter1] = useState(true);

	return (
		<div className='App'>
			<button
				className='toggle-show'
				onClick={() => setShowCounter1(!showCounter1)}
			>
				Toggle Counter1
			</button>
			<div className='left'>{showCounter1 && <Counter1 />}</div>
			<div className='right'>
				<Counter2 />
			</div>
		</div>
	);
}

export default App;
