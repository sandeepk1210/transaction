import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { Button } from "@progress/kendo-react-buttons";
import {
  Grid,
  GridColumn,
  GridRowClickEvent,
  GridPageChangeEvent,
  GridSortChangeEvent,
  GridDataStateChangeEvent,
  GridFilterChangeEvent,
  GridExpandChangeEvent,
  GridDetailRow,
  GridToolbar,
} from "@progress/kendo-react-grid";
import {
  SortDescriptor,
  orderBy,
  State,
  process,
  CompositeFilterDescriptor,
  filterBy,
  DataResult,
} from "@progress/kendo-data-query";
import {
  IntlProvider,
  load,
  LocalizationProvider,
  loadMessages,
  IntlService,
} from "@progress/kendo-react-intl";

import "./transaction-home.css";

import orders from "./transaction-data.json";
import { ColumnMenu } from "./columnMenu";
import { Transaction } from "./interfaces";

import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";

import numbers from "cldr-numbers-full/main/es/numbers.json";
import currencies from "cldr-numbers-full/main/es/currencies.json";
import caGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
import dateFields from "cldr-dates-full/main/es/dateFields.json";
import timeZoneNames from "cldr-dates-full/main/es/timeZoneNames.json";
import { any } from "prop-types";
import { Input } from "@progress/kendo-react-inputs";

load(
  likelySubtags,
  currencyData,
  weekData,
  numbers,
  currencies,
  caGregorian,
  dateFields,
  timeZoneNames
);

const DATE_FORMAT = "yyyy-mm-dd hh:mm:ss.SSS";
const intl = new IntlService("en");

interface TransactionState {
  transactions: Transaction[];
  dataResult: DataResult;
  dataState: State;
}

const createDataState = (dataState: State) => {
  return {
    dataResult: process(orders, dataState),
    dataState: dataState,
    transactions: [],
  };
};

class TransactionHome extends React.Component<{}, TransactionState> {
  state = createDataState({});

  public transactions: Transaction[] = [];

  public componentDidMount() {
    this.setState({ transactions: orders });
  }

  dataStateChange = (event: GridDataStateChangeEvent) => {
    this.setState(createDataState(event.dataState));
  };

  expandChange = (event: GridExpandChangeEvent) => {
    const isExpanded =
      event.dataItem.expanded === undefined
        ? event.dataItem.aggregates
        : event.dataItem.expanded;
    event.dataItem.expanded = !isExpanded;

    this.setState({ ...this.state });
  };

  render() {
    const gridData = process(this.state.transactions, this.state.dataState);

    return (
      <div>
        <GridToolbar>
          <Input
            placeholder="Search in all columns..."
            //value={allColumnFilter}
            //onChange={onAllColumnFilterChange}
          />
          <Button icon="excel">Export to Excel</Button>
          <Button icon="pdf">Export to PDF</Button>
        </GridToolbar>

        <Grid
          style={{ height: "700px" }}
          sortable={true}
          filterable={true}
          groupable={true}
          reorderable={true}
          data={this.state.dataResult}
          {...this.state.dataState}
          onDataStateChange={this.dataStateChange}
          expandField="expanded"
          onExpandChange={this.expandChange}
        >
          <GridColumn
            field="transactionId"
            title="Transaction"
            columnMenu={ColumnMenu}
            width="200px"
          />
          <GridColumn
            field="assetClass"
            title="Asset Class"
            columnMenu={ColumnMenu}
            width="180px"
          />
          <GridColumn
            field="supportFacility"
            title="Support Facility"
            columnMenu={ColumnMenu}
            width="180px"
          />
          <GridColumn
            field="dealType"
            title="Deal Type"
            columnMenu={ColumnMenu}
            width="180px"
          />
          <GridColumn
            field="dataDate"
            title="Data Date"
            filter="date"
            format="{0:d}"
            columnMenu={ColumnMenu}
            width="180px"
          />
          <GridColumn
            field="currentHolding"
            title="Current Holding"
            filter={"numeric"}
            format="{0:c}"
            columnMenu={ColumnMenu}
            width="180px"
          />
          <GridColumn
            field="issuer"
            title="Issuer"
            columnMenu={ColumnMenu}
            width="180px"
          />
          <GridColumn
            field="issuerType"
            title="Issuer Type"
            columnMenu={ColumnMenu}
            width="180px"
          />
          <GridColumn
            field="linkedPublicTransaction"
            title="Linked Public Transaction"
            columnMenu={ColumnMenu}
            width="180px"
          />
          <GridColumn
            field="capitalStructure"
            title="Capital Structure"
            columnMenu={ColumnMenu}
            width="180px"
          />
          <GridColumn
            field="underlyingRiskWeight"
            title="Underlying Risk Weight"
            filter="numeric"
            columnMenu={ColumnMenu}
            format="{0:p2}"
            width="180px"
          />
        </Grid>
      </div>
    );
  }
}

export default TransactionHome;
