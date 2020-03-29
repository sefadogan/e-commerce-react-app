import React from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

export default class Shop extends React.Component {
	constructor(props) {
		super(props);

		this.state = { collections: SHOP_DATA };
	}
	render() {
		const { state } = this;
		return (
			<div className="shop-page">
				{state.collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}
