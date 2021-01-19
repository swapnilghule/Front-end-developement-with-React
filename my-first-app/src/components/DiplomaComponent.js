import React from 'react';
import { Table } from 'reactstrap';

const Diploma = (props) => {
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
          <td>First</td>
          <td>  93.39%</td>
          <td>Winter 2016</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Second</td>
          <td>92.63%</td>
          <td>Summer 2017</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Third</td>
          <td> 92.47%</td>
          <td>Winter 2017</td>
        </tr>
         <tr>
          <th scope="row">4</th>
          <td>Fourth</td>
          <td>89.11%</td>
          <td>Summer 2018</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Fivth</td>
          <td>93.25%</td>
          <td>Winter 2018</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Sixth</td>
          <td>93.00%</td>
          <td>Summer 2019</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Diploma;