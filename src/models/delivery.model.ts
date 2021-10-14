export interface IDelivery {
    idDonativo: number | null | string;
    idBodega: number | null | string;
    kg_frutas_verduras: number | null | string;
    kg_abarrotes: number | null | string;
    kg_pan: number | null | string;
    kg_no_comestibles: number | null | string;
    estatus: string | null;
    fecha: string | null;
}