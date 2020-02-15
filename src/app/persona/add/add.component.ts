import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Service/persona.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(private router: Router, private service: PersonaService) {}

  ngOnInit() {}
  Guardar(nombre, apellidos) {
    const persona = new Persona(nombre.value, apellidos.value);
    this.service.createPersona(persona);
    alert('Agregado');
    this.router.navigate(['listar']);
  }
}
