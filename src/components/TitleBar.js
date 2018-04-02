import React from 'react';
import {AppBar, RaisedButton} from 'material-ui';
import {FolderOpen} from 'material-ui-icons';

const TitleBar = () => (
  <AppBar
    title={<span>Remane</span>}
    iconElementRight={<RaisedButton><FolderOpen /></RaisedButton>}
  />
);

export default TitleBar;
