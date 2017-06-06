import React, { Component } from 'react';


export default class Home extends Component {
  render() {
    return (
      <div className="main-content home">
        <h2>Home</h2>
        <p>This is home.</p>
        <hr />
        <h3>Home Section 2</h3>
        <h4>Some shit h4</h4>
        <p>Some paragraph text</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Topic" />
          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}
