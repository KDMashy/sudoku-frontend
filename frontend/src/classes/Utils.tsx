export const Utils = ({
    checkEmail(email: string) {
        const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
        if(!emailRegex.test(email)){
            return false;
        }
        return true;
    },

    async sendSubscribe(email:string, difficulty:string) {
    
        // Axios-sal küldene egy Api kérést, de mivel nem érkezik sehova,
        // nem ad response-t sem, ha adna bármit is, akkor true értéket
        // adna vissza a függvény, így csak false-t mert nincs semmi response
    
        // const respReg = await axios.post('fakecall', {
        //     email: email,
        //     difficulty: difficulty
        // });
    
        //FAKE RESPONSE VAN VÁLASZ
        if(email === "teszt@gmail.com"){
            return true
        }
    
        //FAKE RESPONSE NINCS VÁLASZ
        let respReg = null;
        if(respReg){
            return true;
        } else {
            return false;
        }
    },

    standardifyStringSession(mtx: any) {
        let toSave = JSON.stringify(mtx);
        toSave = toSave.replace('[[', '').replaceAll(']]', '');
    
        return toSave;
    },

    transferTable(stringTable: string, table: any){
        let splitTable = stringTable.split('],[');
        let row: number = 0,
            col: number = 0;
        splitTable.forEach(stringRow => {
            let tableNumberString = stringRow.split(',');
            tableNumberString.forEach(stringNum => {
            table[row][col] = parseInt(stringNum);
            col++;
            });
            row++;
            col = 0;
        });
    
        return table;
    }
});