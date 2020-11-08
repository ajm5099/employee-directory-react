import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "./utils/API";
import Header from "./components/Header/Header";
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

  // sortNames = (a, b) => {
  //   const sortedNames = data.sort((a, b) => {
  //     if (a.user.name.first > b.user.name.first) {
  //       return 1;
  //     }
  //     if (a.user.name.first < b.user.name.first) {
  //       return -1;
  //     }
  //     return 0;
  //   }
  //   )}

  // no parameters needed here  
  sortNames = () => {
    // get the current employees ( probably this.state.data )
    const sortedNames = this.state.data.sort((a, b) => {
      if (a.name.first > b.name.first) {
        return 1;
      }
      if (a.name.first < b.name.first) {
        return -1;
      }
      return 0;
    })
    this.setState(prevState => ({
      ...prevState,
      data: sortedNames
    }))
  }

  buttonPress = () => {
    this.sortNames()
    console.log(this.state.data)
  }


  render() {
    return (
      <div>
        <Header />

        <div className="row">
          <div className="searchArea col-sm-4 col-md-4 col-lg-4">

            <input name="testInput" onChange={this.handleInputChange} value={this.state.searchTerm} placeholder="Search" />

            <button className="btn btn-primary" id="filterBtn" onClick={this.buttonPress}>Sort Names<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-sort-alpha-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11A.5.5 0 0 1 4 2z" />
              <path fill-rule="evenodd" d="M6.354 11.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L4 12.793l1.646-1.647a.5.5 0 0 1 .708 0z" />
              <path d="M9.664 7l.418-1.371h1.781L12.281 7h1.121l-1.78-5.332h-1.235L8.597 7h1.067zM11 2.687l.652 2.157h-1.351l.652-2.157H11zM9.027 14h3.934v-.867h-2.645v-.055l2.567-3.719v-.691H9.098v.867h2.507v.055l-2.578 3.719V14z" />
            </svg>
            </button>
          </div>
        </div>

        <div className="tableArea">
          <Table data={this.state.data} />
        </div>

      </div >
    )
  }
}

export default App;
