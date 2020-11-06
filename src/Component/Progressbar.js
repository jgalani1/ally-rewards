import React from 'react';

const Progressbar = (props) => {
    const {bgcolor, completed} = props;

    const containerStyles = {
        height: 20,
        width: '50%',
        backgroundColor: '#e0e0de',
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlight: 'right'
    }

    const labelStyles = {
        padding: 2,
        color: 'black',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}> {`${completed}%`} </span>
            </div>
        </div>
    )

};


export default Progressbar;