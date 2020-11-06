import React from "react";

function Table(props) {

// const filterNames = props.data.name.first.filter()

    return <div>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Employee #</th>
                    <th scope="col">Image</th>
                    <th scope="col" >Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>

                {props.data.map((data, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td><img src={data.picture.thumbnail} alt="employee pictures" /></td>
                            <td>{data.name.first} {data.name.last}</td>
                            <td>{data.phone}</td>
                            <td>{data.email}</td>
                            <td>{data.dob.date}</td>
                        </tr>
                    )

                })}

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



// function Table(props) {

//     // filterlist = event => {
//     //     var updatedData = this.state.backupData;
//     //     updatedData = updatedData.filter(function(data) {
//     //         return (
//     //             data.fullname.toLowerCase().search(event.target.value.toLowerCase()) !==-1
//     //         );
//     //     });
//     //     this.setState({
//     //         list: updatedList
//     //     });
//     // };

//     return <div>
//         <table class="table">
//             <thead>

//                 <tr>
//                     <th scope="col">Employee #</th>
//                     <th scope="col">Image</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Phone</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">DOB</th>
//                 </tr>
//             </thead>
//             <tbody>

//                 {props.data.map((data, index) => {
//                     return (
//                         <tr key={index}>
//                             <th scope="row">{index + 1}</th>
//                             <td><img src={data.picture.thumbnail} alt="employee pictures" /></td>
//                             <td>{data.name.first} {data.name.last}</td>
//                             <td>{data.phone}</td>
//                             <td>{data.email}</td>
//                             <td>{data.dob.date}</td>
//                         </tr>
//                     )
//                 })}

//                 {/* <tr>
//                     <th scope="row">2</th>
//                     <td>{props.data[0].firstName} {props.data[0].lastName}</td>
//                     <td>{props.data[0].phone}</td>
//                     <td>@mdo</td>
//                 </tr> */}

//             </tbody>
//         </table>
//     </div>
// }

// export default Table;