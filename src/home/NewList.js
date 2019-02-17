import React from 'react';
import CustomCard from '../common/CustomCard';


const NewList = (props) => (
	<CustomCard
		containerClass="new-list-container"
		link="/lista/novo"
		action={props.newList}
	>
		<div >
			<p className="title">Add New List!</p>
		</div>
	</CustomCard>
);

export default NewList;