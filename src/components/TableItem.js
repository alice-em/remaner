import React from 'react';
import {
  IconButton,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import {Close} from 'material-ui-icons';

export default function TableItem(props) {
  return (
    <TableRow selected={props.isSelected}>
      <TableRowColumn>{props.originName}</TableRowColumn>
      <TableRowColumn>{props.renameName}</TableRowColumn>
      <TableRowColumn>{props.originPath}</TableRowColumn>
      <TableRowColumn style={{width: props.width}}>
        <IconButton onClick={props.removeItem}>
          <Close style={{color: props.colors}} />
        </IconButton>
      </TableRowColumn>
    </TableRow>
  );
}
