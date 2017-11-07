import React from 'react';
import ReactDOM from 'react-dom';
class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            comment: "",
            commentList: [
                { username: 'Jerry', comment: 'Hello' },
                { username: 'Tomy', comment: 'World' },
                { username: 'Lucy', comment: 'Good' }
            ]
        }
    }
    addComment = () => {
        this.setState({
            commentList: this.state.commentList.concat({ username: this.state.username, comment: this.state.comment }),
            username: "",
            comment: ""
        })
    }
    changeContent = (infor) => {
        return (e) => {
            this.setState({
                [infor]: e.target.value.trim()
            });
        }
    }
    alreadySubmit = function () {
        return this.state.username && this.state.comment;
    }
    render = function () {
        return (
            <div>
                <div>
                    <label htmlFor="username">username:</label>
                    <input
                        id="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.changeContent("username")} 
                        maxLength="10" />
                </div>
                <div>
                    <label htmlFor="comment">comment:</label>
                    <textarea
                        id="comment"
                        type="text"
                        value={this.state.comment}
                        onChange={this.changeContent("comment")}
                        maxLength="10"></textarea>
                </div>
                <div>
                    <button disabled={this.alreadySubmit() ? "" : "disabled"} onClick={this.addComment}>submit</button>
                </div>
                {
                    this.state.commentList.map((value) => {
                        return (
                            <div key={value.username}>
                                <span>{value.username}:</span>
                                <span>{value.comment}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
ReactDOM.render(
    <Comment />,
    document.getElementById('root')
)