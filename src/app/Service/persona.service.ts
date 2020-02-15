import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[] = [
    { id: 11, nombre: 'Mr. Nice', apellidos: 'Perez Garcia' },
    { id: 12, nombre: 'Narco', apellidos: 'Perez Garcia' },
    { id: 13, nombre: 'Bombasto', apellidos: 'Perez Garcia' },
    { id: 14, nombre: 'Celeritas', apellidos: 'Perez Garcia' },
    { id: 15, nombre: 'Magneta', apellidos: 'Perez Garcia' },
    { id: 16, nombre: 'RubberMan', apellidos: 'Perez Garcia' },
    { id: 17, nombre: 'Dynama', apellidos: 'Perez Garcia' },
    { id: 18, nombre: 'Dr IQ', apellidos: 'Perez Garcia' },
    { id: 19, nombre: 'Magma', apellidos: 'Perez Garcia' },
    { id: 20, nombre: 'Tornado', apellidos: 'Perez Garcia' }
  ];
  constructor() { }
  getPersonas() {
    console.log(this.personas);
    return this.personas;
  }
  createPersona(persona: Persona) {
    this.personas.push(persona);
  }
  getPersonaId(id: number) {
   return this.personas.find(elemento => elemento.id == id);
  }
}
