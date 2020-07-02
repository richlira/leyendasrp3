import { Component } from '@angular/core';
import { RulesModel } from '../../../shared/models/rules.model';

@Component({
  selector: 'rules-component',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent { 
  rules: RulesModel[];

  constructor() {
    this.rules = [
      {
        title: 'Reglamento Ciudadano',
        caption: 'Reglamento Ciudadano',
        image: 'assets/citizen-card.png',
        description: 'Las reglas esenciales de todos los ciudadanos',
        action: 'Leer reglamento',
        url: 'https://bit.ly/NormativaGeneral-LeyendasRP'
      },
      {
        title: 'Reglamento LSPD',
        caption: 'Reglamento LSPD',
        image: 'assets/police-card.png',
        description: 'Las reglas para los policias de la ciudad',
        action: 'Leer reglamento',
        url: 'https://bit.ly/NormativaLSPD-LeyendasRP'
      },
      {
        title: 'Reglamento EMS',
        caption: 'Reglamento EMS',
        image: 'assets/ems-card.png',
        description: 'Las reglas de todos los medicos de la ciudad',
        action: 'Leer reglamento',
        url: 'https://docs.google.com/document/d/1-GSyALHEdWUgT2ODU5upElzfgHWo7PM_mAC9r5ouaXQ/edit'
      },
      {
        title: 'Reglamento Atracos',
        caption: 'Reglamento Atracos',
        image: 'assets/criminal-card.png',
        description: 'Las reglas para llevar atracos en la ciudad',
        action: 'Leer reglamento',
        url: 'https://docs.google.com/document/d/1_4_fxEF48HRMDifQ8xCXAi_A-BGwfnguEfxXlEs3vrY/edit#'
      },
      {
        title: 'Reglamento Mecanicos',
        caption: 'Reglamento Mecanicos',
        image: 'assets/mechanic-card.png',
        description: 'Las reglas para llevar el rol de mecanico',
        action: 'Leer reglamento',
        url: 'https://docs.google.com/document/d/1XTd8utmpwfKPs05IaoZDu0m8r6SRck7zR2VeesR8Htc/edit'
      },
      {
        title: 'Reglamento Bandas/Mafia',
        caption: 'Reglamento Bandas y Mafia',
        image: 'assets/mafia-card.png',
        description: 'Las reglas para el rol de las bandas y las mafias',
        action: 'Leer reglamento',
        url: 'https://docs.google.com/document/d/14poo-BVZdsuqJrwu0wbKltZ88hnkwJaD4pEgw-L3xts/edit?usp=sharing'
      }
    ]
  }
}
