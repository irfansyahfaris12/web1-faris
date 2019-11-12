import React, { Component } from 'react';
import Logo from "../aset/icon/logo.svg";
import Icon1 from "../aset/icon/Logo1.png";
import Icon2 from "../aset/icon/Logo2.png";
import Icon3 from "../aset/icon/Logo4.png";
import Icon4 from "../aset/icon/Logo5.png";
import Icon5 from "../aset/icon/Logo6.png";
import Icon6 from "../aset/icon/Logo7.png";
import "../style/Sidebar.scss";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <img className="img" src={Logo} alt="logo" />
                
                <div className="btn-sidebar">
                    <NavLink to="/home">
                        <img className="icon-side satu" src={Icon1} alt="icon1" />
                    </NavLink>
                    <NavLink to="/">
                        <img className="icon-side dua" src={Icon2} alt="icon2" />
                    </NavLink>
                    <NavLink to="/home">
                        <img className="icon-side tiga" src={Icon3} alt="icon3" />
                    </NavLink>
                    <NavLink to="/home">
                    <img className="icon-side empat" src={Icon4} alt="icon4" />
                    </NavLink>
                    <NavLink to="/home">
                    <img className="icon-side lima" src={Icon5} alt="icon5" />
                    </NavLink>
                    <NavLink to="/home" activeClassName="on">
                    <img className="icon-side enam" src={Icon6} alt="icon6" />
                    </NavLink>
                </div>
            </div>
        )
    }
}
