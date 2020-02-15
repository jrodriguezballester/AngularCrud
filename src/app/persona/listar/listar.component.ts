import { Component, OnInit } from '@angular/core';
// import {service} from './../../Service/service.service';
import { PersonaService } from 'src/app/Service/persona.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  personas: Persona[];
  constructor(private router: Router, private service: PersonaService) { }

  ngOnInit() {
    this.personas = this.service.getPersonas();
  }

}
