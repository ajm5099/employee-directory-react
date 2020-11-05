import React from "react";

function Table(props) {
    return <div>

        <table class="table">
            <thead>
                {this.state.data.map(data)}
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

                {/* Write the code the populate the table progromatically */}
                <tr>
                    <th scope="row">1</th>
                    <td>{props.data[0].picture}</td>
                    <td>{props.data[0].name}</td>
                    <td>{props.data[0].phone}</td>
                    <td>{props.data[0].email}</td>
                    <td>{props.data[0].dob}</td>
                </tr>

                {/* <tr>
                    <th scope="row">2</th>
                    <td>{props.data[0].firstName} {props.data[0].lastName}</td>
                    <td>{props.data[0].phone}</td>
                    <td>@mdo</td>
                </tr> */}

            </tbody>
        </table>
    </div>
}

export default Table;