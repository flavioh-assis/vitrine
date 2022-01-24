import React from 'react';

import Logotipo from '../../assets/images/nome.png';
import './styles.css';

const Header = () => (
	<section id='header'>
		<h1 id='title'>Vitrine dos Produtos</h1>
		<img id='nome' src={Logotipo} alt='Emiradus' />
	</section>
);

export default Header;
