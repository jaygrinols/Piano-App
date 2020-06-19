import React from 'react';
import Key from './piano_keys/Key';
import './Piano.css';
import './piano_keys/White.css';

export default function Piano(props) {
    return (
        <div className='piano'>
            <Key character="KeyA" audio='https://sndup.net/9tqm/C4.mp3' type='white'/>
            <Key character="KeyS" audio='https://sndup.net/4hhm/D4.mp3' type='white'/>
            <Key character="KeyD" audio='https://sndup.net/5ycf/E4.mp3' type='white'/>
            <Key character="KeyF" audio='https://sndup.net/2xdz/F4.mp3' type='white'/>
            <Key character="KeyG" audio='https://sndup.net/2m9k/G4.mp3' type='white'/>
            <Key character="KeyH" audio='https://sndup.net/98g8/A4.mp3' type='white'/>
            <Key character="KeyJ" audio='https://sndup.net/6gq9/B4.mp3' type='white'/>
            <Key character="KeyW" audio='https://sndup.net/4pnb/Cs4.mp3' type='black' position="9.3%"/>
            <Key character="KeyE" audio='https://sndup.net/4s7k/Ds4.mp3' type='black' position="25%"/>
            <Key character="KeyT" audio='https://sndup.net/9tkc/Fs4.mp3' type='black' position="52%"/>
            <Key character="KeyY" audio='https://sndup.net/9nhm/Gs4.mp3' type='black' position="67.35%"/>
            <Key character="KeyU" audio='https://sndup.net/437d/As4.mp3' type='black' position="83%"/>
        </div>
    )
}
/*
<div style={{width:'28px', height:'120px', backgroundColor:'black', position:'absolute', top:'0%', left:'9.3%', 'z-index':10}}/>
<div style={{width:'28px', height:'120px', backgroundColor:'black', position:'absolute', top:'0%', left:'26%', 'z-index':10}}/>
*/
