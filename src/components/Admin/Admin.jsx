import React from "react";
import {Auth} from "./Auth";
import {AdminMenu} from "./AdminMenu";
import {Switch, Route} from "react-router-dom";
import {AddCategory} from "./AddCategory";
import {AddPost} from "./AddPost";

export class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: ""
        }
    }

    componentDidMount() {
        console.log("test");
    }

    render() {
        return(
            <div>
                <AdminMenu/>
                <Switch>
                    <Route path="/admin/addPost">
                        <AddPost changeH1={this.props.changeH1}/>
                    </Route>
                    <Route path="/admin/addCategory">
                        <AddCategory changeH1={this.props.changeH1}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}