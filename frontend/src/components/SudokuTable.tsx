import React from 'react'
import SudokuPart from './sudokuTableLego/SudokuPart';
import '../styles/Sudoku.css'
import { Sudoku } from '../classes/Sudoku';
import Cookies from 'universal-cookie';

function SudokuTable() {

    const cookie = new Cookies();

    if(cookie.get('sudokuTable') === "" || !cookie.get('sudokuTable')){
        const defaultSudoku = new Sudoku();
        cookie.set('sudokuTable', defaultSudoku.getMtx(), {path: '/'})
    }

    return (
        <table id='sudokuTable'>
            <SudokuPart x={0} y={0}/>
            <SudokuPart x={3} y={0}/>
            <SudokuPart x={6} y={0}/>
        </table>
    )
}

export default SudokuTable