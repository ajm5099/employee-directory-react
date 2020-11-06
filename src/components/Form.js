import React from "react";

function Form(props) {
    return <div>
        <form>
            <div className="form-group row">
                <label for="inputSearch" class="col-sm-2 col-form-label">Search</label>
                <div className="col-sm-4">
                    <input type="Text" className="form-control" id="inputSearch" placeholder="Search" onChange={this.filterList} />
                </div>
            </div>
        </form>
    </div>
}

export default Form;

// how to think about this:
// My header needs to be manipulated, but it has to be aware of all of its data
// I can have a boolean value of filtering the data. Either im viewing it all, or imfiltering the data. For all data, the boolean is false (I want all data).As soon as the user types into the search Bar. Consider moving it into the app itself. This makes it easier to keep track of data.