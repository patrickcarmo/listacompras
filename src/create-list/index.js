import React from 'react';
import Form from './Form.js';
import ListItem from './ListItem';

import './List.css';

const CreateList = () => (
	<div className="page-container">
		<Form />

		<div className="list-items-container">
			<ListItem />
		</div>

	</div>
)

export default CreateList;
