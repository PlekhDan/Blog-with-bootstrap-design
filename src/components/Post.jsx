import React from "react";
import {host} from "../config";
import {Link} from "react-router-dom";


export class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            author: "",
            date_added: "",
            category: ""
        }
    }

    componentDidMount() {
        const formData = new FormData;
        formData.append("id", this.props.match.params.id); //this.props.match.params.id
        console.log(this.props.match.params.id);
        fetch(host+"/getIdArticle", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                this.props.changeH1(result.title);
                const parser = new DOMParser(); // Из html вытаскиваем текст.
                const html = parser.parseFromString(result.text, "text/html");
                const date = new Date(result.date_added);
                this.setState( {
                    id: result.id,
                    text: html.body.innerText,
                    author: result.author,
                    date_added: date.toLocaleDateString(),
                    category: result.category
                })
            })
    }

    render() {
        return(
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {/*<p dangerouslySetInnerHTML={{__html: this.state.text}}/> /!* Так можно делать только если довеляешь источнику.*!/*/}
                            <blockquote className="blockquote">Категория: &nbsp;
                                <Link to="#">{this.state.category}</Link>
                            </blockquote>
                            <p>{this.state.text}</p>
                            <blockquote className="blockquote">Опубликовал(а) &nbsp;
                                <Link to="#">{this.state.author}</Link> &nbsp;
                                {this.state.date_added}
                            </blockquote>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}