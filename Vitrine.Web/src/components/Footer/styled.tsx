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
	font: 100 0.75rem "Reem Kufi";
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
	justify-content: center;
	
	border-bottom: 1px solid ${colors.white};
	font: 400 1.2rem "Reem Kufi";
	width: 100%;
`;

const SocialMediaLink = styled.a`
	display: flex;
	align-items: center;

	color: ${colors.white};
	gap: 0.3rem;
	padding: 0.5rem;
	text-decoration: none;
	transition: all 0.2s;

	:hover {
		background: #006000;
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
