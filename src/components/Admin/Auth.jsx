import React from "react";

export class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        fetch("http://p9152834.beget.tech/hendlerAuth", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p>Авторизуйтесь и создайте свою неповторимую статью!</p>
                        <form onSubmit={this.handleSubmit} name="sentMessage" id="contactForm" noValidate>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>E-mail</label>
                                    <input
                                        value={this.state.email}
                                        onChange={this.handleInput}
                                        name = "email" type="email"
                                        className="form-control"
                                        placeholder="E-mail"
                                        required data-validation-required-message="Please enter your email address."/>
                                    <p className="help-block text-danger"/>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Пароль</label>
                                    <input
                                        value={this.state.password}
                                        onChange={this.handleInput}
                                        name="password" type="password"
                                        className="form-control"
                                        placeholder="Пароль"
                                        required data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"/>
                                </div>
                            </div>
                            <br/>
                            <div id="success"/>
                            <button type="submit" className="btn btn-primary" id="sendMessageButton">Авторизоваться
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}