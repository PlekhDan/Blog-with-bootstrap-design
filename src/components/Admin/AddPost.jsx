import React from "react";
import SunEditor from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css';

export class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.handlerInput = this.handlerInput.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.sunEditorRef = React.createRef();
        this.state = {
            title: "",
            text: "",
            author: ""
        }
    }

    componentDidMount() {
        // this.props.changeH1("Создание статьи");
        console.log(this.sunEditorRef);
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
        const formData = new FormData;
        formData.append("title", this.state.title);
        formData.append("text", this.state.text);
        formData.append("author", this.state.author);
        fetch("http://p9152834.beget.tech/addArticle", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <blockquote className="blockquote text-center my-5">
                            Создайте свою неповторимую статью и поделитесь ей с миром!
                        </blockquote>
                        <form onSubmit={this.handlerSubmit} name="sentMessage" id="contactForm" noValidate>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Заголовок</label>
                                    <input value={this.state.title}
                                           onChange={this.handlerInput}
                                           name="title" type="text"
                                           className="form-control"
                                           placeholder="Заголовок"
                                           required data-validation-required-message="Please enter your name."/>
                                    <p className="help-block text-danger"/>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label>Текст статьи</label>
                                    {/*<textarea value={this.state.text}*/}
                                    {/*          onChange={this.handlerInput}*/}
                                    {/*          name="text" rows="5"*/}
                                    {/*          className="form-control"*/}
                                    {/*          placeholder="Текст статьи"*/}
                                    {/*          required data-validation-required-message="Please enter a message."/>*/}
                                              <SunEditor
                                                  ref={this.sunEditorRef} // Используем ref вместо id, условно это такое-же обращение, хотя и по id не приветствуется обращаться к элементам.
                                                  name="text"
                                                  onChange={(value) => {
                                                      const name = this.sunEditorRef.current.props.name;
                                                      this.setState({
                                                          [name]: value
                                                      })
                                                  }}
                                                  height="400px"
                                                  placeholder="Текст статьи"
                                              />
                                    <p className="help-block text-danger"/>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Автор</label>
                                    <input value={this.state.author}
                                           onChange={this.handlerInput}
                                           name="author" type="text"
                                           className="form-control"
                                           placeholder="Автор"
                                           required data-validation-required-message="Please enter your phone number."/>
                                    <p className="help-block text-danger"/>
                                </div>
                            </div>
                            <br/>
                            <div id="success"/>
                            <button type="submit" className="btn btn-primary" id="sendMessageButton">Опубликовать</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}