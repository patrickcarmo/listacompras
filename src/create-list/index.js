import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Form from './Form.js';
import ListItem from './ListItem';
import './List.css';
import { Creators as ListActions } from '../store/actions/list';
import NewItem from './NewItem'
class CreateList extends Component { 

	addProduct = (product, list) => {
		this.props.addProduct(product, list);
	}

	render() {
		return (
			<div className="page-container">
				<Form
					addProduct={this.addProduct}
					updateProduct={this.props.updateProduct}
					url={this.props.match.params.action}
				/>
				<div className="list-items-container">
					{this.props.list.items.map(item =>
						<ListItem
							list={this.props.list.list}
							item={item}
							key={item.id}
							deleteProduct={this.props.deleteProduct}
							toggleProduct={this.props.toggleProduct}
						/>)
					}

					{this.props.match.params.action === 'edicao' &&
						<NewItem list={this.props.list.list} />
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	list: state.list
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
