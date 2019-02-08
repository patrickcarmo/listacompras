import { Types } from '../actions/form';

const initilState = {
	action: 'new',
	productToUpdate: {}
}

export default function form(state = initilState, action) {
	switch (action.type) {
		case Types.START_UPDATE:
			return {
				action: 'update',
				productToUpdate: action.product
			};
		case Types.FINISH_UPDATE:
			return {
				action: 'new',
				productToUpdate: {}
			};
		default:
			return state;
	}
}