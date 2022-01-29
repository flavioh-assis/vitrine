import Filter from './components/Filter';
import Header from './components/Header';

import './App.css';
import './assets/global.css';

function App() {
	return (
		<section className="App">
			<Header />
			<div className='rowContainer'>
				<Filter />
			</div>
		</section>
	);
}

export default App;
