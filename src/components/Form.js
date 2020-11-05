import React from "react";

function Form(props) {
    return <div>
        <form>
            <div className="form-group row">
                <label for="inputSearch" class="col-sm-2 col-form-label">Search</label>
                <div className="col-sm-10">
                    <input type="Text" className="form-control" id="inputSearch" placeholder="Search" />
                </div>
            </div>
        </form>
    </div>
}

export default Form;