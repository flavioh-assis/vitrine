import { AiOutlineInstagram, AiOutlineShoppingCart } from 'react-icons/ai';
import styled from 'styled-components';

import colors from '../../resources/colors';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.greenEmiradus};
	bottom: 0;
  box-shadow: 0px -4px 10px -5px rgba(0, 0, 0, 0.75);
	color: ${colors.white};
	font: 100 1rem "Reem Kufi";
	gap: 1rem;
	padding: 1.2rem 0;
	position: absolute;
	width: 100%;
`;

const IconInstagram = styled(AiOutlineInstagram)`
	height: 2rem;
	width: 2rem;
`;

const IconShop = styled(AiOutlineShoppingCart)`
	height: 2rem;
	width: 2rem;
`;

const Navigation = styled.nav`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	font: 400 1.2rem "Reem Kufi";
`;

const SocialMediaLink = styled.a`
	display: flex;
	align-items: center;

	color: ${colors.white};
	gap: 0.3rem;
	text-decoration: none;
	transition: all 0.2s;

	:hover {
		color: ${colors.black};
		/* color: ${colors.redEmiradus}; */
		transition: all 0.2s;
	}
`;

export {
	FooterContainer,
	IconInstagram,
	IconShop,
	Navigation,
	SocialMediaLink
};
