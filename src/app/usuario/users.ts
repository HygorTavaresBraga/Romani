export class Users{

  public id: number;
  public tipo: string;
  public nome: string;
  public cpf: string;
  public telefone: string;
  public email: string;
  public senha: string;

  constructor(
              id:number,
              tipo: string,
              nome: string,
              cpf:string,
              telefone: string,
              email: string,
              senha: string
            ){

              this.id = id;
              this.tipo = tipo;
              this.nome = nome;
              this.cpf = cpf;
              this.telefone = telefone;
              this.email = email;
              this.senha = senha;

             }

}
