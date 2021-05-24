
export class Producto{
  public id: number;
  public nombre: string;
  public valor: number;
  public existencias: number;
  public categoria: string;
  public imagen: string;
  public descripcion: string;
  public oferta: boolean;

  constructor() {
    this.id = 0;
    this.nombre = 'nombre';
    this.valor = 0;
    this.existencias = 0;
    this.categoria = 'categoria';
    this.imagen = 'imagen';
    this.descripcion = 'descripcion';
    this.oferta = false;

  }

}
