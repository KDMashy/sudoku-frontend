import { Sudoku } from '../../classes/Sudoku';
import { SudokuProps } from '../../classes/SudokuInputInterface'
import { Utils } from '../../classes/Utils';

function SudokuInput({x, y}:SudokuProps) {

  let stringTable = localStorage.getItem('sudokuTable');
  let table = Sudoku.createDefaultMtx();

  if(stringTable){
    table = Utils.transferTable(stringTable, table);
  }

  const setValue = (num:number, x:number, y:number) => {
    if(num === 0){
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