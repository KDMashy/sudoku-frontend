import { Utils } from "./Utils";

export const Sudoku = ({
    createDefaultMtx() {
        const sudokuMtx = [     [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                                [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                                [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                                [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                                [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                                [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                                [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                                [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                                [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];
    
        return sudokuMtx;    
    },

    resetMtx(sudokuMtx: any) {
        for(var i = 0; i < 9; i++){
            for(var j = 0; j < 9; j++){
                sudokuMtx[i][j] = 0;
            }
        }
        return sudokuMtx;
    },

    //számolás
    solve(mtx:any, row:number, col:number): any {
        if (row === 8 && col === 9){
            return true;
        }
        
        if (col === 9){
            row++;
            col = 0;
        }

        if (parseInt(mtx[row][col]) !== 0){
            return this.solve(mtx, row, col + 1);
        }

        for(let num = 1; num < 10; num++){
            if (this.safe(mtx, row, col, num)){
                mtx[row][col] = num;
                let toSave = Utils.standardifyStringSession(mtx);
                localStorage.setItem('sudokuTable', toSave);

                if(this.solve(mtx, row, col + 1)){
                    return true;
                }
            }

            mtx[row][col] = 0;
        }
        
        return false;
    },

    //Ellenőrzés, hogy megfelelő lesz-e a szám
    safe(mtx:any, row:number, col:number, num:number){
        for(let x = 0; x <= 8; x++){
            if (mtx[row][x] === num){
                return false;
            }
        }

        for(let x = 0; x <= 8; x++){
            if (mtx[x][col] === num){
                return false;
            }
        }

        let startRow = row - row % 3;
        let startCol = col - col % 3;

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if (mtx[i + startRow][j + startCol] === num){
                    return false;
                }
            }
        }

        return true;
    }
});