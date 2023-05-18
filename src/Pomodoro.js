import React, {useState, useEffect} from 'react';
import './Pomodoro.css';
import Button from '@mui/material/Button';


function Pomodoro(){
    const [timer, setTimer] = useState(900);
    const [isRunning, setIsRunning] = useState(false);
    const [startBtnTxt, setStartBtnTxt] = useState("Start")

    //Function to Start the Countdown
    const startCountdown = () => {
        setIsRunning(!isRunning)
        if(startBtnTxt == "Start"){
            setStartBtnTxt("Stop")
        } else {
            setStartBtnTxt("Start")
        }

    }



    useEffect(() => {
        let countdownInterval;

        if(isRunning){
            countdownInterval = setInterval(()=>{
                setTimer((prevTimer) => prevTimer -1);
            }, 1000);
        }
        return ()=>{
           clearInterval(countdownInterval)
        };
    }, [isRunning])

    const formatTime = (time) => {
        const minutes = Math.floor(time/60);
        const seconds = time % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    return(
        <>
        <div id = "Container">
            <h2>Home</h2>
            <p>Welcome to the Pomodoro!</p>

            <div id = "middle_container">
                <div class = "button_bar">
                    <Button class = "btn1">Pomodoro</Button>
                    <Button class = "btn1">Short Break</Button>
                    <Button class = "btn1">Long Break</Button>
                </div>
                <div>
                    <h1 id ="timer">{formatTime(timer)}</h1>
                </div>
                <Button class = "start_btn" onClick = {startCountdown}>{startBtnTxt}</Button>

            </div>

        </div>


        </>
    );
}

export default Pomodoro;