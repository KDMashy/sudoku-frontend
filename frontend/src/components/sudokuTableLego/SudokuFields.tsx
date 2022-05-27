import SudokuInput from './SudokuInput';
import { SudokuProps } from '../../classes/SudokuInputInterface'

function SudokuFields({x, y}:SudokuProps) {

    return (
        <td>
            <SudokuInput x={x} y={y}/>
            <SudokuInput x={x+1} y={y}/>
            <SudokuInput x={x+2} y={y}/>
        </td>
    )
}

export default SudokuFields