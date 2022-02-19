import styled from 'styled-components';

import CheckedImage from '../../../assets/images/checked.png';
import colors from '../../../resources/colors';

const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.1rem 0;
`;

const FilterOption = styled.label`
	align-items: center;
	cursor: pointer;
	display: flex;

	:hover {
		text-decoration: underline;
	}
`;

const Option = styled.input`
	appearance: none;
	background-color: transparent;
	border: 0.0625rem solid #000;
	width: 1rem;
	height: 1rem;
	position: relative;
	transition: border-color 150ms ease 0s, border-radius 300ms ease 0s;

	cursor: pointer;
	height: 1rem;
	margin-right: 0.5rem;
	width: 1rem;

	::after {
		content: url(${CheckedImage});
    display: flex;
    position: absolute;
    height: 1rem;
    left: 0.125rem;
    opacity: 0;
    transform: scale(0);
    transition: opacity 150ms ease 0s, transform 150ms ease 0s;
    width: 1rem;
	}

	:checked {
		border-color: ${colors.checkGreen};
		border-radius: 3px;
    transition: border-radius 150ms ease 0s;

		::after {
			opacity: 1;
			transform: scale(1);
		}
	}
`;

export { FilterOption, ItemContainer, Option };
