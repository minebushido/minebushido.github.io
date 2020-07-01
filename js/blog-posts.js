'use strict';

function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    }
    return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

var e = React.createElement;

var LikeButton =
    /*#__PURE__*/
    function (_React$Component) {
        _inherits(LikeButton, _React$Component);

        function LikeButton(props) {
            var _this;

            _classCallCheck(this, LikeButton);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(LikeButton).call(this, props));
            _this.state = {
                blogPosts: [{
                    id: 2,
                    title: 'second post',
                    date: '29/06/2020',
                    content: 'test'
                }, {
                    id: 1,
                    title: 'Welcome to MineBushido!',
                    date: '29/06/2020',
                    content: 'test'
                }]
            };
            return _this;
        }

        _createClass(LikeButton, [{
            key: "render",
            value: function render() {
                var testing = function (title, date, content) {
                    return (e("div", {
                        className: "card"
                    }, React.createElement("h5", {
                        className: "card-header"
                    }, title), React.createElement("div", {
                        className: "card-body"
                    }, React.createElement("p", {
                        className: "subtitle-date"
                    }, "Posted on: ", date), React.createElement("p", {
                        className: "card-text"
                    }, content), React.createElement("div", {
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
                    }, "Close"))))))))
                }

                var output = [];
                for (var i = 0; i < this.state.blogPosts.length; i++) {
                    output.push(testing(this.state.blogPosts[i].title, this.state.blogPosts[i].date, this.state.blogPosts[i].content));
                }

                return output
            }
        }]);

        return LikeButton;
    }(React.Component);

var domContainer = document.querySelector('#blog-posts');
ReactDOM.render(e(LikeButton), domContainer);