import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { Sudoku } from '../classes/Sudoku';
import SudokuTable from '../components/SudokuTable';
import '../styles/Main.css';

function SolverPage() {

    var cookie = new Cookies();

    const checkMtx = () => {
        const feladat = cookie.get('userSudoku');
        if(feladat !== ""){
            for(var i = 0; i < 9; i++){
                for(var j = 0; j < 9; j++){
                    var inputField = (document.getElementById(`${i}:${j}`) as HTMLInputElement);
                    if(inputField){
                        if(feladat[i][j] > 0){
                            inputField.style.backgroundColor = 'rgb(111, 238, 132)';
                        }
                    }
                }
            }
        }
    }

    const setMtx = () => {
        var sudoku = new Sudoku();
        var mtx = sudoku.getMtx();

        for(var i = 0; i < 9; i++){
            for(var j = 0; j < 9; j++){
                var text = (document.getElementById(`${i}:${j}`) as HTMLInputElement).value;
                if(!text){
                    text = '0';
                }
                if(!sudoku.safe(mtx, i, j, parseInt(text)) && parseInt(text) > 0){
                    return alert('Nem megoldható a feladvány!')
                }
                mtx[i][j] = parseInt(text);
            }
        }

        cookie.set('userSudoku', mtx, {path: '/'});
        sudoku.solve(mtx, 0, 0)
        cookie.set('sudokuTable', sudoku.getMtx(), {path: '/'});
        window.location.replace("http://localhost:3000/solver");
    }

    const delMtx = () => {
        var cookie = new Cookies();
        cookie.set('sudokuTable', "", {path: '/'});
        cookie.set('userSudoku', "", {path: '/'})
    }

    useEffect(() => {
        checkMtx();
    }, [0])

    return (
        <div className='site'>
            <form className='solverPage'>
                <SudokuTable />
                <div className='solverButtons'>
                    <button 
                        className='solve' 
                        onClick={() => {
                            setMtx();
                        }}>Megoldás</button>
                    <button 
                        className='clear'
                        onClick={() => {
                            delMtx();
                            window.location.replace("http://localhost:3000/solver");
                        }}>Törlés</button>
                </div>
            </form>
        </div>
    )
}

export default SolverPage