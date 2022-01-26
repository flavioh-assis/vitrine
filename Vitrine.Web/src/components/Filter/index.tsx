import { useState } from 'react';

import Logo from '../../assets/images/logo.png';

import './styles.css';

const Filter = () => {
	const [generoList, setGeneroList] = useState([
		{
			label: 'Feminino',
			checked: false
		},
		{
			label: 'Masculino',
			checked: false
		},
		{
			label: 'Unissex/Neutro/Não-Binário',
			checked: false
		}
	]);

	return (
		<aside className='aside-filters'>
			<img id='logo' src={Logo} alt="Logo" />
			<span>Filtrar por:</span>
			
			<div className='filters-wrapper'>
				<details open>
					<summary className='filter-header'>
						Gênero
					</summary>
					<div className="filter-items">

						{generoList.map(g => (
							<label className="filter-option" key={g.label}>
								<input
									className="option-ckeckbox"
									type="checkbox"
									checked={g.checked}
								/>
								{g.label}
							</label>
						))}
						
					</div>

				</details>

			</div>
		</aside>);
};

export default Filter;
