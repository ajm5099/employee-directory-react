import React from "react";

function Table(props) {
    return <div>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Employee #</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Image 1</td>
                    <td>Image 2</td>
                    <td>Image 3</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>{props.data[0].firstName} {props.data[0].lastName}</td>
                    <td>{props.data[0].phone}</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Table;