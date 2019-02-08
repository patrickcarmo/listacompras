import React from 'react';
import CustomCard from '../common/CustomCard';


const NewList = (props) => (
	<CustomCard
		containerClass="new-list-container"
		link="/lista"
		action={props.newList}
	>
		<div >
			<p className="title">Adicionar Novas Listas!</p>
		</div>
	</CustomCard>
);

export default NewList;