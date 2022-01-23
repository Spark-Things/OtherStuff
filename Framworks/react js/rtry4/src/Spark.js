import React, { Component } from 'react'
import Army from './Witharm'
class Spark extends Component {
  render() {
    return (
      <div>
        <h3 onMouseOver={this.props.hochandlegunshots}>
          Spark {this.props.hocgunname}<br/>
          gunshots: {this.props.hocgunshots} <br/>
          helth:{this.props.hochelth}
        </h3>
      </div>
    )
  }
}
export default Army(Spark,5,20);
