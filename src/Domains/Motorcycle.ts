import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycleAtributes: IMotorcycle) {
    super(motorcycleAtributes);
    this.category = motorcycleAtributes.category;
    this.engineCapacity = motorcycleAtributes.engineCapacity;
  }

  public getId() {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getModel() {
    return this.model;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getyear() {
    return this.year;
  }

  public setyear(year: number) {
    this.year = year;
  }

  public getcolor() {
    return this.color;
  }

  public setcolor(color: string) {
    this.color = color;
  }

  public getstatus() {
    return this.status;
  }

  public setstatus(status: boolean) {
    this.status = status;
  }

  public getbuyValue() {
    return this.buyValue;
  }

  public setbuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getCategory() {
    return this.category;
  }

  public setCategory(category: string) {
    this.category = category;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }

  public setEnginCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;