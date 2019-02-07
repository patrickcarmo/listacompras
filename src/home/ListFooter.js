import React from 'react';

const ListFooter = (props) => (
	<div className="list-footer">
		<p>20/01/2019</p>
		<p>R$ {props.total}</p>
	</div>
);

export default ListFooter;