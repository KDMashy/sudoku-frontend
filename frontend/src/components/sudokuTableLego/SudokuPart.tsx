import SudokuFields from './SudokuFields'
import { SudokuProps } from '../../classes/SudokuInputInterface'

function SudokuPart({x, y}:SudokuProps) {
  return (
    <tbody>
      <tr>
        <SudokuFields x={x} y={y}/>
        <SudokuFields x={x} y={y+3}/>
        <SudokuFields x={x} y={y+6}/>
      </tr>
    </tbody>
  )
}

export default SudokuPart