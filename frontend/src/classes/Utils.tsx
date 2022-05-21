import axios from "axios";

export class Utils {
    private emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    constructor(){

    }

    checkEmail(email: string) {
        if(!this.emailRegex.test(email)){
            return false;
        }
        return true;
    }

    async sendSubscribe(email:string, difficulty:string) {
        
        // Axios-sal küldene egy Api kérést, de mivel nem érkezik sehova,
        // nem ad response-t sem, ha adna bármit is, akkor true értéket
        // adna vissza a függvény, így csak false-t mert nincs semmi response

        // const respReg = await axios.post('fakecall', {
        //     email: email,
        //     difficulty: difficulty
        // });
        var respReg = null;
        if(respReg){
            return true;
        } else {
            return false;
        }
    }
}