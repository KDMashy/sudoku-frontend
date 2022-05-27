import { useState } from 'react'
import { checkEmail, sendSubscribe } from '../classes/Utils';
import '../styles/Main.css';

function Subscribe() {

    const [message, setMessage] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const sendData = async (evt: any) => {
        evt.preventDefault();

        var check:boolean = checkEmail(email);
        var difficulty = (document.getElementById('difficulty') as HTMLInputElement).value;
        if(check){
            var sent = await sendSubscribe(email, difficulty);
            if(sent){
                setMessage('Sikeres feliratkozás feladat elküldésre');
            } else {
                setMessage('Hiba történt a küldés során');
            }
        } else {
            setMessage("Hibás email cím formátum!");
        }
    }

    const checkUpdate = (evt: any) => {
        let check:boolean = checkEmail(evt.target.value);
        if (!check) {
            setMessage("Hibás email cím formátum!");
        } else {
            setMessage("");
            setEmail(evt.target.value);
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
                            onChange={(evt) => { checkUpdate(evt) }}
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
                        }}>{ message }</p>

                        <button onClick={async (evt) => { sendData(evt) }}>Elküldés</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe