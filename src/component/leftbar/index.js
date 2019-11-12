import React, { Component } from 'react';
import bell from '../../aset/icon/lonceng.svg';
import Message from './Message';
import Data from "../../data/data.json"

class Status extends Component {

    render() {
        return (
            <div className={`status ${this.props.style}`} >
                <div className="tanggal">
                    <div className="notifikasi">
                        <img src={bell} alt="lonceng"/>
                        <span><p>3</p></span>
                    </div>
                    <div className="cuaca">
                        <h3>Forecast</h3>
                        <p>14 February</p>
                    </div>
                </div>
                {
                    Data.pesanUser.map((user,index)=>
                    <Message key={index} data={user} />
                    )
                }
            </div>
        );
    }
}


export default Status;