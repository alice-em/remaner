import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

export function TableItem(props) => {
  return (
    <TableRow selected={props.isSelected}>
      <TableRowColumn>{props.originName}</TableRowColumn>
      <TableRowColumn>{props.renameName}</TableRowColumn>
      <TableRowColumn>{props.originPath}</TableRowColumn>
    </TableRow>
  )
}
