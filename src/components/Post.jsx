import React from "react";
import {host} from "../config";

export class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            author: "",
            date_added: ""
        }
    }

    componentDidMount() {
        const formData = new FormData;
        formData.append("id", this.props.match.params.id);
        console.log()
        fetch(host+"/getIdArticle", {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(result => {
                this.props.changeH1(result.title);
                this.setState( {
                    text: result.text
                })
            })
    }

    render() {
        return(
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <p dangerouslySetInnerHTML={{__html: this.state.text}}/> {/* Так можно делать только если довеляешь источнику.*/}
                            {/*<p>{this.state.text}</p>*/}

                            <h2 className="section-heading">The Final Frontier</h2>

                            <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and
                                literally, it is a task to occupy the generations. And no matter how much progress one
                                makes, there is always the thrill of just beginning.</p>

                            <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and
                                literally, it is a task to occupy the generations. And no matter how much progress one
                                makes, there is always the thrill of just beginning.</p>

                            <blockquote className="blockquote">The dreams of yesterday are the hopes of today and the
                                reality of tomorrow. Science has not yet mastered prophecy. We predict too much for the
                                next year and yet far too little for the next ten.
                            </blockquote>

                            <p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of
                                men. It is a historical process which mankind is carrying out in accordance with the
                                natural laws of human development.</p>

                            <p>Placeholder text by
                                <a href="http://spaceipsum.com/">Space Ipsum</a>. Photographs by
                                <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>.</p>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}