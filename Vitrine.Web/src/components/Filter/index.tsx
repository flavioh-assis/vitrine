import { useEffect, useState } from 'react';

import Logo from '../../assets/images/logo.png';
import { FilterType, ItemType } from '../../types';
import FilterItem from './FilterItem';
import './styles.scss';

const Filter = () => {
	const [filters, setFilters] = useState<FilterType[]>([]);
	const [selected, setSelected] = useState<FilterType[]>([]);

	const handleClickFrame = (item: ItemType, filter: FilterType) => {
		const filterIndex = selected
			.findIndex(x => x.label === filter.label);

		if (filterIndex === -1) {
			const newFilterSelected = {
				label: filter.label,
				items: [{...item}]
			};
			setSelected([...selected, newFilterSelected]);
			
			return;
		}

		const itemIndex = selected[filterIndex].items
			.findIndex(x => x.value === item.value);

		if (itemIndex === -1) {
			const clonedStateSelected = [...selected];
			const cloneFilter = clonedStateSelected.splice(filterIndex, 1)[0];
			
			const newFilter = {
				...cloneFilter,
				items: [
					...cloneFilter.items,
					item
				]
			};
			setSelected([...clonedStateSelected, newFilter]);

			return;
		}
		const clonedStateRemoveItem = [...selected];
		clonedStateRemoveItem[filterIndex].items.splice(itemIndex, 1);

		setSelected(clonedStateRemoveItem);
	};

	useEffect(() => {
		setFilters([
			{
				label: 'Gênero',
				items: [
					{
						id: 1,
						value: 'Feminino'
					},
					{
						id: 2,
						value: 'Masculino'
					},
					{
						id: 3,
						value: 'Unissex'
					},
				]
			},
			{
				label: 'Estilo',
				items: [
					{
						id: 1,
						value: 'Aviador'
					},
					{
						id: 2,
						value: 'Clássico'
					},
					{
						id: 3,
						value: 'Esporte'
					},
					{
						id: 4,
						value: 'Jazz'
					},
					{
						id: 5,
						value: 'Máscara'
					},
					{
						id: 6,
						value: 'Quadrado'
					},
					{
						id: 7,
						value: 'Redondo'
					},
					{
						id: 8,
						value: 'Retrô'
					},
				]
			},
			{
				label: 'Lente',
				items: [
					{
						id: 1,
						value: 'Cristal'
					},
					{
						id: 2,
						value: 'Degradê'
					},
					{
						id: 3,
						value: 'Espelhada'
					},
					{
						id: 4,
						value: 'Polarizada'
					}
				]
			},
			{
				label: 'Cor da Lente',
				items: [
					{
						id: 1,
						value: 'Amarela'
					},
					{
						id: 2,
						value: 'Azul'
					},
					{
						id: 3,
						value: 'Bege'
					},
					{
						id: 4,
						value: 'Branca'
					},
					{
						id: 5,
						value: 'Caramelo'
					},
					{
						id: 6,
						value: 'Cinza'
					},
					{
						id: 7,
						value: 'Degradê'
					},
					{
						id: 8,
						value: 'Fume'
					},
					{
						id: 9,
						value: 'Laranja'
					},
					{
						id: 10,
						value: 'Marrom'
					},
					{
						id: 11,
						value: 'Prata'
					},
					{
						id: 12,
						value: 'Preta'
					},
					{
						id: 13,
						value: 'Rosa'
					},
					{
						id: 14,
						value: 'Roxa'
					},
					{
						id: 15,
						value: 'Verde'
					},
					{
						id: 16,
						value: 'Vermelha'
					},
					{
						id: 17,
						value: 'Vinho'
					}
				]
			},
			{
				label: 'Cor da Armação',
				items: [
					{
						id: 1,
						value: 'Amarela'
					},
					{
						id: 2,
						value: 'Azul'
					},
					{
						id: 3,
						value: 'Bege'
					},
					{
						id: 4,
						value: 'Branca'
					},
					{
						id: 5,
						value: 'Caramelo'
					},
					{
						id: 6,
						value: 'Cinza'
					},
					{
						id: 7,
						value: 'Degradê'
					},
					{
						id: 8,
						value: 'Dourada'
					},
					{
						id: 9,
						value: 'Laranja'
					},
					{
						id: 10,
						value: 'Marrom'
					},
					{
						id: 11,
						value: 'Prata'
					},
					{
						id: 12,
						value: 'Preto'
					},
					{
						id: 13,
						value: 'Rosa'
					},
					{
						id: 14,
						value: 'Roxa'
					},
					{
						id: 15,
						value: 'Verde'
					},
					{
						id: 16,
						value: 'Vermelho'
					},
					{
						id: 17,
						value: 'Vinho'
					}
				]
			}
		]);
	},[]);

	const CheckSelected = (item: ItemType, filter: FilterType) => {
		const filterIndex = selected
			.findIndex(f => f.label === filter.label);

		if (filterIndex === -1)
			return false;

		const itemIndex = selected[filterIndex].items
			.findIndex(i => i.value === item.value);

		if (itemIndex === -1)
			return false;
			
		return true;
	};

	return (
		<aside className='asideFilters'>
			<img id='logo' src={Logo} alt="Logo" />
			<span>Filtrar por:</span>
			
			<div className='filtersWrapper'>
				
				{filters.map((f) => (
					<details key={f.label} open>
						<summary className='filterHeader'>
							{f.label}
						</summary>

						{f.items.map(i => (
							<FilterItem
								key={i.value}
								item={i}
								checked={CheckSelected(i, f)}
								onChange={() => handleClickFrame(i, f)}
							/>
						))}
					</details>

				))}


			</div>

		</aside>);
};

export default Filter;
