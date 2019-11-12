import React, { Component } from 'react'
import "../style/Navbar.scss";

export default class Navbar extends Component {

    
    render() {
        return (
            <div className="navbar">
                <div className="search">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input placeholder="Search" />
                </div>
                <div className="user">
                    <button className="btn">
                        <i className="fa fa-paper-plane" aria-hidden="true"> Invite</i>
                    </button>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivuKfPqK-w1-eXntjE5MgV1VtoLLxZMtagarm5zVNoXBK3KpE&s" alt=""/>
                    {
                        this.props.style === "show-status" ? 
                        <i onClick={this.props.showLeftbar} className="toogle fas fa-bars"></i> :
                        <i onClick={this.props.showLeftbar} className="toogle fas fa-bars"></i>
                    }
                </div>
            </div>
        )
        
    }
}
