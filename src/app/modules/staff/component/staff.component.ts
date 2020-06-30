import { Component, OnInit } from '@angular/core';
import { StaffModel, rol } from '../../../shared/models/staff.model';

@Component({
  selector: 'staff-component',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  founders: StaffModel[];
  developers: StaffModel[];
  administrators: StaffModel[];
  moderators: StaffModel[];
  supports: StaffModel[];

  constructor() { 
    this.founders = [
      {
        color: '#02E6D6',
        name: 'Romero',
        pic: 'assets/citizen-card.png',
        rol: rol.Founder
      },
      {
        color: '#02E6D6',
        name: '𝒊𝑬𝒌𝟏𝒏𝒐𝒙',
        pic: 'assets/citizen-card.png',
        rol: rol.Founder
      },
    ]

    this.developers = [
      {
        color: 'black',
        name: 'Lupesparza',
        pic: 'assets/citizen-card.png',
        rol: rol.Developer
      }
    ]

    this.administrators = [
      {
        color: '#EA2638',
        name: 'Ancho',
        pic: 'assets/citizen-card.png',
        rol: rol.Administrador
      },
      {
        color: '#EA2638',
        name: 'Costeño',
        pic: 'assets/citizen-card.png',
        rol: rol.Administrador
      },
      {
        color: '#EA2638',
        name: 'Crissale',
        pic: 'assets/citizen-card.png',
        rol: rol.Administrador
      },
      {
        color: '#EA2638',
        name: 'Deivid',
        pic: 'assets/citizen-card.png',
        rol: rol.Administrador
      },
      {
        color: '#EA2638',
        name: 'Maguito',
        pic: 'assets/citizen-card.png',
        rol: rol.Administrador
      },
      {
        color: '#EA2638',
        name: 'Papusho',
        pic: 'assets/citizen-card.png',
        rol: rol.Administrador
      },
    ]

    this.moderators = [
      {
        color: '#FD9405',
        name: 'Beto',
        pic: 'assets/citizen-card.png',
        rol: rol.Moderador
      },
      {
        color: '#FD9405',
        name: 'Christopher',
        pic: 'assets/citizen-card.png',
        rol: rol.Moderador
      },
      {
        color: '#FD9405',
        name: 'John Wick',
        pic: 'assets/citizen-card.png',
        rol: rol.Moderador
      },
      {
        color: '#FD9405',
        name: 'Mike',
        pic: 'assets/citizen-card.png',
        rol: rol.Moderador
      },
      {
        color: '#FD9405',
        name: 'Vincent',
        pic: 'assets/citizen-card.png',
        rol: rol.Moderador
      }
    ]

    this.supports = [
      {
        color: '#E7473C',
        name: 'ɠʋɠɭi ɓɽʋɧɧ',
        pic: 'assets/citizen-card.png',
        rol: rol.Soporte
      },
      {
        color: '#E7473C',
        name: 'Daviid',
        pic: 'assets/citizen-card.png',
        rol: rol.Soporte
      },
      {
        color: '#E7473C',
        name: 'ELOCO',
        pic: 'assets/citizen-card.png',
        rol: rol.Soporte
      },
      {
        color: '#E7473C',
        name: 'ErikitaSalvaje',
        pic: 'assets/citizen-card.png',
        rol: rol.Soporte
      },
      {
        color: '#E7473C',
        name: 'F de Freak',
        pic: 'assets/citizen-card.png',
        rol: rol.Soporte
      },
      {
        color: '#E7473C',
        name: 'Guiri',
        pic: 'assets/citizen-card.png',
        rol: rol.Soporte
      },
      {
        color: '#E7473C',
        name: 'Scarplayer',
        pic: 'assets/citizen-card.png',
        rol: rol.Soporte
      },
    ]
  }

  ngOnInit(): void {
  }

}
