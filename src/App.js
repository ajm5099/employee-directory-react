import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "./utils/API";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

let employees = [
  {
    firstName: "John",
    lastName: "Jacob",
    phone: "123-456-7890"
  },
  {
    firstName: "andy",
    lastName: "malcom"
  }
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isOn: false,
      data: []
    }
  }
  componentDidMount = () => {
    // call the API which will return JSON
    API.search().then(results => {
      console.log(results)
      this.setState({ data: results.data.results })
      console.log(results.data.results[0].cell)
    }).catch(err => {
      console.log(err)
    })
  }
  onClickHandler = () => {
    this.setState({ isOn: !this.state.isOn })
  }
  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>{this.state.isOn ? "on" : "off"}</button>
        <Header />
        <Form />
        <Table data={this.state.data} />
      </div>
    )
  }
}

export default App;
