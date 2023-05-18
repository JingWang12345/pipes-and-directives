import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

  user: User = {
    username: "codermonkey",
    name: "nicolò", // mi serve  un pipe che trasforma in uppercase la prima lettera
    surname: "esposito",
    yob: 1999, //mi serve un pipe che calcola l'età
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quia nesciunt quam distinctio dicta, similique et perferendis repellat illo laudantium ad. Eveniet quos veniam nisi asperiores illum ut expedita maxime!j"
    // mi serve un pipe che trochi la descrizione dopo 30 caratteri e aggiunga tre puntini
  }
  constructor(){

  }

}


export interface User {
  username: string
  name: string
  surname: string
  yob: number
  description: string
}
