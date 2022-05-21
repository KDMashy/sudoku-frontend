import React, { useState } from 'react'
import { Utils } from '../classes/Utils';
import '../styles/Main.css';

function Subscribe() {

    const [message, setMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const util = new Utils();

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

                    <p style={{
                        color: 'red', 
                        fontSize: '125%', 
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>{message}</p>

                    <button onClick={async (e) => {
                        e.preventDefault();
                        var check:boolean = util.checkEmail(email);
                        if(check){
                            var sent = await util.sendSubscribe(email);
                            if(sent){
                                alert('Sikeres Feliratkozás feladat elküldésre');
                            } else {
                                alert('Hiba történt a küldés során');
                            }
                        } else {
                            setMessage("Hibás email cím formátum!");
                        }
                    }}>Elküldés</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe