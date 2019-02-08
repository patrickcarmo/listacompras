import React from 'react';
import CustomCard from '../common/CustomCard';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import ListItemFooter from './ListItemFooter';

const ListItem = ({item, deleteProduct, toggleProduct}) => ( 
	<CustomCard
		link="#"
		image="https://www.imprensafalsa.com/wp-content/uploads/2017/11/Mitos-e-verdades-sobre-o-cafe%CC%81.png"
		containerClass="list-item"
		footer={<ListItemFooter item={item} deleteProduct={deleteProduct} />}
	>
		<div>
			<div className="list-item-header">
				<Typography variant="subtitle1" component="h2">
					{item.product}
				</Typography>
				<Checkbox checked={item.checked} onClick={() => toggleProduct(item.id)}/>
			</div>
			<Typography component="p">
				{item.quantity} {item.unit}
			</Typography>
			<Typography component="p">
				R$ {item.price}
			</Typography>
			
		</div>
	</CustomCard>
);

export default ListItem;