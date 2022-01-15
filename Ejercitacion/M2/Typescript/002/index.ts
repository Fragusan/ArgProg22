// Import stylesheets
import './style.css';

// Write TypeScript code!


class persona{
  public nombre: string;
  public apellido: string;
  public anioNac: number;

  constructor (nombre:string, apellido:string, anioNac:number){
    this.nombre=nombre;
    this.apellido=apellido;
  }

  public saludar():string {
    return this.nombre + " " + this.apellido;
  }

  public edad():number{
    let hoy :any = new Date()
    let actual: number = hoy.getFullYear()
    let calculo: number = (actual - this.anioNac)

    return (calculo !== Number.NaN)? "31" : calculo
  }
}
let Franco = new persona("Franco", "Sánchez", 1991)

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Se creo la instancia ${Franco.saludar()} de ${Franco.edad()} años</h1>`;