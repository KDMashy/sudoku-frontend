import React from 'react'
import Cookies from 'universal-cookie'
import { SudokuProps } from '../../classes/SudokuInputInterface'

function SudokuInput({x, y}:SudokuProps) {

  const cookie = new Cookies();
  const readTable = JSON.stringify(cookie.get('sudokuTable'));
  readTable.replace('{','').replace('}','');
  var splitTable = readTable.split(':');
  var table = splitTable[1].replace('}','');
  table = JSON.parse(table);
  
  const setValue = (num:string) => {
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
          name={`${x}:${y}`} 
          defaultValue={setValue(table[x][y])} />
        <input 
          type="text"
          name={`${x}:${y+1}`} 
          defaultValue={setValue(table[x][y+1])}/>
        <input 
          type="text" 
          name={`${x}:${y+2}`} 
          defaultValue={setValue(table[x][y+2])}/>
    </div>
  )
}

export default SudokuInput