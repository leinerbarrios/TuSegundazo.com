export class Vehiculo {
  constructor(
    public readonly id: number,
    public readonly marca: string,
    public readonly linea: string,
    public readonly referencia: string,
    public readonly modelo: number,
    public readonly kilometraje: number,
    public readonly color: string,
  ) {}
}
