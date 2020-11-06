import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "./utils/API";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

// let employees = [
//   {
//     firstName: "John",
//     lastName: "Jacob",
//     phone: "123-456-7890"
//   },
//   {
//     firstName: "andy",
//     lastName: "malcom"
//   }
// ]

class App extends React.Component {
  state = {
    isOn: false,
    data: [],
    backupData: [],
    searchTerm: ""
  }

  componentDidMount = () => {
    // call the API which will return JSON
    API.search().then(results => {
      console.log(results)
      this.setState({ data: results.data.results, backupData: results.data.results })
      console.log(results.data.results)
    }).catch(err => {
      console.log(err)
    })
  }

  onClickHandler = () => {
    this.setState({ isOn: !this.state.isOn })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.filterUpdated(this.state.data);
  }

  nameFilter = () => {
    this.state.data.filter(function (data) {
      return this.state.filter === "n"
    })
  }

  handleInputChange = (e) => {
    let { value } = e.target
    value = value.toLowerCase()
    if (value) {
      const filtered = this.state.data.filter(user => (user.name.first.toLowerCase().includes(value) || (user.name.last.toLowerCase().includes(value))))
      this.setState({ data: filtered, searchTerm: value })
    } else {
      this.setState({ data: [...this.state.backupData], searchTerm: value })
    }

  }

  // filterUpdated = (newData, filterConfiguration) => {
  //   this.setState({
  //     "upddatedData": newData
  //   });
  // }


  render() {
    return (
      <div>
        {/* {this.state.data.filter(data => data.name.first.includes('J')).map(filteredName => (
          <li>
            {console.log("string", this.state.data)}
            {filteredName.name.first}
            
          </li>
        ))} */}

        <button onClick={this.onClickHandler}>{this.state.isOn ? "on" : "off"}</button>
        <Header />
        <input name="testInput" onChange={this.handleInputChange} value={this.state.searchTerm} />
        {/* <ul>
          {this.state.data.map(user => <li>{user.name.first} {user.name.last}</li>)}

        </ul> */}
        {/* <Form
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        /> */}
        <Table data={this.state.data} />
      </div>
    )
  }
}

export default App;
