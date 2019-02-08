import React from 'react';

import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';
import CustomCard from '../common/CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';

import './List.css';

const List = (props) => (
	<CustomCard
		containerClass="list-container"
		footer={<ListFooter total={props.total} />}
		link="/lista"
	>
		<div>
			<p className="title">{props.list}</p>
			<div className="list-card-body">
				<ListItem
					icon={faCheck}
					text={`${props.openedItems} restante(s) restante(s)`}
				/>
				<ListItem
					icon={faShoppingBasket}
					text={`${props.closedItems} Item(s) Comprado(s)`}
				/>
			</div>
		</div>
	</CustomCard>
);

export default List;