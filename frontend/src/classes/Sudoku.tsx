import Cookies from "universal-cookie";

export class Sudoku {

    private sudokuMtx = [   [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                            [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                            [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                            [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                            [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                            [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                            [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                            [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                            [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];

    constructor() {
        for(var i = 0; i < 9; i++){
            for(var j = 0; j < 9; j++){
                this.sudokuMtx[i][j] = 0;
            }
        }
    }

    getMtx() { return this.sudokuMtx; }

    //számolás
    solve(mtx:any, row:number, col:number): any {
        if (row == 8 && col == 9){
            return true;
        }
        
        if (col == 9){
            row++;
            col = 0;
        }

        if (parseInt(mtx[row][col]) != 0){
            return this.solve(mtx, row, col + 1);
        }

        for(var num = 1; num < 10; num++){
            if (this.safe(mtx, row, col, num)){
                mtx[row][col] = num;
                this.sudokuMtx = mtx;

                if(this.solve(mtx, row, col + 1)){
                    return true;
                }
            }

            mtx[row][col] = 0;
        }
        
        return false;
    }

    //Ellenőrzés, hogy megfelelő lesz-e a szám
    safe(mtx:any, row:number, col:number, num:number){
        for(var x = 0; x <= 8; x++){
            if (mtx[row][x] == num){
                return false;
            }
        }

        for(var x = 0; x <= 8; x++){
            if (mtx[x][col] == num){
                return false;
            }
        }

        var startRow = row - row % 3;
        var startCol = col - col % 3;

        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                if (mtx[i + startRow][j + startCol] == num){
                    return false;
                }
            }
        }

        return true;
    }
}