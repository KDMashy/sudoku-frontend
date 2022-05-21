import React from 'react'
import Cookies from 'universal-cookie'
import { SudokuProps } from '../../classes/SudokuInputInterface'

function SudokuInput({x, y}:SudokuProps) {

  const cookie = new Cookies();
  const table = cookie.get('sudokuTable');
  
  const setValue = (num:string, x:number, y:number) => {
    if(parseInt(num) == 0){
      return '';
    } else {
      return num;
    }
  }

  return (
    <div>
        <input 
          type="text" 
          id={`${x}:${y}`} 
          defaultValue={setValue(table[x][y], x, y)} />
        <input 
          type="text"
          id={`${x}:${y+1}`} 
          defaultValue={setValue(table[x][y+1], x, y)}/>
        <input 
          type="text" 
          id={`${x}:${y+2}`} 
          defaultValue={setValue(table[x][y+2], x, y)}/>
    </div>
  )
}

export default SudokuInput