import Filters from './components/Filters';
import Footer from './components/Footer';
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
			<Footer />
		</section>
	);
}

export default App;
