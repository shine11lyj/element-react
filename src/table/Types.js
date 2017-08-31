// @flow
export type Column = {
  label: string,
  prop: string,
  property: string,
  type: string,
  minWidth: number,
  width: number,
  align: string,
  sortable: boolean,
  sortMethod: ()=>void,
  resizable: boolean,
  formatter: ()=>void,
  selectable: boolean,
  fixed: boolean | string,
  filterMethod: ()=>void,
  filters: Array<Object>,
  expandPannel: (any)=>any,
  render: ()=>void,
  renderHeader: () => void
};

export type TableStoreProps = {
  data: Array<Object>,
  columns: Array<Column>,
  style: Object,
  height: string | number,
  maxHeight: string | number,
  stripe: boolean,
  border: boolean,
  fit: boolean,
  showHeader: boolean,
  highlightCurrentRow: boolean,
  currentRowKey: string | number,
  rowClassName: ((row: Object, index: number) => string) | string,
  rowStyle: ((row: Object, index: number) => Object) | Object,
  rowKey: ((row: Object) => string | number) | string,
  emptyText: string,
  defaultExpandAll: boolean,
  expandRowKeys: Array<number | string>,
  defaultSort: {
    prop: string,
    order?: 'ascending' | 'descending',
  },
  toolTipEffect: 'dark' | 'light',
  showSummary: boolean,
  sumText: string,
  summaryMethod: ({ column: Array<Column>, data: Array<Object> }) => any,

  //Event
  onCurrentChange: ()=>void,
  onSelectAll: ()=>void,
  onSelectChange: ()=>void
};

export type TableStoreState = {

};

export type TableLayoutProps = TableStoreProps & { store: TableStoreState };

export type TableLayoutState = {

};

export type TableProps = TableLayoutProps & { layout: TableLayoutState };

export type TableState = {

};

// export type DefaultTableProps = {
//   columns: Array<Column>,
//   data: Array<Object>,
//   stripe: boolean,
//   border: boolean,
//   fit: boolean,
//   highlightCurrentRow: boolean
// };


export type TableHeaderProps = {
  columns: Array<Column>,
  fixed: string,
  border: string,
  style: Object,
  isScrollY: boolean,
  flattenColumns: Object
};

export type TableHeaderState = {
  allChecked: boolean,
  dragging: boolean,
  dragState: Object,
  sortStatus: number,
  sortPropertyName: string,
  filterParams: Object
};

export type TableBodyProps = {
  columns: Array<Column>,
  data: Array<Object>,
  rowClassName: ()=>void,
  highlightCurrentRow: boolean,
  style: Object,
  fixed: string,
  flattenColumns: Object
};

export type TableBodyState = {
  highlightRows: Array<Object>,
  selected: Array<Object>
};

export type TableBodyItemProps = {
  columns: Array<Column>,
  itemData: Object,
  fixed: string,
  onSelected: (boolean, any)=>void,
  selected: boolean,
  isHiglight: boolean,
  rowIndex: number,
  rowClassName: (any, any)=>string,
  leafColumns: Array<Object>
};

export type TableBodyItemState = {
  hover: boolean,
  expand: boolean
};

export type TableFooterState = {
  dataList: Array<mixed>
};

export type TableFooterProps = {
  leafColumns: Array<Object>,
  sumText: string,
  data: Array<Object>,
  getSummaries: (any, any) => mixed
};

export type FilterProps = {
  defaultCondi: null | Array<Object>,
  filters: Array<Object>,
  onFilter: (any)=>void,
  onClose: ()=>void,
  visible: boolean,
  position: Object,
  popper: any,
  ower: Object
};

export type FilterState = {
  visible: boolean,
  defaultStyle: Object,
  checked: Array<Object>
};

export type FilterDefaultProps = {
  filters: Array<Object>,
  onFilter: ()=>void
}