import { DioAccount } from "./class/DioAccount"
import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"

let contaEmpresa = new CompanyAccount("felipe", 10)

let contaPessoal = new PeopleAccount("Felipe2", 11)


contaEmpresa.deposit(100)
contaEmpresa.getBalance()
contaEmpresa.getLoan(150)
contaEmpresa.getBalance()

contaPessoal.getBalance()
contaPessoal.deposit(100)
contaPessoal.getBalance()