import styled from 'styled-components';

export const FiltersContainer = styled.aside`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 1rem;

	h1 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}
`;

export const LogoCompany = styled.img`
	margin: 0 auto 1rem auto;
	width: 15rem;
`;

export const FiltersWrapper = styled.div`
	background: #fff;
	border-radius: 0.3rem;
	box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.75);
	min-width: 16rem;
	padding: 1rem;

	details {
		margin-bottom: 0.5rem;
	}
`;

export const FilterHeader = styled.summary`
	cursor: pointer;
	font-weight: 700;
	padding: 0.1rem 0;
`;
