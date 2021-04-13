import React from "react";
import {NavLink} from "react-router-dom";

export class AdminMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bg-light">
                <div className="nav justify-content-center">
                    <div className="nav-item mr-5">
                        <NavLink className="nav-link" to="/admin/addCategory">Добавить категорию</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink className="nav-link" to="/admin/addPost">Добавить статью</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}