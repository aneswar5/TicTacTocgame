import React from "react";
import GridRow from "../GridRow";
import Header from "../Header";
import Footer from "../Footer";
import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerTurn: "X",
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
    this.playerClick = this.playerClick.bind(this);
    // there we bind for below playerClick if codition this will get an error so we have to bind so we can avoid
  }

  playerClick = (i, j) => {
    if (this.state.boardState[i][j] === "") {
      const currBoardState = this.state.boardState;
      currBoardState[i][j] = this.state.playerTurn;
      this.setState({
        boardState: currBoardState,
        playerTurn: this.state.playerTurn === "X" ? "O" : "X",
      });
      // this.setState({ playerTurn: this.state.playerTurn === "X" ? "O" : "X" });
    }
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div id="board">
          {this.state.boardState.map((boardRow, rowIdx) => (
            <GridRow
              key={rowIdx}
              row={boardRow}
              rowIdx={rowIdx}
              playerClickCB={this.playerClick}
            />
          ))}
        </div>
        <Footer turn={this.state.playerTurn} />
      </div>
    );
  }
}
