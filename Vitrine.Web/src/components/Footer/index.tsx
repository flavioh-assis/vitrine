import {
	FooterContainer,
	IconInstagram,
	IconShop,
	Navigation,
	SocialMediaLink
} from './styled';

const Footer = () => {
	const gitHubUrl = 'https://github.com/flavioh-assis?tab=repositories';
	const instagramUrl = 'https://www.instagram.com/emiradus/';
	const storeUrl = 'https://emiradus.mercadoshops.com.br/?preview';

	return (
		<FooterContainer>
			<Navigation>

				<SocialMediaLink
					href={instagramUrl}
					target='_blank'
					rel='noreferrer'
					aria-label='Link para o Instagram'
				>
					<IconInstagram />
					Instagram
				</SocialMediaLink>

				<SocialMediaLink
					href={storeUrl}
					target='_blank'
					rel='noreferrer'
					aria-label='Link para a Loja Online'
				>
					<IconShop />
					Loja Online
				</SocialMediaLink>

			</Navigation>

			<SocialMediaLink
				href={gitHubUrl}
				target='_blank'
				rel='noreferrer'
				aria-label='Link para o GitHub do criador do site'
			>
				Website criado por Flavio Assis
			</SocialMediaLink>

		</FooterContainer>
	);
};

export default Footer;
