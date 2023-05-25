import React, {useState, useEffect, useRef} from 'react';
import './Pomodoro.css';
import Button from '@mui/material/Button';

//Icons Import
import SettingsIcon from '@mui/icons-material/Settings';

function Pomodoro(){
    const [timer, setTimer] = useState(900);
    const [isRunning, setIsRunning] = useState(false);
    const [startBtnTxt, setStartBtnTxt] = useState("Start");
    const [mode, setMode] = useState('pomodoro');
    const [isSettingsVisible, setIsSettingsVisible] = useState(false)

    const modeColors = {
        pomodoro: '#DB6852',
        shortBreak: '#407BAF',
        longBreak: '#6D9FAC',


    };

    const lmodeColors = {
        pomodoro: '#DB7C69',
        shortBreak: '#5C92C1',
        longBreak: '#87B1BC',
    };


    const timerDuration = {
        pomodoro: 900,
        shortBreak: 300,
        longBreak: 900,
    };

    const settingsRef = useRef(null)

    //Function to Start the Countdown
    const startCountdown = () => {
        setIsRunning(!isRunning)
        if(startBtnTxt == "Start"){
            setStartBtnTxt("Stop")
        } else {
            setStartBtnTxt("Start")
        }

    }

    const openSettings = () =>{
        setIsSettingsVisible(true)
    }

    const closeSettings = () => {
        setIsSettingsVisible(false)

    }

    const handleClickOutside = event =>{
        if (settingsRef.current && !settingsRef.current.contains(event.target) && event.target.id !== 'settings_button'){
            closeSettings();
        }
    }

    useEffect(() =>{
        document.addEventListener('click', handleClickOutside);
        return () =>{
            document.removeEventListener('click', handleClickOutside)
        };
    }, [])

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

    const changeMode = (selectedMode) => {
        setMode(selectedMode)
        setIsRunning(false)
        setStartBtnTxt("Start")
        setTimer(timerDuration[selectedMode])
    };

    const containerStyle = {
        backgroundColor: modeColors[mode], // Set background color based on the selected mode
    };

    const midConStyle = {
        backgroundColor: lmodeColors[mode]
    }


    return(
        <>
        <div id = "Container" style = {containerStyle}>
            {isSettingsVisible && (
                <div className = "settings" ref={settingsRef}>
                    <h1 id = "settings-title">Setting</h1>
                    <div class="settings-label">
                        <span>Pomodoro Duration: </span>
                        <input class = "time_input"
                            type="number"
                            min="1"
                            max="120"
                            className="settings-input"
                            //value={pomodoroDuration}
                            //onChange={(e) => setPomodoroDuration(parseInt(e.target.value))}
                        />
                        <span> minutes</span>
                    </div>



                </div>
            )}
            <h2>Home</h2>
            <div id = "setting_bar">
                <p>Welcome to the Pomodoro!</p>
                {!isSettingsVisible && (
                    <Button id="settings_button" onClick = {()=>openSettings()}><SettingsIcon/>Settings</Button>
                )}

            </div>
            <div id = "middle_container" style = {midConStyle}>
                <div className = "button_bar">
                    <Button class = "btn1" onClick = {() => changeMode('pomodoro')}>Pomodoro</Button>
                    <Button class = "btn1" onClick = {() => changeMode('shortBreak')}>Short Break</Button>
                    <Button class = "btn1" onClick = {() => changeMode('longBreak')}>Long Break</Button>
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