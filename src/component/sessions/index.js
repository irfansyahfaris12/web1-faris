import React, { Component } from 'react';
import Export from "../sessions/Export"
import '../../style/Sessions.scss'
import CardAtas from './CardAtas';
import ListUser from './ListUser';
import Data from "../../data/data.json"
import PropsTypes from "prop-types"

export default class index extends Component {     

    render() {
        return (
            <div className="sessions">
                <Export hidden={this.props.hidden} style={this.props.export} />
                <div className="title-wrap">
                    <div className="title">
                    <h1>Sessions</h1>
                    <button className="btn" onClick={this.props.onExport} href="#">
                        <i className="fa fa-upload" aria-hidden="true"> Export</i>

                    </button>
                    </div>
                    <div className="card-table">
                        <button className={this.props.tampilan === 'card' ? 'btn' : 'btn-bts'} onClick={this.props.hadleCard}>
                            <i className="fa fa-id-card" aria-hidden="true"> <span className="i-btn">Card</span></i>
                        </button>
                        <button className={this.props.tampilan === 'table' ? 'btn' : 'btn-bts'} onClick={this.props.handleTable}>
                            <i className="fa fa-table" aria-hidden="true"> <span className="i-btn">Table</span></i>
                        </button>
                    </div>
                </div>
                <div className="wrap-card-atas">
                    <CardAtas data={{color:'biru', title:'Number of sessions', date: '23'}} />
                    <CardAtas data={{color:'orange', title: "User who haven't answered", date: '06'}} />
                </div>
                <div className="wrap-date">
                    <p><span className="tanggal">14</span><span className="th">th</span> Thuesday</p>
                    <hr/>
                </div>
                <div className={this.props.tampilan}>
                    {
                        Data.dataUser.map((user, index) => 
                            <ListUser key={index} user={user} />
                        )
                    }
                </div>
            </div>
        )
    }

}

index.propTypes = {
    tampilan: PropsTypes.string,
    hidden: PropsTypes.func,
    onClick: PropsTypes.func,
    style: PropsTypes.string
};