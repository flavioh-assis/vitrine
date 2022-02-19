import Filters from './components/Filters';
import Header from './components/Header';

import './App.scss';
import './assets/global.scss';

function App() {
	return (
		<section className="App">
			<Header />
			<div className='rowContainer'>
				<Filters />
			</div>
		</section>
	);
}

export default App;
