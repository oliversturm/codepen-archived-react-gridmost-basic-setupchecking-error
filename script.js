// The following const accesses the elements from the variable created
// by the <script> tag in this Pen. 
// If you build your application, you usually have something 
// like this:
// import React from 'react';
// import { Grid, TableView, TableHeader } 
//   from '@devexpress/dx-react-grid-bootstrap3';

// const { Grid, Table, TableHeaderRow } = DevExpress.DXReactGridBootstrap4;

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    // This is our demo data. Of course this could be pulled in from
    // some other source in reality.
    this.state = {
      columns: [
      { name: 'name', title: 'Name' },
      { name: 'artist', title: 'Artist' },
      { name: 'year', title: 'Year' }],

      rows: [
      { name: 'Their Satanic Majesties Request', artist: 'The Rolling Stones', year: 1967 },
      { name: 'Prime Cuts', artist: 'David Bowie', year: 1983 },
      { name: 'Human', artist: 'Rag\'n\'Bone Man', year: 2017 }] };


  }

  render() {
    const { rows, columns } = this.state;

    // Technically, even the TableHeaderRow is optional,
    // but the grid would look extremely boring without it.
    // Note that the TableHeaderRow must appear after the 
    // Table.
    // return (
    //   <Grid rows={rows} columns={columns}>
    //     <Table />
    //     <TableHeaderRow />
    //   </Grid>  
    // );

    return /*#__PURE__*/React.createElement("div", null, "hi there");
  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));