import React from "react";
import {Link} from "react-router-dom";
import {Post} from "./Post";

function PreviewPost(props) {
    return (
        <div className="post-preview">
            <Link to={`/post/${props.id}`}>
                <h2 className="post-title">
                    {props.title}
                </h2>
                <h3 className="post-subtitle">
                    {props.text}
                </h3>
            </Link>
            <p className="post-meta">Опубликовал(а) &nbsp;
                <Link to="#">{props.author}</Link> &nbsp;
                {props.date_added}</p>
        </div>
    );
}

export class PostsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.props.changeH1("Главная страница");
        // fetch("http://localhost/php/getArticles.php") Запрос на локальный сервер на своем компе.
        fetch("http://p9152834.beget.tech/php/getArticles.php")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    posts: result.map(post => {
                        const parser = new DOMParser(); // Из html вытаскиваем текст.
                        const html = parser.parseFromString(post.text, "text/html");
                        return (
                            <PreviewPost
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                text={html.body.innerText.slice(0, 50) + " ..."}
                                author={post.author}
                                date_added={post.date_added}
                            />)
                    })
                })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        {this.state.posts}
                    </div>
                </div>
            </div>
        );
    }
}