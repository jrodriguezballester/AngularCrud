export class Persona {
  static index = 1;
  id = 10;
  nombre: string;
  apellidos: string;

  constructor(nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.id = Persona.index + 1;
    Persona.index++;
  }
}
