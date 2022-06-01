import SudokuPart from './sudokuTableLego/SudokuPart';
import '../styles/Sudoku.css'
import { Sudoku } from '../classes/Sudoku';
import { Utils } from '../classes/Utils';

function SudokuTable() {

    if(localStorage.getItem('sudokuTable') === "" || !localStorage.getItem('sudokuTable')){
        const defaultSudoku = Sudoku.createDefaultMtx();
        let toSave = Utils.standardifyStringSession(defaultSudoku)
        localStorage.setItem('sudokuTable', toSave)
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