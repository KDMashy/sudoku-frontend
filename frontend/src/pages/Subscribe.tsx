import React, { useState } from 'react'
import { Utils } from '../classes/Utils';
import '../styles/Main.css';

function Subscribe() {

    const [message, setMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const util = new Utils();

    const sendData = async () => {
        var check:boolean = util.checkEmail(email);
        var difficulty = (document.getElementById('difficulty') as HTMLInputElement).value;
        if(check){
            var sent = await util.sendSubscribe(email, difficulty);
            if(sent){
                alert('Sikeres Feliratkozás feladat elküldésre');
            } else {
                alert('Hiba történt a küldés során');
            }
        } else {
            setMessage("Hibás email cím formátum!");
        }
    }

    return (
        <div className='site'>
            <div className='maincontent'>
                <div className='defaultContainer'>
                    <div className='subscribe'>
                        <h1>Feliratkozás feladat elküldésre</h1>
                        <input 
                            type='email'
                            placeholder='Email...'
                            onChange={(e) => {
                                var check:boolean = util.checkEmail(e.target.value);
                                if (!check) {
                                    setMessage("Hibás email cím formátum!");
                                } else {
                                    setMessage("");
                                    setEmail(e.target.value);
                                }
                                console.log(check)
                            }}
                        />

                        <select id='difficulty'>
                            <option value="easy">Könnyű</option>
                            <option value="medium">Haladó</option>
                            <option value="hard">Nehéz</option>
                        </select>

                        <p style={{
                            color: 'red', 
                            fontSize: '125%', 
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}>{message}</p>

                        <button onClick={async (e) => {
                            e.preventDefault();
                            sendData();
                        }}>Elküldés</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe