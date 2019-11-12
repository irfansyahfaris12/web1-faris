import React from 'react';
import Chart from './Chart';

export default function ListUser(props) {
    const { nama, email, jobs, invites, pending, grafik, warna, avatar } = props.user
    return (
        <div className="list-user">
            <div className="data-user">
            <img src={avatar} alt="" />
                <div className="nama">
                    <div>
                    <h4>{nama}</h4>
                    <p className="email">{email}</p>
                    </div>
                    <p className="jobs">{jobs}</p>
                </div>
            </div>
            <div className="aktifitas">
                <div className="invites-pending">
                    <div className="invites">
                        <h5>Invites</h5>
                        <h4>{invites}</h4>
                    </div>
                    <div className="pending">
                        <h5>Pending</h5>
                        <span>.</span> <h4>{pending}</h4>
                    </div>
                </div>
                <div className="chart">
                    <p>Overall activity</p>
                    <Chart warna={warna} grafik={grafik} />
                </div>
            </div>
        </div>
    );
};


