import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ directorySections }) => (
	<div className="directory-menu">
		{directorySections.map(({ id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />)}
	</div>
);

const mapStateToProps = createStructuredSelector({
	directorySections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
