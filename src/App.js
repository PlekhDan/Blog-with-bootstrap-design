import "./App.css";
import React from "react";
import {Menu} from "./components/Menu";
import {PageHeader} from "./components/PageHeader";
import {PostsList} from "./components/PostsList";
import {Footer} from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {About} from "./components/About";
import {Contacts} from "./components/Contacts";
import {Post} from "./components/Post";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.changeH1 = this.changeH1.bind(this);
        this.state = {
            h1: ""
        }
    }

    changeH1(title) {
        this.setState({
            h1: title
        })
}

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Menu/>
                    <PageHeader h1={this.state.h1}/>
                    <Route exact path="/" render={() => <PostsList changeH1={this.changeH1}/>}/>
                    <Route path="/about" render={() => <About changeH1={this.changeH1}/>}/>
                    <Route path="/contacts" render={() => <Contacts changeH1={this.changeH1}/>}/>
                    <Route path="/post/:id" render={(props) => <Post changeH1={this.changeH1} {...props}/>}/>
                    <hr/>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;