import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super();
        this.state={
            counter:0
        }
    }
    increment=()=>{
        this.setState({counter:this.state.counter+1})
    }
  render() {
    return (
      <div>
          {this.props.render(this.state.counter, this.increment)}
      </div>
    )
  }
}

export default Counter