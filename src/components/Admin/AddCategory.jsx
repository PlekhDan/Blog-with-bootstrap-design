import React from "react";

export class AddCategory extends React.Component {
    constructor(props) {
        super(props);
        this.handlerInput = this.handlerInput.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.state = {
            category: ""
        }
    }

    handlerInput(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handlerSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("category", this.state.category);
        fetch("http://p9152834.beget.tech/addCategory", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                if(result.result === "success") {
                    alert("Категория добавлена");
                }
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <blockquote className="blockquote text-center my-5">
                            Создайте новую категорию!
                        </blockquote>
                        <form onSubmit={this.handlerSubmit} name="sentMessage" id="contactForm" noValidate>
                            <div className="control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Новая категория</label>
                                    <input value={this.state.category}
                                           onChange={this.handlerInput}
                                           name="category" type="text"
                                           className="form-control"
                                           placeholder="Категория"
                                           required data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"/>
                                </div>
                            </div>
                            <br/>
                            <div id="success"/>
                            <button type="submit" className="btn btn-primary" id="sendMessageButton">Добавить</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}