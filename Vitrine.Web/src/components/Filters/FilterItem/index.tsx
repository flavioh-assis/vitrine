import React, { InputHTMLAttributes } from 'react';

import { ItemType } from '../../../types';
import { FilterOption, ItemContainer, Option } from './styled';

interface IFilterItemProps extends InputHTMLAttributes<HTMLInputElement> {
	item: ItemType,
}

const FilterItem: React.FC<IFilterItemProps> = ({ item, ...rest}) =>  (
	<ItemContainer key={item.value}>
		<FilterOption>
			<Option
				type="checkbox"
				{...rest}
			/>
			{item.value}
		</FilterOption>
	</ItemContainer>
);

export default FilterItem;
