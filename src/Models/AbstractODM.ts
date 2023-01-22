import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;
  protected vehicle: string;

  constructor(vehicle: string, schema: Schema) {
    this.vehicle = vehicle;
    this.schema = schema;
    this.model = models[this.vehicle] || model(this.vehicle, this.schema);
  }

  public async create(car: T): Promise<T> {
    return this.model.create({ ...car });
  }

  public async findById(id: string): Promise<T | null> {
    const car = await this.model.findById(id);
    return car;
  }

  public async findAll(): Promise<T[]> {
    const list = await this.model.find();
    return list;
  }
}

export default AbstractODM;