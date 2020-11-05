import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<div>

  <h1>Employee Directory</h1>
  <h2>Search for employees</h2>
  <p>Dont forget to add a search bar here</p>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Employee #</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

</div>
  );
}

export default App;
