import React from 'react';
import {AppBar} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {FolderOpen} from 'material-ui-icons';

const FolderButton = () => {
  return (
    <RaisedButton
      label="Open Folder"
      labelPosition="before"
      icon={<FolderOpen/>}
    />
  );
};

const TitleBar = (props) => (
  <AppBar
    title={<span>Remane</span>}
    iconElementRight={<FolderButton />}
    onRightIconButtonClick={props.onClick}
    showMenuIconButton={false}
  />
);

export default TitleBar;
