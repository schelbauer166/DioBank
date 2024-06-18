import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {


    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if (this.status) {
            this.balance = this.balance + (value + 10)
        }
        else throw new Error("Erro no deposito")
    }

}