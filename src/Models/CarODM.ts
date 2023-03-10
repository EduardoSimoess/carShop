import {
  // Model,
  Schema,
  model,
  models,
} from 'mongoose';

import ICar from '../Interfaces/ICar';
import IReturn from '../Interfaces/IReturn';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  // protected schema: Schema;
  // private model: Model<ICar>;

  constructor() {
    super('cars', new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    }));
    this.model = models.cars || model('cars', this.schema);
  }
  // public async create(car: ICar): Promise<ICar> {
  //   return this.model.create({ ...car });
  // }

  // public async findById(id: string): Promise<ICar | null> {
  //   const car = await this.model.findById(id);
  //   return car;
  // }

  // public async findAll(): Promise<ICar[]> {
  //   const list = await this.model.find();
  //   return list;
  // }

  public async updateById(id: string, newData: ICar): Promise<IReturn> {
    const car = await this.findById(id);
    if (!car) return { status: 404, message: 'Car not found' };
    const updated = await this.model.findByIdAndUpdate(id, newData, { new: true });
    return { status: 200, car: updated };
  }
}

export default CarODM;