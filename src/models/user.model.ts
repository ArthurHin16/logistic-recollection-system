export interface IUser {
    id : number | string;
    nombre: string | null;
    contrasena: string | null;
    apellidoPaterno: string | null;
    apellidoMaterno: string | null;
    puesto: string | null;
    username: string | null;
    telefonoCelular: number | null | string;
    telefonoCasa: number | null | string;
    correo: string | null;
    idBodega: number| null | string;
}