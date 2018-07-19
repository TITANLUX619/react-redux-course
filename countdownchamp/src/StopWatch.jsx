import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import './App.css';


class StopWatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countdownH: 10,
            countdownM: 0,
            countdownS: 0,
            newCountdownH: 0,
            newCountdownM: 0,
            newCountdownS: 0,
            cont: 1,
            hours2: 0,
            minutes2: 0,
            seconds2: 0,
        }
    }

    componentWillMount() { 
        this.getTimeUntil(this.state.countdownH, this.state.countdownM, this.state.countdownS);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.countdownH, this.state.countdownM, this.state.countdownS), 1000)
    }

    leading0(num) {
        return num < 10 ? '0' + num: num;
    }

    
    startCountdown() {
        this.setState({countdownH: this.state.newCountdownH, countdownM: this.state.newCountdownM, countdownS: this.state.newCountdownS, cont: 1});
    }

    getTimeUntil(countdownH, countdownM, countdownS) {

        let seconds = parseInt(countdownS);
        let minutes = parseInt(countdownM)*60;
        let hours = parseInt(countdownH)*3600;
 
        let target = ((seconds + minutes + hours)-this.state.cont)*1000;
        console.log(target);

        if (target === 0) {

            this.setState({hours2: 0, minutes2: 0, seconds2: 0, cont: 1});   

        } else {

            seconds = Math.floor((target/1000)%60);
            minutes = Math.floor((target/(1000*60))%60);
            hours = Math.floor(target/(1000*60*60)%24);
        
            this.setState({hours2: hours, minutes2: minutes, seconds2: seconds, cont: this.state.cont+1});    

        }

    }

    render() {

        return (
            <div>
                <Form inline>
                    <FormControl 
                        className='Countdown-input'
                        placeholder= '0'
                        onChange={event => this.setState({newCountdownH: event.target.value})}
                    />
                    :
                    <FormControl 
                        className='Countdown-input'
                        placeholder= '0'
                        onChange={event => this.setState({newCountdownM: event.target.value})}
                    />
                    :
                    <FormControl 
                        className='Countdown-input'
                        placeholder= '0'
                        onChange={event => this.setState({newCountdownS: event.target.value})}
                    />
                    <Button onClick={() => this.startCountdown()}>
                        Start
                    </Button>
                </Form>
                <div className='Clock-hours'>{this.leading0(this.state.hours2)} hours</div>
                <div className='Clock-minutes'>{this.leading0(this.state.minutes2)} minutes</div>          
                <div className='Clock-seconds'>{this.leading0(this.state.seconds2)} seconds</div> 
            </div>
            )    
        }

}

export default StopWatch;