import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.PureComponent {
  render() {
    console.log(this.props.name, ' redered');

    return (
      <div className='player'>
    <span className='player-name'>
      <button className='remove-player'
              onClick={() => this.props.removePlayer(this.props.id)}>x</button>
    </span>
        <span className='player-name'>{this.props.name}</span>
        <Counter score={this.props.score} id={this.props.id} changeScore={this.props.changeScore}/>
      </div>
    );
  }
}