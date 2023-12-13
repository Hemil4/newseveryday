import React, { Component } from 'react'
import search from "./Search.gif"

export class Spinner extends Component {
  render() {
    return (
      <img src={search} alt="loading..." />
    )
  }
}

export default Spinner