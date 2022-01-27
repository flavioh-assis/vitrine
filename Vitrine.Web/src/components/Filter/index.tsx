import { useEffect, useState } from 'react';

import Logo from '../../assets/images/logo.png';
import { GenderType, /* ColorType */ } from '../../types';

import './styles.css';

interface IGenderFilter {
	Id: number
	Gender: string
	Checked: boolean
}

const Filter = () => {
	const [genderList, setGenderList] = useState<GenderType[]>([
		{
			Id: 1,
			Gender: 'Feminino'
		},
		{
			Id: 2,
			Gender: 'Masculino'
		},
		{
			Id: 3,
			Gender: 'Unissex'
		}
	]);
	const [genderFilters, setGenderFilters] = useState<IGenderFilter[]>([]);

	const createGenderFilter = () => {
		const gFilters = genderList.map(g => {
			// return {
			// 	Id: g.Id,
			// 	Gender: g.Gender,
			// 	Checked: false
			// } as IGenderFilter;
			return {
				...g,
				Checked: false
			} as IGenderFilter;
		});
		
		console.log(gFilters);
		
		setGenderFilters(gFilters);
	};

	useEffect(() => {
		createGenderFilter();
	},[]);

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
						{
							genderFilters.map(g => (
								<label className="filter-option" key={g.Gender}>
									<input
										className="option-ckeckbox"
										type="checkbox"
										checked={g.Checked}
										onChange={c => g.Checked = c.target.checked}
									/>
									{g.Gender}
								</label>
							))
						}
						
					</div>

				</details>

			</div>
		</aside>);
};

export default Filter;
