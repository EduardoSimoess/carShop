import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(carAtributes: ICar) {
    super(carAtributes);
    this.doorsQty = carAtributes.doorsQty;
    this.seatsQty = carAtributes.seatsQty;
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

  public getdoorsQty() {
    return this.doorsQty;
  }

  public setdoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getseatsQty() {
    return this.seatsQty;
  }

  public setseatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
}

export default Car;