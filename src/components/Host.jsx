import React from 'react';
import '../styles/Host.scss';

const Host = ({ host }) => {
    return (
        <div className="host">
            <span className="host__name">{host.name}</span>
            <div className="host__picture" style={{ backgroundImage: `url(${host.picture})` }}></div>
        </div>
    )
}

export default Host;