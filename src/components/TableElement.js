//
// Requires state.items

import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn
} from 'material-ui/Table';

// Custom Components //
import TableItem from './TableItem'
// ----------------- //

class TableElement extends Component {
  function renderTableItems() {
    let TableItems;
    for(let item in this.items) {
      TableItems += (
        <TableItem
          isSelected={item.isSelected}
          originName={item.origin.name}
          renameName={item.rename.name}
          originPath={item.origin.path}
        />
      )
    }
    return TableItems;
  }

  render() {
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Original File Name</TableHeaderColumn>
          <TableHeaderColumn>Renamed File Name</TableHeaderColumn>
          <TableHeaderColumn>Path</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {this.renderTableItems()}
      </TableBody>
    </Table>
  }
}

export TableElement
