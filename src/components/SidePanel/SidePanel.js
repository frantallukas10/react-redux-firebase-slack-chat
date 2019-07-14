import React, { Component } from 'react';
import UserPanel from './UserPanel';
import { Menu } from 'semantic-ui-react';

export class SidePanel extends Component {
	render() {
		const { currentUser } = this.props;

		return (
			<Menu
				size="large"
				inverted
				fixed="left"
				vertical
				style={{ background: '#4c3c4c', fontSize: '1.2.rem' }}
			>
				<UserPanel currentUser={currentUser} />
			</Menu>
		);
	}
}

export default SidePanel;
