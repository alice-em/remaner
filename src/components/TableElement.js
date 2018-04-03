// Requires state.items
import React, {Component} from 'react';
import {red500} from 'material-ui/styles/colors';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Custom Components
import TableItem from './TableItem';
// -----------------

const width = '10%';

class TableElement extends Component {
  renderTableBody() {
    let TableItems;
    for (let item in this.props.items) {
      TableItems += (
        <TableItem
          isSelected={item.isSelected}
          originName={item.origin.name}
          renameName={item.rename.name}
          originPath={item.origin.path}
          removeItem={item.removeItem}
          width={width}
          color={red500}
        />
      );
    }
    return (
      <TableBody>
        {TableItems}
      </TableBody>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Original File Name</TableHeaderColumn>
              <TableHeaderColumn>Renamed File Name</TableHeaderColumn>
              <TableHeaderColumn>Path</TableHeaderColumn>
              <TableHeaderColumn style={{color: red500, width: width}}>Remove</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          {this.renderTableBody()}
        </Table>
      </MuiThemeProvider>
    );
  }
}

export default TableElement;
