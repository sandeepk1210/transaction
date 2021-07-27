import * as React from "react";
import {
  GridColumnMenuFilter,
  GridColumnMenuCheckboxFilter,
  GridColumnMenuProps,
  GridColumnMenuCheckboxFilterProps,
} from "@progress/kendo-react-grid";
import orders from "./transaction-data.json";

export class ColumnMenu extends React.Component<GridColumnMenuProps, {}> {
  render() {
    return (
      <div>
        <GridColumnMenuCheckboxFilter
          {...this.props}
          data={orders}
          expanded={true}
        />
      </div>
    );
  }
}
