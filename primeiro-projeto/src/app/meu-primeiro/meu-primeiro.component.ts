import { Component } from "@angular/core";

@Component({
    selector: 'meu-primeiro-component',// define nome da tag html que será utilizada para utilizar esse componente no html
    template: `
        <p>Meu primeiro component com Angular!</p>
    `
}) //Fala para o typescript que a classe a baixo é um componente passando metadados por chave valor
export class MeuPrimeiroComponent{}