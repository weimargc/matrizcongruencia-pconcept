export interface MatrizInterface {
  facultad: string;
  programa:string;
  MatrizData: TableInterface;
}

export interface TableInterface {
  encabezadoGrupoMatriz: GrupoEncabezadoMatriz;
}

export interface GrupoEncabezadoMatriz {
  general: ColumnaInterface;
  introduccion:ColumnaInterface;
  constriccion:ColumnaInterface;
  aprobacion:ColumnaInterface;
}

export interface ColumnaInterface {
  titulo: ColumnaInterface;
}

export interface ColumnaInterface {
  titulo: ColumnaInterface;
}

