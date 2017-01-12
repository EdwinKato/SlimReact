import * as React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";

import { DOM } from "react";
import { Brand } from "./Brand";
import { Introduction } from "./Introduction";
import { Content } from "./Content";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface AppProps {
    name: string | number;    
}

interface HeaderProps {
    name?: string | number;
}


class App extends React.Component<AppProps, {}> {
    render() {
        let brand = <a href='#'>SlimReact</a>;
        return (
            <div>
                <Navbar fixedTop inverse>
                    <form className='navbar-form' action="">
                        <input type='text' placeholder='Email' />{' '}
                        <input type='text' placeholder='Password' />{' '}
                        <Button bsStyle='success' type='submit'>Sign in</Button>
                    </form>
                </Navbar>     

                <div>
                    <Header />
                    <Introduction />
                    <Content />
                    <Content />
                    <Content />
                    <Footer />
                </div>



<div className="nav-main">
  <div className="wrap">
    <a className="nav-home" href="/react/">
      <img className="nav-logo" src="/react/img/logo.svg" width="36" height="36"></img>
      React
    </a>
    <div className="nav-lists">
      <ul className="nav-site nav-site-internal">
        <li><a href="/react/docs/hello-world.html" className="active">Docs</a></li>
        <li><a href="/react/tutorial/tutorial.html">Tutorial</a></li>
        <li><a href="/react/community/support.html">Community</a></li>
        <li><a href="/react/blog/">Blog</a></li>
        <li className="nav-site-search">

        </li>
      </ul>
      <ul className="nav-site nav-site-external">
        <li><a href="https://github.com/facebook/react">GitHub</a></li>
        <li><a href="https://github.com/facebook/react/releases">v15.4.2</a></li>
      </ul>
    </div>
  </div>
</div>




            </div>

        );
    }
}
/*

class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}
*/


var CreateRows = React.createClass({
    addRows: function () {
        return (
            <tr>
                <td>Morgan</td>
                <td>test@gmail.com</td>
            </tr>

        )
    },

    render: function () {
        return (
            <tbody>
                {this.addRows()}
            </tbody>
        )
    }
});

export default App;