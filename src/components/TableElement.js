// Requires state.items
import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Custom Components
import TableItem from './TableItem';
// -----------------

class TableElement extends Component {
  renderTableItems() {
    let TableItems;
    for (let item in this.props.items) {
      TableItems += <TableItem isSelected={item.isSelected} originName={item.origin.name} renameName={item.rename.name} originPath={item.origin.path}/>;
    }
    return (<TableBody>{TableItems}</TableBody>);
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
            </TableRow>
          </TableHeader>
          {this.renderTableItems()}
        </Table>
      </MuiThemeProvider>
    );
  }
}

export default TableElement;
