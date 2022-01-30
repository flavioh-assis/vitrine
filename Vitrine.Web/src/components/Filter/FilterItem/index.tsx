import React, { InputHTMLAttributes } from 'react';

import { ItemType } from '../../../types';
import './styles.scss';

interface IFilterItemProps extends InputHTMLAttributes<HTMLInputElement> {
	item: ItemType,
}

const FilterItem: React.FC<IFilterItemProps> = ({ item, ...rest}) =>  (
	<div className="filterItem" key={item.value}>
		<label className="filterOption">
			<input
				className="optionCkeckbox"
				type="checkbox"
				{...rest}
			/>
			{item.value}
		</label>
	</div>
);

export default FilterItem;
