import React from 'react';
import Styles from './Timer.module.css'

const timer = (props) => {
    return(
        <div className = {Styles.Timer}>
           <p> {props.min} mins {props.sec} secs</p>
        </div>
    );
}

export default timer;