import * as React from "react";
// import { startOfDay } from 'date-fns';
import * as startOfDay from "date-fns";

interface Car {
    readonly engine: string;
    readonly model: string;
}

interface AppProps {
    name: string | number;    
}

interface HeaderProps {
    name?: string | number;
}


class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <div>
                <Header name = "SlimReact" />                
            </div>

        );
    }
}

class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}


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