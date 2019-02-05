import React from 'react';

import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';
import CustomCard from '../common/CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';

import './List.css';

const List = () => (
	<CustomCard
		containerClass="list-container"
		footer={<ListFooter />}
		link="/lista"
	>
		<div>
			<p className="title">Mês</p>
			<div className="list-card-body">
				<ListItem
					icon={faCheck}
					text="1 restante(s) restante(s)"
				/>
				<ListItem
					icon={faShoppingBasket}
					text="2 Item(s) Comprado(s)"
				/>
			</div>
		</div>
	</CustomCard>
);

export default List;