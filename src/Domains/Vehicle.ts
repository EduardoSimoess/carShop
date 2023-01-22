import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;

  constructor(atributes: IVehicle) {
    this.id = atributes.id;
    this.model = atributes.model;
    this.year = atributes.year;
    this.color = atributes.color;
    this.status = atributes.status || false;
    this.buyValue = atributes.buyValue;
  }
}

export default Vehicle;