var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            return _super.apply(this, arguments) || this;
        }
        App.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Header, { name: "SlimReact" })));
        };
        return App;
    }(React.Component));
    var Header = (function (_super) {
        __extends(Header, _super);
        function Header() {
            return _super.apply(this, arguments) || this;
        }
        Header.prototype.render = function () {
            return (React.createElement("div", null, this.props.name));
        };
        return Header;
    }(React.Component));
    var CreateRows = React.createClass({
        addRows: function () {
            return (React.createElement("tr", null,
                React.createElement("td", null, "Morgan"),
                React.createElement("td", null, "test@gmail.com")));
        },
        render: function () {
            return (React.createElement("tbody", null, this.addRows()));
        }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = App;
});
