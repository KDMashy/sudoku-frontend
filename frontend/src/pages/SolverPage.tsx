import { useEffect, useState } from 'react';
import { createDefaultMtx, safe, solve } from '../classes/Sudoku';
import { standardifyStringSession, transferTable } from '../classes/Utils';
import SudokuTable from '../components/SudokuTable';
import '../styles/Main.css';

function SolverPage() {

    const [message, setMessage] = useState<string>('');

    const checkMtx = () => {
        const table = localStorage.getItem('userSudoku');
        const canSolve = localStorage.getItem('canSolve');
        let sudoku = createDefaultMtx();

        if(table && canSolve){
            sudoku = transferTable(table, sudoku);

            if(sudoku){
                for(var i = 0; i < 9; i++){

                    for(var j = 0; j < 9; j++){

                        var inputField = (document.getElementById(`${i}:${j}`) as HTMLInputElement);

                        if(inputField){
                            if(sudoku[i][j] > 0 || sudoku[i][j] < 0){
                                inputField.style.backgroundColor = 'rgb(111, 238, 132)';
                            }
                        }
                    }
                }
            }

            if(canSolve === "true"){
                setMessage('Nem lehet megoldani a Sudoku feladványt, hibás adatokat adott meg!');
            }
        }
    }

    const setMtx = () => {
        let mtx = createDefaultMtx();
        let canNotSolve: boolean = false;

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){

                let text = (document.getElementById(`${i}:${j}`) as HTMLInputElement).value;
                if(!text){
                    text = '0';
                }

                let num = parseInt(text);

                if(
                    (!safe(mtx, i, j, num) &&
                     num > 0) || num < 0 || num > 9){
                    
                    canNotSolve = true;
                }

                mtx[i][j] = num;
            }
        }

        if(canNotSolve){
            let toSave = standardifyStringSession(mtx);

            localStorage.setItem('userSudoku', toSave);
            localStorage.setItem('sudokuTable', toSave);
            localStorage.setItem('canSolve', 'true');
            return true;
        }

        //Save user given data
        if(localStorage.getItem("userSudoku") === "" ||
            !localStorage.getItem("userSudoku")){
                let toSave = standardifyStringSession(mtx);
                localStorage.setItem('userSudoku', toSave);
        }

        //Solve and save solved data
        solve(mtx, 0, 0);

        localStorage.setItem('canSolve', 'false');

        window.location.replace("http://localhost:3000/solver");
    }

    const delMtx = () => {
        localStorage.setItem('sudokuTable', "");
        localStorage.setItem('userSudoku', "");
        window.location.replace("http://localhost:3000/solver");
    }

    useEffect(() => {
        checkMtx();
    }, [])

    return (
        <div className='site'>
            <form className='solverPage'>
                <SudokuTable />
                <div className='solverButtons'>
                    <button 
                        className='solve' 
                        onClick={() => { setMtx() }}>Megoldás</button>

                    <button 
                        className='clear'
                        onClick={() => { delMtx() }}>Törlés</button>
                    <div className="defaultContainer">

                        <p style={{
                            color: 'red', 
                            fontSize: '125%', 
                            fontWeight: 'bold',
                            textAlign: 'center',
                            padding: '0'
                        }}>{ message }</p>

                        <p>
                            A megoldás gombra kattintva lehet megoldatni <br />
                            A törlés gombra kattintva lehet megoldani <br />
                            Csak egy lehetséges megoldást fog visszaadni a program <br />
                            A megoldásra kattintva megoldás után jelzi a beírt számokat
                        </p>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default SolverPage