import React, {Component} from 'react';
import Build from './Build/Build';
import Styles from './TimeManager.module.css';

class TimeManager extends Component {
    state ={
        Time: {
            second: 0,
            minute: 0
        }
    }

    updateIncreseTimeHandler = () => {
        let oldTime = {...this.state.Time};
        let minute = oldTime.minute;
        let second = oldTime.second;
        let updatedSecond = second;
        let updatedMinute = minute;
        if(second > 50){
            updatedMinute = minute + 1;
            updatedSecond = 0;  
        }
        else {
            updatedSecond = second + 5;
            
        }

        this.setState({
            Time: {
                second: updatedSecond,
                minute: updatedMinute
            }
        });
    }

    updateDecreseTimeHandler = () => {
        let oldTime = {...this.state.Time};
        let minute = oldTime.minute;
        let second = oldTime.second;
        let updatedSecond = second;
        let updatedMinute = minute;
        if(minute === 0 && second === 0){
            alert("Cannot be decremented");
            return ;
        }
        if(minute >= 1 && second === 0){
            updatedMinute = minute - 1;
            updatedSecond = 55;  
        }
        else {
            updatedSecond = second - 5;

        }

        this.setState({
            Time: {
                second: updatedSecond,
                minute: updatedMinute
            }
        });
    }

    resetHandler = () => {
        let oldTime = {...this.state.Time}
        oldTime.minute = 0;
        oldTime.second = 0;
        this.setState({
            Time: {
                second: oldTime.second,
                minute: oldTime.minute
               }
        })
    }

    
    render(){

     return (
        <div className={Styles.TimeManager}>
            <p><strong>Time Counter</strong></p>
            <Build
             Increase = {this.updateIncreseTimeHandler} 
             Decrease = {this.updateDecreseTimeHandler}
             Reset = {this.resetHandler}
             Minute = {this.state.Time.minute}
             Second = {this.state.Time.second}
            />           
        </div>
        );
    }
}

export default TimeManager;
