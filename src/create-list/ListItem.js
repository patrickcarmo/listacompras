import React from 'react';
import CustomCard from '../common/CustomCard';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import ListItemFooter from './ListItemFooter';

const ListItem = () => ( 
	<CustomCard
		link="#"
		image="https://www.imprensafalsa.com/wp-content/uploads/2017/11/Mitos-e-verdades-sobre-o-cafe%CC%81.png"
		containerClass="list-item"
		footer={<ListItemFooter />}
	>
		<div>
			<div className="list-item-header">
				<Typography variant="subtitle1" component="h2">
					Café
				</Typography>
				<Checkbox />
			</div>
			<Typography component="p">
				1 Unidade
			</Typography>
			<Typography component="p">
				R$ 10.00
			</Typography>
			
		</div>
	</CustomCard>
);

export default ListItem;