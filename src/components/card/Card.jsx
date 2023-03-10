import React from 'react';
import DefaultPicture from '../../assets/OIP.jpg';
import PropTypes from 'prop-types'

function Card({ label, title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={'OIP.jpg'} alt="freelance" height={80} width={80} />
            <span>{title}</span>
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
    picture: PropTypes.string,
}
 
export default Card