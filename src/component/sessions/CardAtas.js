import React from 'react'

export default function CardAtas(props) {
    const { title, color, date } = props.data
    return (
        <div className="card-atas">
            <span className="titik">...</span>
            <p>{title}</p>
            <p className="card-date">
                <span className={color}>{date}</span>
                This Mounth
            </p>
            
        </div>
    )
}
