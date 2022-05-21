import React from 'react';
import SudokuTable from '../components/SudokuTable';
import '../styles/Main.css';

function SolverPage() {
    return (
        <div className='site'>
        <div className='solverPage'>
            <SudokuTable />
            <div className='solverButtons'>
                <button className='solve'>Megoldás</button>
                <button className='clear'>Törlés</button>
            </div>
        </div>
        </div>
    )
}

export default SolverPage