import React from "react";
import {host} from "../config";

export class Cabinet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: ""
        }
    }

    componentDidMount() {
        fetch(host+"/php/getUser.php", {
            credentials: "include" //Для сохранения cookie
        })
            .then(response => response.json())
            .then(result => {
                if(result.result !== "error") {
                    this.setState({
                        name: result.name,
                        email: result.email
                    })
                }
            })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <blockquote className="blockquote text-center mb-5">
                            Доброго дня и хорошего настроения!
                        </blockquote>
                        <div>
                            <div className="row">
                                <p className="col-2">Имя:</p>
                                <p className="col">{this.state.name}</p>
                            </div>
                            <div className="row">
                                <p className="col-2">E-mail:</p>
                                <p className="col">{this.state.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}