import React, { useState } from 'react';
import './White.css';

export default function Key(props) {
    const [pressed, setPressed] = useState(false);
    const noteAudioId = 'note' + props.character;
    let myAudio = document.getElementById(noteAudioId);//Added props.character so that each initialized key has a separate ID
    document.addEventListener('keydown', (e) => {   //Plays audio and sets key color while pressed down
        if (e.code == props.character) {
            setPressed(true);
            if (myAudio) {
                myAudio.play();
            }
        }
    });
    document.addEventListener('keyup', (e) => {     //Stops audio and resets time to beginning. Resets key color as well
        if (e.code == props.character) {
            setPressed(false);
            if (myAudio) {
                myAudio.pause();
                myAudio.currentTime = 0;
            }
        }
    });

    //https://sndup.net/6jx7/E.wav
    //https://sndup.net/9tqm/C4.mp3
    //ew fix this, only change is css
    if (pressed) {
        if (props.type == "black") {
            return (
                <div className={props.type + '-key-pressed'} style={{left:props.position}}>
                    <audio id={noteAudioId} src={props.audio}/>
                </div>
            );
        }
        else {
            return (
                <div className={props.type + '-key-pressed'}>
                    <audio id={noteAudioId} src={props.audio}/>
                </div>
            );
        }
    }
    else {
        if (props.type == "black") {
            return (
                <div className={props.type + '-key-unpressed'} style={{left:props.position}}>
                    <audio id={noteAudioId} src={props.audio}/>
                </div>
            );
        }
        else {
            return (
                <div className={props.type + '-key-unpressed'}>
                    <audio id={noteAudioId} src={props.audio}/>
                </div>
            );
        }
    }

}