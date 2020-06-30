export class StaffModel {
    name: string;
    pic: string;
    rol: rol;
    color: string;
}

export enum rol {
    Founder = 'Founder/Developer',
    Developer = 'Developer',
    Administrador = 'Administrador',
    Moderador = 'Moderador',
    Soporte = 'Soporte'
}