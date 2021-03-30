import React,{Component} from "react";
import "./Joke.css";

class Joke extends Component {
  render() {
    let { vote, votes, text, id } = this.props;
    const upVote = () => vote(id, +1);
    const downVote = () => vote(id, -1);

    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={upVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={downVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          {votes}
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
  }
}

export default Joke;
