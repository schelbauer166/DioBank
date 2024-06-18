export class DioAccount {
    private name: string;
    private readonly accountNumber: number;
    balance: number = 0;
    protected status: boolean = true;


    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setName = (name:string):void => {
        this.name = name
    }

    private validStatus = (): boolean => {
        if(this.status) {
            return this.status
        }
        throw new Error("Conta invalida")
        
    }


    getBalance = (): void => {
        console.log(this.balance)
    }

    deposit = (value: number): void | undefined => {
        if(value > 0) {
            this.balance += value
        }
        else throw new Error("Valor invalido")
    }

    withdraw = (value: number): void | undefined => {
        if((this.balance > value) && this.validStatus()) {
            this.balance = this.balance - value
            console.log("Saque confirmado")
            
        }
        else throw new Error("Saldo insuficiente")
    }
}