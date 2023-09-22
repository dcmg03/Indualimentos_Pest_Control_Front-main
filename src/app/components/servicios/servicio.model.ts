
export interface Servicio {
  id: string;
  name: string;
  description: string;
  creado_por: string;
  rol: string;
}

export interface TipoServicio{
  id: string;
  name: string;
  value: string;
  service_id: string;
}
