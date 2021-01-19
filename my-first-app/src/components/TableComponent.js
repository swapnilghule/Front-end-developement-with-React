import React from 'react';
import { Table } from 'reactstrap';

const Tables = (props) => {
  return (
    <Table  hover striped bordered responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Semester</th>
          <th>Grade</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Third</td>
          <td>9.12</td>
          <td>2019-2020</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Fourth</td>
          <td>9.50</td>
          <td>2019-2020</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Fivth</td>
          <td> Pursuing</td>
          <td>2020-2021</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tables;