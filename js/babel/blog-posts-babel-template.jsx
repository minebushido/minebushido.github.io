'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
    }

    render() {
        return e("div", {
            className: "card"
        }, React.createElement("h5", {
            className: "card-header"
        }, "Welcome to MineBushido!"), React.createElement("div", {
            className: "card-body"
        }, React.createElement("p", {
            className: "subtitle-date"
        }, "Posted on: "), React.createElement("p", {
            className: "card-text"
        }, "First Post"), React.createElement("div", {
            className: "modal-btn-container"
        }, React.createElement("button", {
            type: "button",
            className: "btn btn-primary read-more-btn",
            "data-toggle": "modal",
            "data-target": "#exampleModal"
        }, "READ MORE")), React.createElement("div", {
            className: "modal fade",
            id: "exampleModal",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true"
        }, React.createElement("div", {
            className: "modal-dialog",
            role: "document"
        }, React.createElement("div", {
            className: "modal-content"
        }, React.createElement("div", {
            className: "modal-header"
        }, React.createElement("h5", {
            className: "modal-title",
            id: "exampleModalLabel"
        }, "First Post"), React.createElement("button", {
            type: "button",
            className: "close",
            "data-dismiss": "modal",
            "aria-label": "Close"
        }, React.createElement("span", {
            "aria-hidden": "true"
        }, "\xD7"))), React.createElement("div", {
            className: "modal-body"
        }, "..."), React.createElement("div", {
            className: "modal-footer"
        }, React.createElement("button", {
            type: "button",
            className: "btn btn-secondary",
            "data-dismiss": "modal"
        }, "Close")))))));
    }
}

const domContainer = document.querySelector('#blog-posts');
ReactDOM.render(e(LikeButton), domContainer);