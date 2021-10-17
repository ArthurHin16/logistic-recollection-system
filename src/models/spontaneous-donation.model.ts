export interface ISpontaneousDonation {
	id: number | string | null;
    kg_frutas_verduras: number | string | null;
	kg_abarrotes: number | null | string;
	kg_pan: number | null | string;
	kg_no_comestibles: number | null | string;
	folio: string | null;
	estatus: string | null ;
    fecha: string | null ;
    responsable: string | null;
    idOperador: number | null | string;
    idTienda: number | null | string;
  }
  