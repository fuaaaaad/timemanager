import React from 'react';
import Timer from './Timer/Timer';
import Styles from './Build.module.css';

const build = (props) => {
    return(
        <div className = {Styles.Build}>
            <div className = {Styles.Box}>
            <button  
             className = {Styles.ButtonSub}
             onClick = {props.Decrease} >-</button>
            <Timer 
             min = {props.Minute}
             sec = {props.Second}
             />
            <button
             className = {Styles.ButtonAdd}
             onClick = {props.Increase}>+</button>
            </div>             
             <br />

            <button
             className = {Styles.Reset}
             onClick = {props.Reset}>Reset</button> 
        </div>
    );

}


export default build;