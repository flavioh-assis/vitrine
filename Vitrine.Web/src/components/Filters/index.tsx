import { useEffect, useState } from 'react';

import Logo from '../../assets/images/logo.png';
import { FilterType, ItemType } from '../../types';
import FilterItem from './FilterItem';
import {FilterHeader as FilterHeader, FiltersContainer, FiltersWrapper as FiltersList, LogoCompany} from './styled';

const Filters = () => {
	const [filters, setFilters] = useState<FilterType[]>([]);
	const [selectedFilters, setSelectedFilters] = useState<FilterType[]>([]);

	const handleClickItem = (filter: FilterType, item: ItemType) => {
		const filterIndex = findFilterIndex(filter);

		if (!isIndexValid(filterIndex)) {
			const filterWithNewItem = createFilterWithItem(filter, item);

			setSelectedFilters([...selectedFilters, filterWithNewItem]);

			return;
		}

		const itemIndex = findItemIndex(selectedFilters[filterIndex], item);

		if (!isIndexValid(itemIndex)) {
			const clonedStateSelectedFilters = [...selectedFilters];
			addItem(clonedStateSelectedFilters[filterIndex], item);

			setSelectedFilters(clonedStateSelectedFilters);

			return;
		}

		const clonedStateSelectedFilters = [...selectedFilters];
		removeItem(clonedStateSelectedFilters[filterIndex], itemIndex);

		setSelectedFilters(clonedStateSelectedFilters);
	};

	const addItem = (filter: FilterType, item: ItemType) => {
		filter.items.push(item);
	};

	const createFilterWithItem = (filter: FilterType, item: ItemType) : FilterType => {
		const newFilter = {
			label: filter.label,
			items: [item]
		};

		return newFilter;
	};

	const findFilterIndex = (filter: FilterType) : number => {
		const foundIndex = selectedFilters.findIndex(f => f.label === filter.label);

		return foundIndex;
	};

	const findItemIndex = (filter: FilterType, item: ItemType) : number => {
		const foundIndex = filter.items.findIndex(i => i.value === item.value);

		return foundIndex;
	};

	const isIndexValid = (index: number) : boolean => {
		return index !== -1;
	};

	const isItemSelected = (filter: FilterType, item: ItemType) : boolean => {
		const filterIndex = findFilterIndex(filter);

		if (!isIndexValid(filterIndex))
			return false;

		const itemIndex = findItemIndex(selectedFilters[filterIndex], item);

		return (isIndexValid(itemIndex));
	};

	const removeItem = (filter: FilterType, itemIndex: number) => {
		filter.items.splice(itemIndex, 1);
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

	return (
		<FiltersContainer>

			<LogoCompany src={Logo} alt="Logo"/>

			<h1>Filtrar por:</h1>
			
			<FiltersList>
				{filters.map((f) => (
					<details key={f.label} open>
						<FilterHeader>
							{f.label}
						</FilterHeader>

						{f.items.map(i => (
							<FilterItem
								key={`${f.label + i.value}`}
								item={i}
								checked={isItemSelected(f, i)}
								onChange={() => handleClickItem(f, i)}
							/>
						))}
					</details>
				))}
			</FiltersList>

		</FiltersContainer>);
};

export default Filters;
