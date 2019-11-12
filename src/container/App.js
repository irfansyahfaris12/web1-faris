import React, { Component, Fragment } from 'react'
import Sidebar from "../component/Sidebar"
import Navbar from '../component/Navbar'
import "../style/App.scss"
import Sessions from "../component/sessions/index"
import LeftBar from "../component/leftbar/index"

export default class App extends Component {
  state = {
    status: 'awal-status',
    tampilan: 'card',
    export: "hidden",
  }

hadleCard = () => {
    this.setState({tampilan: "card"})
}
handleTable = () => {
    this.setState({tampilan: "table"})
}
onExport = () => {
    this.setState({export: "show"})
}
onHidden = () => {
    this.setState({export: "hidden"})
}

  showLeftbar = () => {
    this.setState(state => {
      switch (state.status) {
        case 'awal-status':
          return { status: 'show-status' }
        case 'show-status':
          return { status: 'hidden-status' }
        default:
          return { status: 'show-status' }
      }
    })
  }

  render() {
    const { status } = this.state
    return (
      <Fragment>
        <Sidebar />
        <Navbar style={status} showLeftbar={this.showLeftbar} />
        <LeftBar style={status} />
        <Sessions tampilan={this.state.tampilan} hidden={this.onHidden} export={this.state.export} onExport={this.onExport} hadleCard={this.hadleCard} handleTable={this.handleTable} />
      </Fragment>
    )
  }
}
