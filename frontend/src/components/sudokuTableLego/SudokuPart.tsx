import React from 'react'
import SudokuFields from './SudokuFields'
import { SudokuProps } from '../../classes/SudokuInputInterface'

function SudokuPart({x, y}:SudokuProps) {
  return (
    <tbody>
        <SudokuFields x={x} y={y}/>
        <SudokuFields x={x} y={y+3}/>
        <SudokuFields x={x} y={y+6}/>
    </tbody>
  )
}

export default SudokuPart