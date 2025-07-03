import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

export default class Redirect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0,
    }
  }

  componentDidMount() {
    window.open('https://youtogift.com/', '_self')
  }

  render() {
    return <div></div>
  }
}
