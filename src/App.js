import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "./utils/API";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

class App extends React.Component {
  state = {
    isOn: false,
    data: [],
    backupData: [],
    searchTerm: ""
  }

  componentDidMount = () => {
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

  sortNames = (a, b) => {
    const sortedNames = this.state.data.sort((a, b) => a.this.state.data.user.name.first.localCompare(b.this.state.data.user.name.first));
    console.log(sortedNames)
  }


  // filterUpdated = (newData, filterConfiguration) => {
  //   this.setState({
  //     "upddatedData": newData
  //   });
  // }

  buttonPress = () => {
    console.log("Pressed the button")
  }


  render() {
    return (
      <div>

        <Header />
        <input name="testInput" onChange={this.handleInputChange} value={this.state.searchTerm} />

      <button onclick={this.buttonPress}>Push me</button>

        <Table data={this.state.data} />
      </div>
    )
  }
}

export default App;
