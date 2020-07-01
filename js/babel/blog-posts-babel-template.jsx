'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }
        return e(
            <div className="card">
                <h5 className="card-header">Welcome to MineBushido!</h5>
                <div className="card-body">
                    <p className="subtitle-date">Posted on: </p>
                    <p className="card-text">First Post</p>
                    <div className="modal-btn-container">
                        <button type="button" className="btn btn-primary read-more-btn" data-toggle="modal"
                            data-target="#exampleModal">
                            READ MORE
                                    </button>
                    </div>
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">First Post</h5>
                                    <button type="button" className="close" data-dismiss="modal"
                                        aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    ...
                                            </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary"
                                        data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector('#blog-posts');
ReactDOM.render(e(LikeButton), domContainer);