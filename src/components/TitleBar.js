import React from 'react';
import {AppBar} from 'material-ui';
import IconButton from 'material-ui/IconButton';
import {FolderOpen} from 'material-ui-icons';

const FolderButton = () => {
  return (
    <IconButton tooltip="Open Folder" touch={true} tooltipPosition="bottom-left">
      <FolderOpen/>
    </IconButton>
  );
};

const TitleBar = (props) => (
  <AppBar title={<span> Remane</span>} iconElementRight={<FolderButton />} onRightIconButtonClick={props.onClick} showMenuIconButton={false}/>
);

export default TitleBar;
