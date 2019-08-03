import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

import UserPanel from './UserPanel';
import Starred from './Starred';
import Channels from './Channels';
import DirectMessages from './DirectMessages';

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
        <Starred />
        <Channels currentUser={currentUser} />
        <DirectMessages currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;
