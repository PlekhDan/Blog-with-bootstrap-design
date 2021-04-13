import React from "react";

export class Contacts extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.changeH1("Контакты");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <blockquote className="blockquote text-center mb-5">
                            Свяжитесь с нами, для проработки Вашего вопроса!
                        </blockquote>
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Имя</label>
                                    <input type="text" className="form-control" placeholder="Имя" id="name" required
                                           data-validation-required-message="Please enter your name."/>
                                        <p className="help-block text-danger"/>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>E-mail</label>
                                    <input type="email" className="form-control" placeholder="E-mail"
                                           required data-validation-required-message="Please enter your email address."/>
                                        <p className="help-block text-danger"/>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Phone Number</label>
                                    <input type="tel" className="form-control" placeholder="+7 (990) 800-35-35" id="phone"
                                           required data-validation-required-message="Please enter your phone number."/>
                                        <p className="help-block text-danger"/>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Ваше сообщение</label>
                                    <textarea rows="5" className="form-control" placeholder="Ваше сообщение" id="message"
                                              required
                                              data-validation-required-message="Please enter a message."/>
                                    <p className="help-block text-danger"/>
                                </div>
                            </div>
                            <br/>
                                <div id="success"/>
                                <button type="submit" className="btn btn-primary" id="sendMessageButton">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}